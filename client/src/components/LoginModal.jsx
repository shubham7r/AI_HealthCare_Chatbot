import React from "react";
import ReactDOM from "react-dom";
import { X } from "lucide-react";
import Login from "./Login";

const LoginModal = ({ onClose }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center">
      <div className="relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:text-gray-300"
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
