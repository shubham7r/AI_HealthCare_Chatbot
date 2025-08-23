import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    bloodGroup: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:4001/api/user/signup",
        formData,
        {
          withCredentials: true, // ✅ Important for cookies/JWT
        }
      );
      alert(res.data.message);
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center px-4 bg-black/60 z-50">
      <div className="bg-white/20 backdrop-blur-lg border border-white/30 shadow-2xl rounded-2xl w-full max-w-md p-8 sm:p-10 space-y-6 relative">
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 right-4 text-white text-xl hover:text-red-300 transition"
        >
          ❌
        </button>

        <h1 className="text-3xl font-bold text-center text-white drop-shadow-md">
          Create Account 🚀
        </h1>

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block mb-1 text-white/80 text-sm">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              disabled={loading}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
            />
          </div>

          <div>
            <label className="block mb-1 text-white/80 text-sm">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
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
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              disabled={loading}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
            />
          </div>

          <div>
            <label className="block mb-1 text-white/80 text-sm">Age</label>
            <input
              type="number"
              name="age"
              required
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter your age"
              disabled={loading}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
            />
          </div>

          <div>
            <label className="block mb-1 text-white/80 text-sm">
              Blood Group
            </label>
            <select
              name="bloodGroup"
              required
              value={formData.bloodGroup}
              onChange={handleChange}
              disabled={loading}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-black placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
            >
              <option value="" disabled>
                Select your blood group
              </option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-300 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="text-center text-sm text-white/90">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="font-semibold underline hover:text-purple-200 cursor-pointer"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
