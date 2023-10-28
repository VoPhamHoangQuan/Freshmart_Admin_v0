import express from 'express';
import {
    getAllProduct,
    addNewProduct,
    getProductById,
    editProductById,
    deleteProductById
} from '../controllers/productControllers.js';

const productRouters = express.Router();

productRouters.get('/', getAllProduct);
productRouters.post('/', addNewProduct);
productRouters.get('/getProductById/:id', getProductById);
productRouters.put('/editProductById/:id', editProductById);
productRouters.put('/deleteProductById/:id', deleteProductById);


export default productRouters;

