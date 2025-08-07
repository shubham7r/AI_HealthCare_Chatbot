import React from "react";
import { FaMoon } from "react-icons/fa";

const HumanMode = () => {
  return (
    <div className="flex items-center gap-4 relative">
      {/* Theme Toggle */}
      <button className="p-2 rounded-full hover:bg-gray-700 transition">
        <FaMoon />
      </button>

      {/* Avatar Hover Dropdown */}
      <div className="relative group">
        <img
          src="https://img.freepik.com/premium-photo/illustration-single-man-american-cartoon-art-style-images-with-ai-generated_545052-3009.jpg?w=740"
          alt="User"
          className="w-10 h-10 rounded-full cursor-pointer"
        />
        <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 z-10">
          <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
            Human Mode
          </button>
          <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
            Animal Mode
          </button>
        </div>
      </div>

      {/* Login Button */}
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition ease-in-out cursor-pointer">
        Login
      </button>
    </div>
  );
};

export default HumanMode;
