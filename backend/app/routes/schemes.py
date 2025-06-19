from flask import Blueprint, jsonify

schemes_bp = Blueprint("schemes", __name__)

# Mock data for now (can pull from DB or API later)
SCHEMES = [
    {
        "title": "PM-KISAN Samman Nidhi",
        "description": "₹6000/year to eligible farmers in 3 installments",
        "eligibility": "Small and marginal farmers",
        "apply_url": "https://pmkisan.gov.in/"
    },
    {
        "title": "Soil Health Card Scheme",
        "description": "Provides soil health reports for better fertilizer use",
        "eligibility": "All farmers",
        "apply_url": "https://soilhealth.dac.gov.in/"
    },
    {
        "title": "Pradhan Mantri Fasal Bima Yojana",
        "description": "Crop insurance against natural calamities",
        "eligibility": "Enrolled farmers",
        "apply_url": "https://pmfby.gov.in/"
    }
]

@schemes_bp.route("/", methods=["GET"])
def get_schemes():
    return jsonify(SCHEMES)