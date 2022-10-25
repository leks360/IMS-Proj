import express from 'express';
import {addPenalty,getPaginated} from '../controllers/penaltyController.js';
import penalty from '../models/penalty.js';
import Pagination from '../controllers/pagination.js';
const router=express.Router();


router.post('/addPenalty',addPenalty);
router.get('/getAllPaginated/:name',Pagination(penalty),getPaginated);


export default router;