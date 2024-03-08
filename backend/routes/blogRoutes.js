const express = require("express");
const {
  getAllBlogsController,
  createBlogController,
  updateBlogController,
  getBlogByIdController,
  deleteBlogController,
  userBlogController,
} = require("../controller/blogController");

const router = express.Router();

//GET || all blogs
router.get("/all-blog", getAllBlogsController);

//POST || create blog
router.post("/create-blog", createBlogController);

//PUT || update blog
router.put("/update-blog/:id", updateBlogController);

//GET || singel blog
router.get("/get-blog/:id", getBlogByIdController);

//DELETE ||  delete blog
router.delete("/delete-blog/:id", deleteBlogController);

//GET || user blogs
router.get("/user-blog/:id", userBlogController);
module.exports = router;
