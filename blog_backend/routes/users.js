const express = require("express");
const router = express.Router();
let User = require("../models/user.model");

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
router.route("/add").post((req, res) => {
  const username = req.body.username;
  const title = req.body.title;
  const password = req.body.password;
  const email = req.body.email;
  const newUser = new User({ username, title, password, email });

  newUser
    .save()
    .then(() => res.json("User added"))
    .catch((err) => res.status(400).json("Error" + err));
});

// validateLogin([
//   body('email')
//     .exists()
//     .withMessage('Email is required')
//     .matches(emailRegex)
//     .withMessage('Email is invalid'),
//   body('password').exists().withMessage('Password is required'),
// ]);

// router.route("/login").post(validateLogin,(req, res) => {
//   const username = req.body.username;
//   const title = req.body.title;
//   const password = req.body.password;
//   const email = req.body.email;
//   const newUser = new User({ username, title, password, email });

//   newUser
//     .save()
//     .then(() => res.json("User added"))
//     .catch((err) => res.status(400).json("Error" + err));
// });

module.exports = router;
