import express from 'express'
import { insertTourist } from '../controller/insertData'
import bodyParser from 'body-parser'
import { getData, getDataById } from '../controller/getData'
import { updateData } from "../controller/updateData";
import { deleteData } from '../controller/deleteData';

const router = express.Router();

router.use(bodyParser.json());

router.post('/', insertTourist);
router.get('/', getData);
router.get('/:id', getDataById);
router.put('/:id', updateData);
router.delete('/:id', deleteData);

export default router;