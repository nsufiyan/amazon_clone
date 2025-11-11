
var express = require("express");
var cors = require("cors");
var session = require("express-session");
var mongodbSession = require("connect-mongodb-session")(session)

var app = express();
app.use(cors({ origin: "http://localhost:3000", credentials: true, }));
const path = require('path')
const db = require("./db")
const amazonRouter = require("./Router/amazonRouter");
const userRouter = require("./Router/userAccountRouter");
app.use(express.json());
app.use(express.static(path.join(__dirname, '/media')));



var store = new mongodbSession({
    uri: 'mongodb://127.0.0.1:27017/Amazon',
    collection: 'mySessions'
});
// Catch errors
store.on('error', function (error) {
    console.log(error);
});

app.use(require('express-session')({
    secret: 'This is a secret',
    cookie: {
        maxAge: 1000 * 60 * 2,//2 min
        secure: false,
        sameSite: "Strict",
        httpOnly: true
    },
    store: store,
    resave: false,
    saveUninitialized: false,

}));



app.use((req, res, next) => {
    console.log(`${new Date()} :: ${req.method} :: ${req.path} :: ${JSON.stringify(req.body)}`);
    next();
});

app.get("/api/health", (req, res) => {
    res.status(200).send("OK");
});

app.use("/api", amazonRouter);
app.use("/api", userRouter);



app.listen(5050, () => {
    console.log("Server is started at https:127.0.0.1:5050")
})

