import express from 'express';
import {addDispatch,getDispatchByName} from '../controllers/dispatchControl.js';

const router=express.Router();


router.post('/addDispatch',addDispatch);
router.get('/getDispatch/:name',getDispatchByName);
export default router;