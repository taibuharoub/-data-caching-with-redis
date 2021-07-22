const Post = require("../models/Post");

exports.getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find().cache();
    res.status(200).json({
      message: "Fetched posts successfully.",
      posts: posts,
      totalPosts: posts.length,
    });
  } catch (error) {
    console.log(error);
  }
};
exports.createPost = async (req, res, next) => {
  const { title, content } = req.body;
  try {
    const post = new Post({
      title,
      content,
    });
    await post.save();
    res.status(201).json({
      message: "Post created successfuly",
      post: post,
    });
  } catch (error) {
    console.log(error);
  }
};
