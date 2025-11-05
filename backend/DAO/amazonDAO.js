const amazonSchema = require("../model/amazonSchema");

const addtodb = async (data) => {
    return await amazonSchema.create(data);
}

const retrivefromdb = async (data) => {
    return await amazonSchema.find(data).exec();
}
module.exports = { addtodb, retrivefromdb };