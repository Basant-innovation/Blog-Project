const express = require("express");
const router = express.Router();
const cloudinary = require("cloudinary");
const verify = require("../middlewares/verify_token");

let Post = require("../models/post.model");

//get all posts
router.route("/").get(async (req, res) => {
  const postsPerPage = 4;
  const page = parseInt(req.query.page);
  const posts = await Post.find()
    .sort({ updatedAt: -1 })
    .skip(postsPerPage * page - postsPerPage)
    .limit(postsPerPage)
    .populate("author");
  const totalPosts = await Post.countDocuments();
  res.json({ totalPosts, posts });
});

//add post
router.route("/add").post(verify, async (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  let imgUrl = req.file
    ? `${req.protocol}://${req.headers.host}/uploads/${req.file.filename}`
    : "";
  if (req.file) {
    try {
      const result = await cloudinary.v2.uploader.upload(req.file.path);
      imgUrl = result.secure_url;
    } catch (error) {
      console.log(error);
    }
  }
  const tags = req.body.tags;
  const publish_date = Date.now();
  const author = req.user._id;
  const newPost = new Post({
    title,
    content,
    imgUrl,
    tags,
    publish_date,
    author,
  });

  newPost
    .save()
    .then(() => res.json(newPost))
    .catch((err) => res.status(400).json("Error" + err));
});

//edit post
router.route("/edit/:id").post(verify, (req, res) => {
  Post.findById(req.params.id)
    .then(async (post) => {
      post.title = req.body.title;
      post.content = req.body.content;

      let imgUrl = req.file
        ? `${req.protocol}://${req.headers.host}/uploads/${req.file.filename}`
        : req.body.imgUrl;
      if (req.file) {
        try {
          const result = await cloudinary.v2.uploader.upload(req.file.path);
          imgUrl = result.secure_url;
        } catch (error) {
          console.log(error);
        }
      }
      post.imgUrl = imgUrl;
      post.tags = req.body.tags;
      post.date = Date.now();
      post
        .save()
        .then(() => res.json(post))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error " + err));
});

//get signedin user posts
router.route("/myposts/:id").get(verify, async (req, res) => {
  const myposts = await Post.find({ author: req.params.id })
    .sort({ updatedAt: -1 })
    .populate("author");
  res.status(200).json(myposts);
});

//get posts by id
router.route("/:id").get((req, res) => {
  Post.findById(req.params.id)
    .populate("author")
    .then((post) => res.json(post))
    .catch((err) => res.status(400).json("Error" + err));
});

//delete post
router.route("/:id").delete(verify, (req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then(() => res.json("Post deleted"))
    .catch((err) => res.status(400).json("Error" + err));
});

module.exports = router;
