import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const Login = () => {
  const { language, translations } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-800 to-green-400">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-green-800 mb-6">
          {language === "en" ? "Login" : "लॉगिन"}
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              {language === "en" ? "Email" : "ईमेल"}
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder={language === "en" ? "Enter your email" : "अपना ईमेल दर्ज करें"}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              {language === "en" ? "Password" : "पासवर्ड"}
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder={language === "en" ? "Enter your password" : "अपना पासवर्ड दर्ज करें"}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-800 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            {language === "en" ? "Login" : "लॉगिन"}
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          {language === "en"
            ? "Don't have an account?"
            : "क्या आपके पास खाता नहीं है?"}{" "}
          <Link to="/signup" className="text-green-800 font-medium hover:underline">
            {language === "en" ? "Sign Up" : "साइन अप करें"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;