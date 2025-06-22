from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from app.models import Crop, db

crops_bp = Blueprint("crops", __name__)

# ✅ Now Public
@crops_bp.route('/', methods=['POST'])
@crops_bp.route('', methods=['POST'])
def add_crop():
    data = request.get_json()
    print("🔍 Received JSON:", data)

    name = data.get("name") if data else None
    type_ = data.get("type") if data else None

    if not name or not type_:
        return jsonify({"error": "Missing name or type"}), 400

    crop = Crop(name=name, type=type_)  # user_id left null
    db.session.add(crop)
    db.session.commit()

    return jsonify(crop.to_dict()), 201

# ✅ Still public
@crops_bp.route('/public', methods=['POST'])
def add_public_crop():
    data = request.get_json()
    name = data.get("name")
    type_ = data.get("type")

    if not name or not type_:
        return jsonify({"error": "Missing name or type"}), 400

    crop = Crop(name=name, type=type_)  # user_id left NULL
    db.session.add(crop)
    db.session.commit()

    return jsonify(crop.to_dict()), 201

# ✅ Still protected
@crops_bp.route('/', methods=['GET'])
@jwt_required()
def get_crops():
    user_id = get_jwt_identity()
    crops = Crop.query.filter_by(user_id=user_id).all()
    return jsonify([c.to_dict() for c in crops])

# ✅ Public advice
@crops_bp.route('/advice/<int:crop_id>', methods=['GET'])
def get_advice(crop_id):
    crop = Crop.query.get(crop_id)
    if not crop:
        return jsonify({"error": "Crop not found"}), 404

    base_advice = {
        "Wheat": "Ensure timely irrigation and use nitrogen fertilizer in early growth.",
        "Rice": "Maintain proper water level, and watch for pest attacks during flowering.",
        "Maize": "Irrigate during tasseling and silking stages. Monitor for armyworms.",
        "default": "Keep soil well-drained and monitor crop regularly for pests or diseases."
    }

    advice = base_advice.get(crop.name, base_advice["default"])

    return jsonify({
        "advice": f"Advice for {crop.name} ({crop.type}): {advice}"
    }), 200
