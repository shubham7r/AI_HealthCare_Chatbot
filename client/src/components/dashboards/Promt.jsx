import React, { useState, useRef } from "react";
import { Mic, Image as ImageIcon, Send } from "lucide-react";

export default function Promt() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const [image, setImage] = useState(null);
  const recognitionRef = useRef(null);

  // Voice Recording using Web Speech API
  const handleVoiceInput = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Voice recognition not supported in this browser.");
      return;
    }

    if (!isRecording) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.lang = "en-US";
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setMessage((prev) => prev + " " + transcript);
      };

      recognition.start();
      recognitionRef.current = recognition;
      setIsRecording(true);
    } else {
      recognitionRef.current.stop();
      setIsRecording(false);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const sendMessage = async () => {
    if (!message.trim() && !image) return;

    const newChat = {
      sender: "user",
      text: message,
      image: image ? URL.createObjectURL(image) : null,
    };
    setChat([...chat, newChat]);

    const formData = new FormData();
    formData.append("message", message);
    if (image) formData.append("image", image);

    try {
      const response = await fetch("/api/diagnose", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setChat((prev) => [...prev, { sender: "bot", text: data.reply }]);
    } catch (error) {
      console.error(error);
    }

    setMessage("");
    setImage(null);
  };

  return (
    <div className="flex flex-col w-full max-w-3xl bg-[#2a2a2e] rounded-2xl shadow-lg p-4">
      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto space-y-4 mb-4 h-[400px]">
        {chat.map((c, i) => (
          <div
            key={i}
            className={`flex ${
              c.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`p-3 rounded-lg max-w-[70%] ${
                c.sender === "user" ? "bg-indigo-600" : "bg-gray-700"
              }`}
            >
              {c.image && (
                <img
                  src={c.image}
                  alt="Uploaded"
                  className="rounded mb-2 max-h-40"
                />
              )}
              <p>{c.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="flex items-center gap-3 bg-[#1e1e1e] rounded-xl p-2">
        {/* Image Upload */}
        <label className="cursor-pointer">
          <ImageIcon className="text-gray-400 hover:text-white w-6 h-6" />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </label>

        {/* Text Input */}
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 bg-transparent outline-none text-white"
        />

        {/* Voice Button */}
        <button
          onClick={handleVoiceInput}
          className={`p-2 rounded ${
            isRecording ? "bg-red-600" : "hover:bg-gray-700"
          }`}
        >
          <Mic className="w-6 h-6 text-gray-300" />
        </button>

        {/* Send Button */}
        <button
          onClick={sendMessage}
          className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
