import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
from flask_migrate import Migrate
from dotenv import load_dotenv
from flask_cors import CORS

load_dotenv()  # ✅ Load .env variables

from config import Config

db = SQLAlchemy()
jwt = JWTManager()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    jwt.init_app(app)
    migrate.init_app(app, db)
    CORS(app)


    from app.routes.auth import auth_bp
    app.register_blueprint(auth_bp, url_prefix="/auth")

    from app.routes.crops import crops_bp
    app.register_blueprint(crops_bp, url_prefix="/crops")

    from app.routes.weather import weather_bp
    app.register_blueprint(weather_bp, url_prefix="/weather")

    from app.routes.market import market_bp
    app.register_blueprint(market_bp, url_prefix="/market")

    from app.routes.schemes import schemes_bp
    app.register_blueprint(schemes_bp, url_prefix="/schemes")

    from app.routes.dashboard import dashboard_bp
    app.register_blueprint(dashboard_bp)
    
    from .routes.chatbot import chatbot_bp
    app.register_blueprint(chatbot_bp, url_prefix="/chatbot")


    @app.route("/")
    def home():
        return {"message": "Welcome to KrishiSarthi backend"}

    @app.route("/health")
    def health():
        return {"status": "ok"}

    return app
