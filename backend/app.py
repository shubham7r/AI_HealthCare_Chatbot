import os
import logging
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

from voice_of_the_patient import transcribe_with_groq
from brain_of_the_doctor import analyze_image_with_query

# ---------------------------------------------------
# Setup
# ---------------------------------------------------
logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")
load_dotenv()
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

app = Flask(__name__)
CORS(app)


# ---------------------------------------------------
# Routes
# ---------------------------------------------------
@app.route("/api/diagnose", methods=["POST"])
def diagnose():
    """
    Diagnose route:
    - Accepts JSON (query + image_base64)
    - or multipart/form-data with query + image_base64
    """
    try:
        query = None
        image_base64 = None

        if request.is_json:
            # JSON body
            data = request.get_json()
            query = data.get("query", "Is there something wrong with my face?")
            image_base64 = data.get("image_base64")

        else:
            # multipart/form-data
            if "image_base64" in request.form:
                query = request.form.get("query", "Is there something wrong with my face?")
                image_base64 = request.form.get("image_base64")

        if not image_base64:
            return jsonify({"error": "No image data provided"}), 400

        logging.info(f"Running analysis for query: {query}")
        response = analyze_image_with_query(
            query,
            "meta-llama/llama-4-maverick-17b-128e-instruct",
            image_base64,
        )
        return jsonify({"response": response})

    except Exception as e:
        logging.error(f"Error in /api/diagnose: {e}")
        return jsonify({"error": str(e)}), 500


@app.route("/api/transcribe", methods=["POST"])
def transcribe_audio():
    """
    Transcribe audio files sent as multipart/form-data.
    """
    if "file" not in request.files:
        return jsonify({"error": "No audio file provided"}), 400

    audio_file = request.files["file"]
    logging.info(f"Received audio file: {audio_file.filename}")

    try:
        # Read bytes from FileStorage
        audio_bytes = audio_file.read()
        text = transcribe_with_groq(audio_bytes)
        return jsonify({"text": text})
    except Exception as e:
        logging.error(f"Error transcribing audio: {e}")
        return jsonify({"error": str(e)}), 500


# ---------------------------------------------------
# Run server
# ---------------------------------------------------
if __name__ == "__main__":
    app.run(debug=True, port=8080)
