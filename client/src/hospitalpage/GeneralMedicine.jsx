import React, { useState } from "react";
import { Upload, Mic, Square, Trash2 } from "lucide-react";

export default function GeneralMedicine() {
  const [audioFile, setAudioFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [speechText, setSpeechText] = useState("");
  const [textInput, setTextInput] = useState("");
  const [doctorResponse, setDoctorResponse] = useState("");
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordedAudio, setRecordedAudio] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:8080";

  // file -> base64
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result || "";
        const base64 = result.includes(",") ? result.split(",")[1] : result;
        resolve(base64);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  // 🎤 Start recording
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      const chunks = [];

      recorder.ondataavailable = (e) => chunks.push(e.data);

      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/mp3" });
        setRecordedAudio(blob);
        setAudioFile(
          new File([blob], "recorded_voice.mp3", { type: "audio/mp3" })
        );
      };

      recorder.start();
      setMediaRecorder(recorder);
      setRecording(true);
    } catch (err) {
      console.error("Mic access error:", err);
      alert("Microphone access denied!");
    }
  };

  // ⏹ Stop recording
  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setRecording(false);
    }
  };

  // 🩺 Submit input to backend
  const handleSubmit = async () => {
    if (!textInput && !audioFile && !imageFile) {
      alert("Please provide some input (text, image or audio).");
      return;
    }

    setLoading(true);
    setDoctorResponse("");
    setSpeechText("");

    try {
      const formData = new FormData();

      if (audioFile) formData.append("file", audioFile);
      if (imageFile) {
        const base64 = await toBase64(imageFile);
        formData.append("image_base64", base64);
      }
      if (textInput) formData.append("query", textInput);

      const res = await fetch(`${API_BASE}/api/diagnose`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        setSpeechText(data.speechText || "");
        setDoctorResponse(data.response || "No response");
      } else {
        setDoctorResponse(data.error || `Server error (${res.status})`);
      }
    } catch (err) {
      console.error("Network/client error:", err);
      setDoctorResponse("⚠️ Failed to reach server.");
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setAudioFile(null);
    setImageFile(null);
    setSpeechText("");
    setTextInput("");
    setDoctorResponse("");
    setRecordedAudio(null);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-between">
      <div className="flex flex-col items-center p-4 sm:p-6 flex-grow">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-sky-500">
          AI Healthcare Chatbot
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-6xl">
          {/* Patient Inputs */}
          <div className="bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-[0_0_25px_rgba(0,123,255,0.9)] transition duration-300">
            <h2 className="text-lg sm:text-xl mb-4 font-semibold">
              Patient Inputs
            </h2>

            {/* Audio Input */}
            <div className="mb-6">
              <label className="block mb-2 text-sm sm:text-base">
                Audio Input
              </label>
              <div className="flex flex-col sm:flex-row items-center gap-3">
                {!recording ? (
                  <button
                    onClick={startRecording}
                    className="bg-green-600 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-700 w-full sm:w-auto justify-center"
                  >
                    <Mic size={18} /> Record
                  </button>
                ) : (
                  <button
                    onClick={stopRecording}
                    className="bg-red-600 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-red-700 w-full sm:w-auto justify-center"
                  >
                    <Square size={18} /> Stop
                  </button>
                )}
              </div>

              {/* Recorded audio playback */}
              {recordedAudio && (
                <audio controls className="mt-3 w-full">
                  <source
                    src={URL.createObjectURL(recordedAudio)}
                    type="audio/mp3"
                  />
                  Your browser does not support the audio element.
                </audio>
              )}
            </div>

            {/* Image Upload */}
            <div className="mb-6">
              <label className="block mb-2 text-sm sm:text-base">
                Upload Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImageFile(e.target.files[0])}
                className="w-full border border-gray-600 p-2 rounded-lg bg-gray-700 text-sm"
              />
              {imageFile && (
                <div className="mt-4">
                  <img
                    src={URL.createObjectURL(imageFile)}
                    alt="Preview"
                    className="w-32 sm:w-40 h-32 sm:h-40 object-cover rounded-lg border border-gray-600"
                  />
                </div>
              )}
            </div>

            {/* Text Input */}
            <div>
              <label className="block mb-2 text-sm sm:text-base">
                Type Symptoms
              </label>
              <textarea
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                placeholder="Type your symptoms here..."
                className="w-full h-24 p-3 rounded-lg bg-gray-700 border border-gray-600 resize-none text-sm"
              />
            </div>
          </div>

          {/* AI Diagnosis */}
          <div className="bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-[0_0_25px_rgba(0,123,255,0.9)] transition duration-300">
            <h2 className="text-lg sm:text-xl mb-4 font-semibold">
              AI Diagnosis
            </h2>

            <div className="mb-4">
              <label className="block mb-2 text-sm sm:text-base">
                Speech to Text
              </label>
              <textarea
                value={speechText}
                readOnly
                className="w-full h-16 p-3 rounded-lg bg-gray-700 border border-gray-600 resize-none text-sm"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-sm sm:text-base">
                Doctor's Response
              </label>
              <textarea
                value={doctorResponse}
                readOnly
                className="w-full h-24 p-3 rounded-lg bg-gray-700 border border-gray-600 resize-none text-sm"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full max-w-6xl justify-center">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 w-full sm:w-auto"
          >
            {loading ? "Processing..." : "Submit"}
          </button>
          <button
            onClick={handleClear}
            className="bg-gray-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-700 flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <Trash2 size={18} /> Clear
          </button>
        </div>
      </div>

      <footer className="bg-gray-800 text-gray-400 text-center py-4 mt-8">
        <p className="text-sm sm:text-base">
          © {new Date().getFullYear()} AI Healthcare Chatbot. All Rights
          Reserved.
        </p>
      </footer>
    </div>
  );
}
