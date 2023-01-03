import express from 'express';
import {addInspection,getPaginated} from '../controllers/inspectionController.js';
import inspection from '../models/inspection.js';
import Pagination from '../controllers/pagination.js';
const router=express.Router();


router.post('/addInspection',addInspection);
router.get('/getAllPaginated/:name',Pagination(inspection),getPaginated);


export default router;