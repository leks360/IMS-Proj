import express from 'express';
import { addQuarry, getQuarry,getQuarries} from '../controllers/quarryControl.js';
import { verifyToken } from '../verifyToken.js';
const router=express.Router();


router.post('/addQuarry',verifyToken,addQuarry);
router.get('/getquarry/:id',getQuarry);
router.get('/',getQuarries);
export default router;