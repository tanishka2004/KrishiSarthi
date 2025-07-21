import requests
import os
from flask import Blueprint, request, jsonify

chatbot_bp = Blueprint("chatbot", __name__)
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
@chatbot_bp.route("/", methods=["POST"])
def chat():
    data = request.get_json()
    user_message = data.get("message")

    if not user_message:
        return jsonify({"error": "Message is required"}), 400

    url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent"
    headers = {
        "Content-Type": "application/json"
    }
    payload = {
        "contents": [
            {
                "parts": [{"text": user_message}]
            }
        ]
    }

    try:
        response = requests.post(f"{url}?key={GEMINI_API_KEY}", headers=headers, json=payload)
        result = response.json()
        
        if "candidates" in result:
            reply = result["candidates"][0]["content"]["parts"][0]["text"]
            return jsonify({"reply": reply})
        else:
            return jsonify({"error": result}), 500

    except Exception as e:
        return jsonify({"error": str(e)}), 500
