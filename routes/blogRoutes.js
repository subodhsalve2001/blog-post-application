const { getAllBlogs, addBlog, removeBlog } = require("../controller/blogController")

const router = require("express").Router()
router
    .get("/", getAllBlogs)
    .post("/add", addBlog)
    .delete("/:blogId", removeBlog)

module.exports = router