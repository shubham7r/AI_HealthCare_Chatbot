import React from "react";
import { X, LogOut } from "lucide-react";

export default function Sidebars({
  onClose = () => {},
  user = null,
  handleLogout = () => {},
}) {
  return (
    <div className="h-screen w-64 flex flex-col bg-[#1E1E22] text-white overflow-hidden">
      
      {/* Header (fixed at top) */}
      <div className="p-4 border-b border-gray-700 flex items-center justify-between flex-shrink-0">
        <div className="text-lg font-bold">ChatBot</div>
        <button onClick={onClose}>
          <X className="w-5 h-5 text-gray-400 hover:text-white transition" />
        </button>
      </div>

      {/* Scrollable Chat History */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
        <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg font-medium">
          + New Chat
        </button>
        <p className="text-gray-500 text-sm text-center mt-10">
          No chat history yet
        </p>
      </div>

      {/* Footer (fixed at bottom) */}
      <div className="p-4 border-t border-gray-700 flex-shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition">
            <img
              className="rounded-full w-8 h-8 bg-gray-500"
              src={user?.avatar || ""}
              alt=""
            />
            <span className="text-gray-300 text-sm">My Profile</span>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-700 duration-300 transition"
          >
            <LogOut className="w-4 h-4" />
            <span className="text-sm">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
