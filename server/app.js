const express=require('express');
const app =express();
const port=8000;
// const order=require('./modals/orderModal')
// const dotenv=require('dotenv')
const mongoose=require('mongoose')
const cors=require('cors')
const User=require('../server/modals/userSchema')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const {braintreeControllerToken}=require('../server/controller/gatewayController')
const {braintreePayment}=require('../server/controller/gatewayController');
const orderRoutes = require('./orderRoutes/order');
app.use(cors());

app.use(express.json());
mongoose.connect('mongodb://0.0.0.0:27017/mern-authen').then(()=>{
    console.log("connected")
})

//  ..........................................REGISTER ROUTE.......................................
// const hashPassword=await bcrypt.hash(password,11);
// const hashCPassword=await bcrypt.hash(cpassword,11);
app.post('/register',async(req,res)=>{
    // console.log(req.body);
    
    try{
        const {name,email,password,cpassword}=req.body;
        // validation
        if(!name|| !email || !password || !cpassword){
          return  res.send('Pls fill all the fields')
        }
        // existing user
        const existingUser= await User.findOne({email:email})
        if(existingUser){
          return  res.status(500).send({
                success:false,
                message:'already an email exist'
            })
        }
        else if(cpassword!=password){
            return  res.send({message:'password doesnot match',
                     success:false
        })
        }
        else{
        const hashPassword=await bcrypt.hash(password,11);
        const hashCPassword=await bcrypt.hash(cpassword,11);
        // new user create
         const newUser=   await User.create({
                name:name,
                email:email,
                password:hashPassword,
                cpassword:hashCPassword
               })
               if(newUser){

             return      res.json({status:'ok',
                   message:'registered successfully',
                   success:true
                })
            }
        }
    }
    catch(err){
        res.status(500).send({
            success:false,
            message:'registration unsuccesful',
            err
        })
    }
})
// ......................................LOGIN ROUTE.................................
app.post('/login', async(req,res)=>{
    // res.send({status:'ok'})
    try {
    const {email,password}=req.body;
    if(!email|| !password){
        return res.send({message:'pls fill'})
    }
    const user=await User.findOne({email:email})
    if(user){
        // const hashPassword=await bcrypt.hash(password,11);
        const isMatch=await bcrypt.compare( password,user.password)
        if(!isMatch){
            return res.send({
                success:false,
                message:'Password doesnt match'
            })
        }
        else{
        // create token
        const token=  await jwt.sign({_id:user.id},'secee123',{expiresIn:'7d'})
       if(token){ res.send({
            success:true,
            message:'Logged in succesfully',
            email,
            token,
        })
    }
       return res.cookie("jwt",token,{
            expires:new Date(Date.now()+50000),
            httpOnly:true
        })
    }
} 
        }
    catch (error) {
        res.status(500).send({
            success:false,
            message:'error in login'
            ,error
        })
    }
})
app.use('/',orderRoutes)
app.use('/',(req,res)=>{
    res.send("heloo")
})
// payment ......................
// token
// app.get('/braintree/token',braintreeControllerToken)
// // payment controller
// app.get('/braintree/payment',braintreePayment)
app.listen(port,()=>{
    console.log(`server running port :${port}`)
})





