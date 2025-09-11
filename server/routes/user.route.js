import express from "express";
import { signup, login, logout } from "../controllers/user.controllers.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);

// ✅ Protected route
router.get("/dashboard", verifyToken, (req, res) => {
  return res
    .status(200)
    .json({ message: "Welcome to dashboard", userId: req.userId });
});

export default router;
