from flask import Flask, request, jsonify
import os
from dotenv import load_dotenv
from groq import Groq
from flask_cors import CORS

from auth import auth  # ✅ Only if auth.py exists

# ✅ First: Create Flask app 
app = Flask(__name__)
CORS(app)

# ✅ Then register blueprint (after app is created)
app.register_blueprint(auth)

# ✅ Load environment variables
load_dotenv()
GROQ_API_KEY = os.environ.get("GROQ_API_KEY")

@app.route("/", methods=["GET"])
def index():
    return "AI Diagnosis API is running!"

@app.route("/api/diagnose", methods=["POST"])
def diagnose():
    try:
        data = request.get_json()

        image_data = data.get("image_base64")
        query = data.get("query", "Is there something wrong with my face?")
        chatbot_mode = data.get("mode", "human")

        if not image_data:
            return jsonify({"error": "No image data provided"}), 400
        if not query:
            return jsonify({"error": "Query is required"}), 400

        print(f"[MODE]: {chatbot_mode} | [QUERY]: {query[:50]}...")

        client = Groq(api_key=GROQ_API_KEY)
        model = "meta-llama/llama-4-scout-17b-16e-instruct"

        intro_prompt = f"This is a {chatbot_mode} health diagnosis AI. Please answer based on the given image and text."

        messages = [
            {
                "role": "system",
                "content": intro_prompt
            },
            {
                "role": "user",
                "content": [
                    {"type": "text", "text": query},
                    {"type": "image_url", "image_url": {"url": f"data:image/webp;base64,{image_data}"}}
                ]
            }
        ]

        response = client.chat.completions.create(
            messages=messages,
            model=model
        )

        content = response.choices[0].message.content.strip()
        return jsonify({"response": content})

    except Exception as e:
        print("[ERROR]:", str(e))
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, port=8080)
