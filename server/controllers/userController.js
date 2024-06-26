const express = require("express")
const router = express.Router();
const {Users} = require("../models/userModel")

// console.log(Users);
// console.log(typeof userModel.create); // Should output 'function'


router.post("/user",async (req,res)=>{
    console.log(req.body);
    try {
        const {emailOrPhone,name,userName,password} = req.body;
        const result = {emailOrPhone: emailOrPhone,name: name,userName: userName,password: password};
        await Users.create(result)
        const response = await Users.find()
        console.log(response);
        res.json(response)
    } catch (error) {
        console.log(error);
    }
})

module.exports = router