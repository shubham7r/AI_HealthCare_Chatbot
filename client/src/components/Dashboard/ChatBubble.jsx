import React from "react";

export default function ChatBubble({ text, isUser }) {
  return (
    <div className={`w-full flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`p-3 m-2 max-w-[75%] rounded-2xl shadow text-white text-sm ${
          isUser ? "bg-blue-600" : "bg-gray-600"
        }`}
      >
        {text}
      </div>
    </div>
  );
}
