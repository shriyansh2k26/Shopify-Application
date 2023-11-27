import express from 'express'
import {registerController} from '../controller/authRegister.js';
const router=express.Router();

router.post('/register',registerController)

export default router;