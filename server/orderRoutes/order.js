const express=require('express')
const User =require('../modals/userSchema')
const order=require('../modals/orderModal')
const orderRoutes=express.Router();

orderRoutes.post('/postorder',async(req,res)=>{
try {
    const {email,orders}=req.body;
    // console.log(req.body)
        const checkemail= await order.findOne({email:email})
        if(!checkemail){
            await order.create({
                email:email,
                orders:orders
            })
          return  res.json({
                message:"Order Created",
                success:true
            })
        }
        await order.updateOne({email:email},{$push:{orders:orders}})
       return  res.json({
            message:"Order Updated",
            success:true
        })
} catch (error) {
 console.log(error)  
 res.send(error) 
}
   
})
orderRoutes.get('/getorder',async(req,res)=>{
try {
    const findorder= await order.find();
    res.send({
       order: findorder
    })
} catch (error) {
    res.send(error)
}
 
})

module.exports=orderRoutes;
