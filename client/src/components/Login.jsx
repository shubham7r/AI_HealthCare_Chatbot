import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/home");
    }, 2000);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center px-4 bg-black/60 z-50">
      <div className="bg-white/20 backdrop-blur-lg border border-white/30 shadow-2xl rounded-2xl w-full max-w-md p-8 sm:p-10 space-y-6">
        <h1 className="text-3xl font-bold text-center text-white drop-shadow-md">
          Welcome Back 👋
        </h1>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block mb-1 text-white/80 text-sm">Email</label>
            <input
              type="email"
              required
              placeholder="Enter your email"
              disabled={loading}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-white/80 text-sm">Password</label>
            <input
              type="password"
              required
              placeholder="Enter your password"
              disabled={loading}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
            />
          </div>

          {/* Options */}
          <div className="flex items-center justify-between text-white/80 text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="accent-purple-500"
                disabled={loading}
              />
              Remember me
            </label>
            <a href="#" className="hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
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

        {/* Footer */}
        <p className="text-center text-sm text-white/90">
          Don’t have an account?{" "}
          <a href="#" className="font-semibold underline hover:text-purple-200">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
