const express = require("express");
const router = express.Router();
const verify = require("../middlewares/verify_token");

let Post = require("../models/post.model");
//شغلي الجت يا بسنت فيها غلط
router.route("/").get(async (req, res) => {
  //get all with pagination reem
  const postsPerPage = 4;
  const page = req.params.page || 1;
  const totalPosts = await Post.countDocuments();
  const posts = await Post.find()
    .populate("author")
    .sort({ updatedAt: -1 })
    .skip(postsPerPage * page - postsPerPage)
    .limit(postsPerPage);
  return { totalPosts, posts };
});

router.route("/add").post(verify, (req, res) => {
  //res.send(req.user); عشان اعمل التوكن
  const title = req.body.title;
  const content = req.body.content;
  const imgUrl = req.body.imgUrl;
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
    .then(() => res.json("Post added"))
    .catch((err) => res.status(400).json("Error" + err));
});

router.route("/edit/:id").post(verify, (req, res) => {
  Post.findById(req.params.id)
    .then((post) => {
      post.title = req.body.title;
      post.content = req.body.content;
      post.imgUrl = req.body.imgUrl;
      post.tags = req.body.tags;
      post.date = Date.now();
      post
        .save()
        .then(() => res.json("Post updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error " + err));
});

//find posts of author reem
router.route("/myposts").get(verify, async (req, res) => {
  const myposts = await Post.find({ author: req.user._id });
  res.status(200).json(myposts);
});

router.route("/:id").get((req, res) => {
  Post.findById(req.params.id)
    .then((post) => res.json(post))
    .catch((err) => res.status(400).json("Error" + err));
});

router.route("/:id").delete(verify, (req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then(() => res.json("Post deleted"))
    .catch((err) => res.status(400).json("Error" + err));
});

module.exports = router;
