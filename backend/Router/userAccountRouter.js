const express = require("express");
const userRouter = express.Router();
const { add, get, deleteAcc, update } = require("../Controller/userAccountController")

const { checkSession } = require("../util/sessionCheck")
userRouter.post("/get-user", get);
userRouter.post("/login-user", add);
userRouter.delete("/delete-user", deleteAcc);
userRouter.put("/update-user", update);

module.exports = userRouter;