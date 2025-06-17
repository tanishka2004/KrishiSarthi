import requests
from flask import Blueprint, request, jsonify

weather_bp = Blueprint("weather", __name__)

API_KEY = "faa6f912f07408e8ae0d7524037dccda"

@weather_bp.route("/", methods=["GET"])
def get_weather():
    lat = request.args.get("lat")
    lon = request.args.get("lon")

    if not lat or not lon:
        return jsonify({"error": "Latitude and longitude are required"}), 400

    try:
        url = f"https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API_KEY}&units=metric"
        res = requests.get(url)
        data = res.json()

        if res.status_code != 200:
            return jsonify({"error": data.get("message", "Failed to fetch weather")}), 500

        forecast = data["weather"][0]["description"]
        temperature = data["main"]["temp"]
        humidity = data["main"]["humidity"]
        location = data.get("name", "Unknown")

        tip = "Avoid pesticide spraying now." if temperature > 32 else "Ideal conditions for irrigation."

        return jsonify({
            "location": location,
            "temperature": temperature,
            "humidity": humidity,
            "forecast": forecast,
            "tip": tip
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500
