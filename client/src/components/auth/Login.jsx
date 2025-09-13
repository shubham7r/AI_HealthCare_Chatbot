import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ onClose }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("http://localhost:4001/api/user/login", formData, {
        withCredentials: true,
      });
      alert("Login Successful");
      navigate("/dashboards");
      if (onClose) onClose();
    } catch (error) {
      alert(error.response?.data?.errors || "Invalid Credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-center text-white drop-shadow-md">
        Welcome Back 👋
      </h1>

      <form onSubmit={handleLogin} className="space-y-5">
        <div>
          <label className="block mb-1 text-white/80 text-sm">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            disabled={loading}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
          />
        </div>

        <div>
          <label className="block mb-1 text-white/80 text-sm">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Enter your password"
            disabled={loading}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-300 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p className="text-center text-sm text-white/90">
        Don’t have an account?{" "}
        <button
          onClick={() => {
            navigate("/register");
            if (onClose) onClose();
          }}
          className="font-semibold underline hover:text-purple-200 cursor-pointer"
        >
          Register
        </button>
      </p>
    </div>
  );
};

export default Login;
