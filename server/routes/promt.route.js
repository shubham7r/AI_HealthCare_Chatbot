import express from "express";
import { sendPromt } from "../controllers/promt.controllers.js";
import userMiddleware from "../middleware/promt.middleware.js"; // Assuming you have a middleware to check user authentication



const router = express.Router();

router.post("/promt", userMiddleware, sendPromt);

export default router;
