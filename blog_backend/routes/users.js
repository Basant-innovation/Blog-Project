const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const verify = require("../middlewares/verify_token");
let User = require("../models/user.model");

const { tokenSecret } = require("../config");
const {
  signUpValidation,
  signInValidation,
} = require("../middlewares/validate");

//to make it clean make a folder called controller
// that has all crud operation functionallity and then import it to this file
//move this functions to contrller file
// const createUser = async (req, res) => {
//   const user = new User(req.body);
//   const [token] = await Promise.all([user.genereateAuthToken(), user.save()]);
//   res.status(201).json({ user, token, message: "Signed up Successfully" });
// };

////////////////////////////////////////////////////////////////////////

//routes to the controllers
router.route("/signup").post(async (req, res) => {
  //validate
  const { error } = signUpValidation(req.body);
  if (error) return res.status(400).send("Error: " + error.details[0].message);

  const username = req.body.username;
  const title = req.body.title;
  const unhashedPassword = req.body.password;
  const email = req.body.email;

  //checking if the user is already in the database before adding it
  const emailExists = await User.findOne({ email });
  if (emailExists) return res.status(400).send("Email already exists");

  //Hash the password
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(unhashedPassword, salt);

  //adding and saving new user to database
  const newUser = new User({ username, title, password, email });
  try {
    await newUser.save();
    res.status(201).send("User added");
  } catch (err) {
    res.status(400).send("Error: " + err);
  }
});

router.route("/signin").post(async (req, res) => {
  //validate
  const { error } = signInValidation(req.body);
  if (error) return res.status(400).send("Error: " + error.details[0].message);

  const password = req.body.password;
  const email = req.body.email;

  //checking email in the database
  const user = await User.findOne({ email });
  if (!user) return res.status(400).send("Invalid email address");

  //checking if password is correect
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).send("Invalid Password");

  const token = jwt.sign({ _id: user._id }, tokenSecret);
  res.send({ token, user });
});

//get all users
router.route("/").post(async (req, res) => {
  const users = await Post.find();
  res.json(users);
});

//get user by id
router.route("/:id").post(verify, async (req, res) => {
  const user = await Post.findById(req.params.id);
  res.json(user);
});

router.route("/getCurrentUser").get(verify, async (req, res) => {
  const user = await User.findById(req.user._id);
  res.json({ user });
});

module.exports = router;
