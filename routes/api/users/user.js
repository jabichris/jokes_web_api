import express from "express";
import UserController from "../../../controllers/user.controllers";

const router = express.Router();

router.post("/signup", UserController.addUser);

export default router;