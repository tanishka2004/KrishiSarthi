from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from app.models import Crop, db

crops_bp = Blueprint("crops", __name__)

@crops_bp.route('/', methods=['POST'])
@jwt_required()
def add_crop():
    data = request.get_json()
    user_id = get_jwt_identity()
    name = data.get("name")
    type_ = data.get("type")

    if not name or not type_:
        return jsonify({"error": "Missing name or type"}), 400

    crop = Crop(user_id=user_id, name=name, type=type_)
    db.session.add(crop)
    db.session.commit()

    return jsonify(crop.to_dict()), 201

@crops_bp.route('/', methods=['GET'])
@jwt_required()
def get_crops():
    user_id = get_jwt_identity()
    crops = Crop.query.filter_by(user_id=user_id).all()
    return jsonify([c.to_dict() for c in crops])

@crops_bp.route('/advice/<int:crop_id>', methods=['GET'])
@jwt_required()
def get_advice(crop_id):
    user_id = get_jwt_identity()
    crop = Crop.query.filter_by(id=crop_id, user_id=user_id).first()
    if not crop:
        return jsonify({"error": "Crop not found"}), 404

    # Temporary static advice (replace with AI later)
    advice = f"Advice for {crop.name} ({crop.type}): Ensure timely watering and pest control."
    return jsonify({"advice": advice})