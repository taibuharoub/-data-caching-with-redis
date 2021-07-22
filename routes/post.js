const express = require("express");
const postsController = require("../controllers/post");
const router = express.Router();

router.get("/posts", postsController.getPosts);
router.post("/posts", postsController.createPost);

module.exports = router;
