const mongoose = require("mongoose")
const db = () => {
    try {
        mongoose.set('strictQuery',true)
        mongoose.connect(process.env.MONGO_URL)
        console.log("DB Connected");
    } catch (error) {
        console.log(error.message);
    }
}
module.exports = db