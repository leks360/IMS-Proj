import express from 'express';
import {addLev,getAll,getForAll,getPaginated} from '../controllers/leviesControl.js';
import levy from '../models/levies.js';
import Pagination from '../controllers/pagination.js';
const router=express.Router();

router.post('/addRoyalty',addLev);
router.get('/getRM/:id',getAll);

router.get('/getAll',getForAll);
router.get('/getAllPaginated/:name',Pagination(levy),getPaginated);
export default router;