const mongoose = require("mongoose");
const amazonSchema = new mongoose.Schema({
    title: String,
    image: String
}, { timestamps: true });

module.exports = mongoose.model("card", amazonSchema);