import express from "express";
import { getAllUser } from "../controllers/userController.js";

const userRouters = express.Router();

userRouters.get('/', getAllUser);

export default userRouters;