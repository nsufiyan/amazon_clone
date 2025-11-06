const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    fName: {
        type: String,
        required: true,
    },
    mName: String,
    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    emai: String,
    address: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("user", userSchema);