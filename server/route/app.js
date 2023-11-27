import express from 'express';
const app=express();
const orderRoutes=require('../orderRoutes/order.js')
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import route from './route.js'
// middleware
app.use(express.json())
// env
dotenv.config();
// connection to db
const uri='mongodb://0.0.0.0:27017';
mongoose.connect(uri).then(()=>{
    console.log(`successfuly connected ${mongoose.connection.host}`);
}).catch((err)=>{
    console.log(`errr: ${err}`);
});
// routes
app.use('/api/v1/auth',route)

// rest api
app.get('/',(req,res)=>{
    res.send('hello');
});


const port=process.env.PORT||8080;
app.listen(port,()=>{
    console.log(`listening to port ${port}`);
});