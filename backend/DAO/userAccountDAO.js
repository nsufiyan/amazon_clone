const userSchema = require("../model/userAccount");

const addUser = (data) => {
    return userSchema.create(data);
}

const getUser = (data) => {
    return userSchema.findOne(data).exec();
}

const deleteUser = (data) => {
    return userSchema.findOneAndDelete(data).exec()
}

const updateUser = (query, data) => {
    return userSchema.findOneAndUpdate(query, data, { new: true }).exec()
}

module.exports = { addUser, getUser, deleteUser, updateUser };