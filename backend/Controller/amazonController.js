const { addtodb, retrivefromdb } = require("../DAO/amazonDAO");


const getFunction = async (req, res, next) => {
    let retriveData = await retrivefromdb(req.body);
    res.json(
        retriveData
    )

};

const postFunction = async (req, res, next) => {
    req.body.image = `http://localhost:5050/${req.file.filename}`
    let savedData = await addtodb(req.body)
    res.json({
        message: "Data send successfully",
        data: savedData
    })
    console.log(req.file)
    console.log(savedData)
};

module.exports = { getFunction, postFunction }