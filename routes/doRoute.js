import express from 'express';
import {addDO,getAll,getForAll,getPaginated} from '../controllers/doController.js';
import doModel from '../models/dispatchOrder.js';
import Pagination from '../controllers/pagination.js';
const router=express.Router();

router.post('/addDO',addDO);
router.get('/getAll',getForAll);
router.get('/getAllPaginated/:name',Pagination(doModel),getPaginated);
export default router;