import React, { useState } from "react";
import { motion } from "framer-motion";
import ChatInputBar from "./ChatInputBar"; // ✅ Adjust path as needed

export default function Dashboard() {
  const [messages, setMessages] = useState([]);

  const sendMessage = (msg) => {
    setMessages([...messages, { sender: "user", text: msg }]);
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white px-4 py-8 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Welcome to your Dashboard
      </h1>

      {/* Feature Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-6 text-center max-w-5xl w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        variants={{
          hidden: {},
          visible: {},
        }}
      >
        {[
          {
            title: "Limitless Cognitive Power",
            desc: "Get bold, original insights that push boundaries and unlock new possibilities, all in real-time.",
          },
          {
            title: "Zero-Lag, Full Awareness",
            desc: "Receive instant, context-sensitive responses that adjust seamlessly to your needs and workflow.",
          },
          {
            title: "Intuition Meets Intelligence",
            desc: "Enjoy human-like, intuitive interactions with AI that processes ideas and thinks faster than any human.",
          },
        ].map((feature, idx) => (
          <motion.div
            key={idx}
            className="p-4 bg-zinc-800 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="text-cyan-400 text-3xl mb-2">🔷</div>
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-sm text-gray-400 mt-2">{feature.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Chat Box */}
      <div className="w-full max-w-xl mt-12 bg-zinc-800 rounded-lg shadow-md p-4 flex flex-col">
        <div className="h-40 overflow-y-auto mb-2 space-y-2 pr-2">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`text-sm p-2 rounded-md w-fit ${
                msg.sender === "user"
                  ? "bg-cyan-700 text-white self-end ml-auto"
                  : "bg-zinc-700 text-gray-300"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Chat Input Component */}
        <ChatInputBar onSendMessage={sendMessage} />
      </div>
    </div>
  );
}
