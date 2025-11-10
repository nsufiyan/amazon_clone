const mongoose = require("mongoose")


//connecting to db
mongoose.connect('mongodb://localhost:27017/Amazon')
    .then(() => {
        console.log("Connected to Amazon database successfully")
    })
    .catch((err) => {
        console.log(err);
    });

