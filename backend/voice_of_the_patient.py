import os
import logging
from dotenv import load_dotenv
from groq import Groq

# Logging setup
logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")

# Load env
load_dotenv()
GROQ_API_KEY = os.getenv("GROQ_API_KEY")
STT_MODEL = "whisper-large-v3"

def transcribe_with_groq(audio_file):
    """
    Transcribe an audio file using Groq Whisper.
    audio_file should be a FileStorage (from Flask) or a file-like object.
    """
    try:
        client = Groq(api_key=GROQ_API_KEY)
        transcription = client.audio.transcriptions.create(
            model=STT_MODEL,
            file=audio_file,
            language="en"
        )
        return transcription.text
    except Exception as e:
        logging.error(f"Transcription failed: {e}")
        raise
