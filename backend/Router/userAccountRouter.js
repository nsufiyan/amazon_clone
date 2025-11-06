const express = require("express");
const userRouter = express.Router();
const { add, get, deleteAcc } = require("../Controller/userAccountController")


userRouter.get("/get-user", get);
userRouter.post("/login-user", add);
userRouter.delete("/delete-user", deleteAcc);

module.exports = userRouter;