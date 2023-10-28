import { UserModel } from "../models/userModel.js";

export const getAllUser = async (req, res) => {
    try {
        const userList = await UserModel.find();
        res.status(200).send(userList);
    } catch (err) {
        res.status(500).send('error: ' + err);
    }
}