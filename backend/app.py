import os
import logging
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from groq import Groq

from brain_of_the_doctor import analyze_image_with_query
from voice_of_the_patient import transcribe_with_groq

# Setup logging
logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")

# Load environment variables
load_dotenv()
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

# Flask app setup
app = Flask(__name__)
CORS(app)

# -------------------------
# Routes
# -------------------------

@app.route("/api/diagnose", methods=["POST"])
def diagnose():
    try:
        query_text = None
        image_base64 = None

        # Case 1: multipart/form-data (audio + optional image)
        if request.files:
            if "file" in request.files:  # audio
                audio_file = request.files["file"]
                logging.info("Received audio file, transcribing...")
                query_text = transcribe_with_groq(audio_file)

            if "image" in request.files:  # optional image
                image_base64 = request.form.get("image_base64")

        # Case 2: JSON (text + image)
        elif request.is_json:
            data = request.get_json()
            query_text = data.get("query", "")
            image_base64 = data.get("image_base64")

        if not query_text and not image_base64:
            return jsonify({"error": "No valid input provided"}), 400

        logging.info(f"Final query: {query_text}")

        # Doctor brain analysis
        response = analyze_image_with_query(
            query_text or "No text provided",
            "meta-llama/llama-4-maverick-17b-128e-instruct",
            image_base64
        ) if image_base64 else query_text

        return jsonify({
            "speechText": query_text,
            "response": response
        })

    except Exception as e:
        logging.error(f"Error in /api/diagnose: {e}")
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True, port=8080)
