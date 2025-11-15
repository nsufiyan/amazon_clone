const { addUser, getUser, deleteUser, updateUser } = require("../DAO/userAccountDAO")


const add = async (req, res, next) => {
    let savedData = await addUser(req.body)

    req.session.user = savedData
    res.json({
        message: "user added successfully",
        data: savedData
    })
};


const get = async (req, res, next) => {
    try {
        const { phone, password } = req.body
        if (!phone || !password) {
            res.json({
                success: false,
                message: "Invalid credentials"
            })
        }
        else {
            let getData = await getUser(req.body)

            res.json({
                success: getData ? true : false,
                message: getData ? "Successfully Sing in" : "Invalid username or password ",
                data: getData

            })
        }
    }
    catch (err) {
        console.log(err)
    }
};


const deleteAcc = async (req, res, next) => {
    res.json({
        message: "deleted successfully",
        data: await deleteUser(req.query)
    })
};


const update = async (req, res, next) => {

    let updatedUser = await updateUser(req.body.query, { $set: req.body.updatedData })
    res.json({
        success: updatedUser ? true : false,
        message: updatedUser ? "Address updated" : "login required",
        data: updatedUser

    })
}

module.exports = { add, get, deleteAcc, update };