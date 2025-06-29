# app/routes/schemes.py

from flask import Blueprint, request, jsonify

schemes_bp = Blueprint("schemes", __name__)

# 🧪 Dummy data — can be swapped with DB later
SCHEMES = [
    {"id": 1, "title": "PM-KISAN", "category": "subsidy", "state": "all", "description": "Income support to farmers."},
    {"id": 2, "title": "Kisan Credit Card", "category": "loan", "state": "all", "description": "Credit for farming needs."},
    {"id": 3, "title": "Fasal Bima Yojana", "category": "insurance", "state": "all", "description": "Crop insurance scheme."},
    {"id": 4, "title": "Mukhya Mantri Krishi Yojana", "category": "subsidy", "state": "MP", "description": "Support for small farmers."},
    {"id": 5, "title": "Smart Irrigation Program", "category": "tech", "state": "Maharashtra", "description": "Tech-based irrigation support."}
]

@schemes_bp.route("/", methods=["GET"])
def get_schemes():
    category = request.args.get("category")
    state = request.args.get("state")

    filtered = SCHEMES
    if category:
        filtered = [s for s in filtered if s["category"] == category]
    if state:
        filtered = [s for s in filtered if s["state"].lower() == state.lower() or s["state"] == "all"]

    return jsonify(filtered)
