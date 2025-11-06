const userSchema = require("../model/userAccount");

const addUser = (data) => {
    return userSchema.create(data);
}

const getUser = (data) => {
    return userSchema.find(data).exec();
}

const deleteUser = (data) => {
    return userSchema.findOneAndDelete(data).exec()
}

module.exports = { addUser, getUser, deleteUser };