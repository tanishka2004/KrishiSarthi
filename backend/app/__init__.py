import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
from flask_migrate import Migrate
from dotenv import load_dotenv  # ✅ Add this

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

    from app.routes.auth import auth_bp
    app.register_blueprint(auth_bp, url_prefix="/auth")

    from app.routes.crops import crops_bp
    app.register_blueprint(crops_bp, url_prefix="/crops")

    from app.routes.weather import weather_bp
    app.register_blueprint(weather_bp, url_prefix="/weather")

    @app.route("/")
    def home():
        return {"message": "Welcome to KrishiSarthi backend 👩‍🌾"}

    @app.route("/health")
    def health():
        return {"status": "ok"}

    return app
