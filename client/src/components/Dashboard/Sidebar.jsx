import React from "react";
import {
  FaRegEdit,
  FaSearch,
  FaBookOpen,
  FaPlayCircle,
  FaTh,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="w-64 bg-zinc-900 text-white fixed top-16 left-0 h-[calc(100vh-4rem)] p-4 flex flex-col z-50">
      {/* Logo or header */}
      <div className="mb-6">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
          alt="Logo"
          className="w-6 h-6 mx-auto mb-4"
        />
      </div>

      {/* Menu items */}
      <div className="space-y-2">
        <button className="flex items-center justify-between bg-zinc-800 hover:bg-zinc-700 px-3 py-2 rounded-md w-full text-sm">
          <span className="flex items-center gap-2">
            <FaRegEdit />
            New Chat
          </span>
          <span className="text-xs text-gray-400">Ctrl + Shift + O</span>
        </button>

        <button className="flex items-center gap-2 px-3 py-2 hover:bg-zinc-800 rounded-md w-full text-sm text-gray-300">
          <FaSearch />
          Search chats
        </button>

        <button className="flex items-center gap-2 px-3 py-2 hover:bg-zinc-800 rounded-md w-full text-sm text-gray-300">
          <FaBookOpen />
          Library
        </button>

        <button className="flex items-center gap-2 px-3 py-2 hover:bg-zinc-800 rounded-md w-full text-sm text-gray-300">
          <FaPlayCircle />
          Sora
        </button>

        <button className="flex items-center gap-2 px-3 py-2 hover:bg-zinc-800 rounded-md w-full text-sm text-gray-300">
          <FaTh />
          GPTs
        </button>
      </div>

      {/* Divider and recent chats */}
      <div className="mt-6 border-t border-zinc-700 pt-4 text-sm text-gray-400 overflow-y-auto max-h-40">
        <h3 className="mb-2">Chats</h3>
        <div className="space-y-1">
          <div className="truncate hover:bg-zinc-800 p-2 rounded cursor-pointer">
            Navbar component review
          </div>
          <div className="truncate hover:bg-zinc-800 p-2 rounded cursor-pointer">
            Binocular fusion comparison
          </div>
          <div className="truncate hover:bg-zinc-800 p-2 rounded cursor-pointer">
            React login conversion
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto border-t border-zinc-800 pt-4 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
          S
        </div>
        <div>
          <p className="text-sm font-medium">Shubham</p>
          <p className="text-xs text-gray-400">Free</p>
        </div>
      </div>
    </div>
  );
}
