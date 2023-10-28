import { OrderModel } from "../models/orderModel.js"

export const getAllOrder = async function (req, res) {
    try {
        const orderList = await OrderModel.find().populate('userInfo');
        res.status(200).send(orderList);
    } catch (err) {
        res.status(500).send('error: ' + err);
    }
}