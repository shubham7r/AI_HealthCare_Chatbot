import { useState } from "react";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function DiagnosisForm({ setResponse }) {
  const [query, setQuery] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (!imageFile) {
        setError("Please upload an image.");
        setLoading(false);
        return;
      }

      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64Image = reader.result.split(",")[1];

        const res = await axios.post("http://localhost:8080/api/diagnose", {
          query,
          image_base64: base64Image,
        });

        setResponse(res.data.response);
      };
      reader.readAsDataURL(imageFile);
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 sm:p-8 rounded-2xl shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Describe your symptoms..."
          rows={4}
          required
          className="w-full p-4 rounded-xl border border-gray-300 bg-white/90 text-gray-800 focus:ring-2 focus:ring-cyan-400 focus:outline-none resize-none shadow-sm text-base"
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0])}
          className="w-full text-white text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-cyan-600 file:text-white hover:file:bg-cyan-700"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition disabled:opacity-60 text-base"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="w-5 h-5 animate-spin" /> Analyzing...
            </span>
          ) : (
            "Send to AI"
          )}
        </button>

        {error && (
          <div className="text-red-400 font-medium text-center text-base">
            {error}
          </div>
        )}
      </form>
    </motion.div>
  );
}
