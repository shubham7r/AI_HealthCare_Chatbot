import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const AuthModal = ({ onClose }) => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300">
      <div className="relative w-full max-w-md p-6 bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl animate-fadeIn">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-white text-xl hover:text-red-400"
          onClick={onClose}
        >
          ❌
        </button>

        {/* Render Login or Register */}
        {showLogin ? (
          <Login onSwitch={() => setShowLogin(false)} />
        ) : (
          <Register onSwitch={() => setShowLogin(true)} />
        )}
      </div>
    </div>
  );
};

export default AuthModal;
