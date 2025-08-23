import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  try {
    const token = req.cookies.token; // ✅ Read token from cookie

    if (!token) {
      return res
        .status(401)
        .json({ message: "Access denied. No token provided." });
    }

    // ✅ Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decoded.id; // ✅ Attach user ID to request
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid or expired token." });
  }
};
