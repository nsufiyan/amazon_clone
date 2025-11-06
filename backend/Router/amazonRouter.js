const express = require("express");
const amazonRouter = express.Router();
const { getFunction, postFunction } = require("../Controller/amazonController")
const multer = require("multer");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './media')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })


amazonRouter.get("/images", getFunction);
amazonRouter.post("/insert", upload.single('image'), postFunction);

module.exports = amazonRouter;