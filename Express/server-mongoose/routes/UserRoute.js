const express = require('express')
const router = express.Router()
const Users = require('../models/UserModel')

router.get('/all',async(req,res)=>{
    try{
        const users = await Users.find()
        res.status(200).json(users)
    }
    catch (error){
        res.status(500).json({message:error.message})
    }
})
router.post("/add",async(req,res)=>{
    try{
        const UserData = new Users(req.body);
        const{name,email,password,phoneNumber,address} = UserData;
        if(!name || !email || !password || !phoneNumber || !address){
            res.status(401).json({message: "All fields required"});
        }
             const storedata = await UserData.save();
             res.status(200).json(storedata);
    } catch(error){
        res.status(500).json({ message: error.message });
    }
});
router.put('/edit/:id',async(req,res)=>{
    try{
        const id = req.params.id
        const existinguser = await Users.findOne({_id:id})
        if(!existinguser){
            res.status(404).json({message:error.message})
        }
        const updateuser = await Users.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json(updateuser)
    } catch(error){
        res.status(500).json({ message: error.message });
    }
})

router.delete('/delete/:id', async(req,res)=>{
    try{
        const id = req.params.id
        const existinguser = await Users.findOne({_id:id})
        if(!existinguser){
            res.status(404).json({message:"Product not found!"})
        }
       await Users.findByIdAndDelete(id)
        res.status(200).json({message:"Order Deleted"})
    } catch(error){
        res.status(500).json({ message: error.message });
    }
})

module.exports = router;

    

