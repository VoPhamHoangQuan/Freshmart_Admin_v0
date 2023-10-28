import express from 'express';
import { getAllOrder } from '../controllers/orderController.js';

const orderRouters = express.Router();

orderRouters.get('/', getAllOrder);

export default orderRouters;