from flask import Blueprint, request, jsonify

market_bp = Blueprint("market", __name__)

# Simulated crop price data (replace with DB or scraping later)
MOCK_PRICES = {
    "wheat": [2200, 2250, 2300, 2280],
    "rice": [1800, 1850, 1900, 1880],
    "maize": [1500, 1550, 1580, 1570]
}

@market_bp.route("/", methods=["GET"])
@market_bp.route("", methods=["GET"])  # Handle no trailing slash too
def get_market_trends():

    crop = request.args.get("crop", "").lower()

    if not crop or crop not in MOCK_PRICES:
        return jsonify({"error": "Invalid or unsupported crop"}), 400

    prices = MOCK_PRICES[crop]
    average_price = sum(prices) / len(prices)
    trend = "up" if prices[-1] > prices[0] else "down"

    return jsonify({
        "crop": crop,
        "latest_price": prices[-1],
        "average_price": average_price,
        "trend": trend,
        "history": prices
    })
