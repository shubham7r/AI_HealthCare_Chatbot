from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
import datetime
import os
from dotenv import load_dotenv

# Load environment variables

load_dotenv()

# Initialize Flask
app = Flask(__name__)

# Enable CORS AFTER initializing app
CORS(app, supports_credentials=True, origins=["http://localhost:5173"])

# Config
app.config['SECRET_KEY'] = os.getenv("SECRET_KEY")
client = MongoClient(os.getenv("MONGO_URI"))
db = client.get_database("mydb")
users = db.users

# Register Route
@app.route("/api/register", methods=["POST"])
def register():
    data = request.get_json()
    print("Register Data:", data)

    if not data.get("email") or not data.get("password"):
        return jsonify({"error": "Missing email or password"}), 400

    if users.find_one({"email": data["email"]}):
        return jsonify({"error": "User already exists"}), 400

    hashed_pw = generate_password_hash(data["password"])
    users.insert_one({"email": data["email"], "password": hashed_pw})
    return jsonify({"message": "User registered successfully"}), 201

# Login Route
@app.route("/api/login", methods=["POST"])
def login():
    data = request.get_json()
    print("Login Data:", data)

    if not data.get("email") or not data.get("password"):
        return jsonify({"error": "Missing email or password"}), 400

    user = users.find_one({"email": data["email"]})
    if not user or not check_password_hash(user["password"], data["password"]):
        return jsonify({"error": "Invalid credentials"}), 401

    token = jwt.encode({
        "email": user["email"],
        "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=1)
    }, app.config['SECRET_KEY'], algorithm="HS256")

    return jsonify({"token": token}), 200

# Run the app
if __name__ == "__main__":
    app.run(debug=True)
