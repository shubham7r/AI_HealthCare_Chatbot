import dotenv from "dotenv";
dotenv.config();

const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD; // ✅ matches your .env

export default {
  JWT_USER_PASSWORD,
};
