require("dotenv").config()
const mongoose = require("mongoose")
//connecting to db
mongoose.connect(process.env.db_URL)
    .then(() => {
        console.log("Connected to Amazon database successfully")
    })
    .catch((err) => {
        console.log(err);
    });

