import React from "react";
import ReactDOM from "react-dom";
import { X } from "lucide-react";
import Login from "./Login";

const LoginModal = ({ onClose }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center">
      <div className="relative bg-white/20 backdrop-blur-lg border border-white/30 shadow-2xl rounded-2xl w-full max-w-md p-8 sm:p-10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-red-400 transition"
        >
          <X size={24} />
        </button>

        <Login onClose={onClose} />
      </div>
    </div>,
    document.body
  );
};

export default LoginModal;
