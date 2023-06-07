const Blog = require("../models/BlogModel")
exports.getAllBlogs = async (req, res) => {
    try {
        const result = await Blog.find()
        res.json({
            success: true,
            message: "all blogs fetched",
            result
        })
    } catch (error) {
        res.json({
            success: false,
            message: `error ${error.message}`
        })
    }
}
exports.addBlog = async (req, res) => {
    try {
        await Blog.create(req.body)
        res.json({
            success: true,
            message: " blog create\d",
        })
    } catch (error) {
        res.json({
            success: false,
            message: `error ${error.message}`
        })
    }
}
exports.removeBlog = async (req, res) => {
    try {
        const { blogId } = req.params
        await Blog.findByIdAndDelete(blogId)
        res.json({
            success: true,
            message: " blog deleted",
        })
    } catch (error) {
        res.json({
            success: false,
            message: `error ${error.message}`
        })
    }
}