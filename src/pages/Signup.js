import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext"; // Import Language Context

const Signup = () => {
  const { language, translations } = useLanguage(); // Access language and translations

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-800 to-green-400">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-green-800 mb-6">
          {language === "en" ? "Sign Up" : "साइन अप करें"}
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              {language === "en" ? "Name" : "नाम"}
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder={language === "en" ? "Enter your name" : "अपना नाम दर्ज करें"}
            />
          </div>
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
              placeholder={language === "en" ? "Create a password" : "पासवर्ड बनाएं"}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-800 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            {language === "en" ? "Sign Up" : "साइन अप करें"}
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          {language === "en"
            ? "Already have an account?"
            : "क्या आपके पास पहले से एक खाता है?"}{" "}
          <Link to="/login" className="text-green-800 font-medium hover:underline">
            {language === "en" ? "Login" : "लॉगिन"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;