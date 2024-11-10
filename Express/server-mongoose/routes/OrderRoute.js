const express = require('express');
const router = express.Router();
const Order = require('../models/OrderSchema');
const validate = require('../config/auth')
//Method : GET | API URL: localhost:3000/order/all
router.get('/all',validate,async(req,res)=>{
    try{
        const order = await Order.find();
        res.status(200).json(order);
    }
    catch (error){
        res.status(500).json({message:error.message});
    }
});

router.post("/add",async(req,res)=>{
    try{
        const OrderData = new Order(req.body);
        const{UserId,OrderDate,ProductId,OrderPrice,ShippingAdress} = OrderData;
        if(!UserId || !OrderDate || !ProductId || !OrderPrice || !ShippingAdress){
            res.status(401).json({message: "All fields required"});
        }
             const storedata = await OrderData.save();
             res.status(200).json(storedata);
    } catch(error){
        res.status(500).json({ message: error.message });
    }
});
router.put('/edit/:id',async(req,res)=>{
    try{
        const id = req.params.id
        const existingorder = await Order.findOne({_id:id})
        if(!existingorder){
            res.status(404).json({message:error.message})
        }
        const updateorder = await Order.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json(updateorder)
    } catch(error){
        res.status(500).json({ message: error.message });
    }
})

router.delete('/delete/:id', async(req,res)=>{
    try{
        const id = req.params.id
        const existingorder = await Order.findOne({_id:id})
        if(!existingorder){
            res.status(404).json({message:"Product not found!"})
        }
       await Order.findByIdAndDelete(id)
        res.status(200).json({message:"Order Deleted"})
    } catch(error){
        res.status(500).json({ message: error.message });
    }
})

module.exports = router;

    

