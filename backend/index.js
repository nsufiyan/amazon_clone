
var express = require("express");
var cors = require("cors");

var app = express();
app.use(cors({ origin: "http://localhost:3000", credentials: true, }));
const path = require('path')
var mongoose = require("mongoose");
const amazonRouter = require("./Router/amazonRouter");
const userRouter = require("./Router/userAccountRouter");
app.use(express.json());
app.use(express.static(path.join(__dirname, '/media')));


//connecting to db
mongoose.connect('mongodb://localhost:27017/Amazon')
    .then(() => {
        console.log("Connected to Amazon database successfully")
    })
    .catch((err) => {
        console.log(err);
    });


app.use((req, res, next) => {
    console.log(`${new Date()} :: ${req.method} :: ${req.path} :: ${JSON.stringify(req.body)}`);
    next();
});

app.use("/api", amazonRouter);
app.use("/api", userRouter);



app.listen(5050, () => {
    console.log("Server is started at https:127.0.0.1:5050")
})

