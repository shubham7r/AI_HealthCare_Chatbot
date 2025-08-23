import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import promtRoutes from "./routes/promt.route.js";
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.PORT || 4001;
const mongoURI = process.env.MONGO_URI;

// ✅ Middleware
app.use(express.json());
app.use(cookieParser());

// ✅ CORS (Place before routes)
app.use(
  cors({
    origin: "http://localhost:5173", // Your React app's URL
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ MongoDB Connection
mongoose
  .connect(mongoURI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Routes
app.use("/api/user", userRoutes);
app.use("/api/ai", promtRoutes);

// ✅ Start Server
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
