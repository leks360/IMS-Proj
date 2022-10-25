import express from 'express';
import {getAllUser,getUser} from '../controllers/userControl.js';

const router=express.Router();


router.get('/all',getAllUser);
router.get('/getuser/:id',getUser);
export default router;