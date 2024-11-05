const mongoose = require('mongoose')



const OrderSchema = new mongoose.Schema({
    UserId:{
        type: Number,
        required: true
    },
    OrderDate:{
        type:String,
        required:false
    },
    ProductId:{
        type:Number,
        required : true    
    },
    OrderPrice:{
        type:Number,
        required : true
    },
    ShippingAdress:{
        type:String,
        required : true
     
    }
   
        

        
    }
)

const Order = mongoose.model("Order", OrderSchema)
module.exports = Order;