const mongoose = require("mongoose")
const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "please enter title"]
    },
    desc: {
        type: String,
        required: [true, "please enter desc"]
    },
    img: {
        type: String,
        required: [true, "please enter priority"]
    },
    publish: {
        type: Boolean,
        default: true
    }
})
module.exports = mongoose.model("blog", blogSchema)