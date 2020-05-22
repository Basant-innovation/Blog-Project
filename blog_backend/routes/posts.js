const express = require("express");
const router = express.Router();

let Post = require("../models/post.model");

router.route("/add").post((req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const imgUrl = req.body.imgUrl;
  const tags = req.body.tags;
  const publish_date = Date.now();
  const newPost = new Post({ title, content, imgUrl, tags, publish_date });

  newPost
    .save()
    .then(() => res.json("Post added"))
    .catch((err) => res.status(400).json("Error" + err));
});

router.route("/:id").get((req, res) => {
  Post.findById(req.params.id)
    .then((post) => res.json(post))
    .catch((err) => res.status(400).json("Error" + err));
});

router.route("/:id").delete((req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then(() => res.json("Post deleted"))
    .catch((err) => res.status(400).json("Error" + err));
});

router.route("/edit/:id").post((req, res) => {
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

module.exports = router;
