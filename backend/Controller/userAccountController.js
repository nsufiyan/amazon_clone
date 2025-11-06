const { addUser, getUser, deleteUser } = require("../DAO/userAccountDAO")


const add = async (req, res, next) => {
    res.json({
        message: "user added successfully",
        data: await addUser(req.body)
    })
};


const get = async (req, res, next) => {

    let getData = await getUser(req.body)
    res.json({
        messge: "user fetch successfully",
        data: getData
    })
};


const deleteAcc = async (req, res, next) => {
    res.json({
        message: "deleted successfully",
        data: await deleteUser(req.query)
    })
};

module.exports = { add, get, deleteAcc };