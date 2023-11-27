const mongoose=require('mongoose');


const orderSchema=new mongoose.Schema({
 
    email:{
        type:String
    },
    orders:{
        type:Array
    }
})

const order= mongoose.model('order',orderSchema)
module.exports=order;