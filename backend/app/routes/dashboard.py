from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from app.models import Crop

import random

dashboard_bp = Blueprint("dashboard", __name__)

@dashboard_bp.route("/dashboard", methods=["GET"])
@jwt_required()
def get_dashboard():
    user_id = get_jwt_identity()
    crops = Crop.query.filter_by(user_id=user_id).all()

    response = []

    for crop in crops:
        # Mock values
        market_price = random.randint(1500, 4000)
        advice = f"Ensure timely irrigation and use nitrogen fertilizer for {crop.name}."
        weather_tip = "Irrigate in 2 days" if crop.type.lower() == "rabi" else "Monitor monsoon patterns"

        response.append({
            "crop": crop.name,
            "type": crop.type,
            "market_price": market_price,
            "advice": advice,
            "latest_weather_tip": weather_tip
        })

    return jsonify(response)
