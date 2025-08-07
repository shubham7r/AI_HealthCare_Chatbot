import React, { useState, useRef, useEffect } from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import ChatInputBar from "./ChatInputBar";
import ChatBubble from "./ChatBubble";
import Navbar from "../navbar/Navbar";

export default function App() {
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef(null);

  const handleSendMessage = (text) => {
    setMessages((prev) => [...prev, { text, isUser: true }]);
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div className="h-screen flex flex-col">
      {/* Navbar at top - full width */}

      {/* Body: sidebar + chat content below navbar */}
      <div className="flex flex-1">
        {/* Sidebar on the left */}
        <Sidebar />

        {/* Main content */}
        <div className="flex-1 bg-zinc-700 flex flex-col relative overflow-hidden">
          {/* Dashboard Header */}
          <div className="p-6">
            <Dashboard />
          </div>

          {/* Chat messages area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-6 pb-36">
            <div className="max-w-2xl mx-auto w-full space-y-2">
              {messages.map((msg, i) => (
                <ChatBubble key={i} text={msg.text} isUser={msg.isUser} />
              ))}
            </div>
          </div>

          {/* Sticky chat input bar */}
          <div className="fixed bottom-0 left-[260px] right-0 bg-zinc-800 p-4 border-t z-50">
            <div className="max-w-2xl mx-auto w-full">
              <ChatInputBar onSendMessage={handleSendMessage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
