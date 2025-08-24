// middleware/authMiddleware.js (Create this file)
import jwt from "jsonwebtoken";
import config from "../config.js";

export const verifyToken = (req, res, next) => {
  try {
    const token = req.cookies.jwt; // ✅ Read token from cookie

    if (!token) {
      return res
        .status(401)
        .json({ message: "Access denied. No token provided." });
    }

    // ✅ Verify token using the same secret as in login
    const decoded = jwt.verify(token, config.JWT_USER_PASSWORD);

    req.userId = decoded.id; // ✅ Attach user ID to request
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid or expired token." });
  }
};
