import React, { useState, useRef } from "react";
// If you're using emoji-mart
// import Picker from "@emoji-mart/react";
// import data from "@emoji-mart/data";

export default function ChatInputBar({ onSendMessage }) {
  const [message, setMessage] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const inputRef = useRef(null);
  const fileInputRef = useRef(null);

  const startVoiceInput = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setMessage((prev) => prev + " " + transcript);
      if (inputRef.current) {
        inputRef.current.innerText += " " + transcript;
      }
    };
  };

  const handleInput = () => {
    setMessage(inputRef.current.innerText);
  };

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
      inputRef.current.innerText = "";
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    alert(`You dropped: ${file.name}`);
  };

  return (
    <div
      className="w-full relative bg-gray-100 dark:bg-[#303030] rounded-3xl shadow-md p-4 flex flex-col gap-2"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      style={{ maxHeight: "200px" }}
    >
      {/* {showEmoji && (
        <div className="absolute bottom-20 z-50">
          <Picker
            data={data}
            onEmojiSelect={(emoji) => {
              setMessage((prev) => prev + emoji.native);
              inputRef.current.innerText += emoji.native;
            }}
            theme="dark"
          />
        </div>
      )} */}

      <div className="flex items-end gap-2">
        <div
          contentEditable
          ref={inputRef}
          onInput={handleInput}
          onKeyDown={handleKeyPress}
          className="flex-1 min-h-[56px] max-h-[120px] overflow-auto rounded-xl bg-transparent p-3 text-black dark:text-white border dark:border-white/20"
          placeholder="Ask anything..."
          suppressContentEditableWarning
        />
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          onChange={(e) => alert(`File selected: ${e.target.files[0].name}`)}
        />
        <button onClick={() => fileInputRef.current.click()}>📎</button>
        {/* <button onClick={() => setShowEmoji(!showEmoji)}>😊</button> */}
        <button onClick={startVoiceInput}>🎤</button>
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white p-2 rounded-xl"
        >
          ➤
        </button>
      </div>
    </div>
  );
}
