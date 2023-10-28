import { ProductModel } from '../models/productModel.js';

export const getAllProduct = async (req, res) => {
    try {
        const productList = await ProductModel.find();
        res.status(200).send(productList);
    } catch (err) {
        res.status(500).send('error: ' + err);
    }

}

export const addNewProduct = async (req, res) => {
    try {
        const data = req.body
        const newProduct = new ProductModel(data)
        await newProduct.save();
        res.status(200).send(newProduct)
    } catch (err) {
        res.status(500).send('error: ' + err)
    }
}

export const getProductById = async (req, res) => {
    try {
        const productId = req.params.id
        const product = await ProductModel.findById(productId)
        res.status(200).send(product)
    } catch (err) {
        res.status(500).send('error:' + err)
    }
}

export const editProductById = async (req, res) => {
    try {
        const productId = req.params.id
        const newProductInfo = req.body

        const oldProduct = await ProductModel.findByIdAndUpdate(
            productId,
            newProductInfo
        )
        res.status(200).send(oldProduct)
    } catch (err) {
        res.status(500).send('error: ' + err)
    }
}

export const deleteProductById = async (req, res) => {
    try {
        const productId = req.params.id
        const oldProduct = await ProductModel.findByIdAndUpdate(
            productId,
            {
                isDeleted: true
            }
        )
        res.status(200).send(oldProduct)
    } catch (err) {
        res.status(500).send('error: ' + err)
    }
}
