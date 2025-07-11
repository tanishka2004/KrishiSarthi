import React from "react";
import { FaSeedling } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const { language, translations } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-green-50 to-green-200 flex items-center justify-center px-4">
      <div
        className="max-w-2xl w-full bg-white/80 rounded-2xl shadow-lg p-8 text-center border border-green-200"
        style={{ marginTop: "100px" }}
      >
        <div className="flex flex-col items-center mb-4">
          <FaSeedling className="text-green-700 text-5xl mb-2" />
          <h1 className="text-3xl font-bold text-green-800 mb-4">
            {translations[language]?.aboutTitle || "About KrishiSarthi"}
          </h1>
        </div>
        <p className="text-lg text-green-700 mb-4">
          {translations[language]?.aboutDesc ||
            "KrishiSarthi is your smart farming companion, designed to empower farmers with technology. Get crop management tips, weather updates, market prices, government schemes, and personalized advice—all in one place. Our mission is to make agriculture easier, smarter, and more profitable for everyone."}
        </p>
        <div className="mt-6 text-green-900">
          <h2 className="text-xl font-semibold mb-2">Features:</h2>
          <ul className="list-disc list-inside text-left mx-auto max-w-md">
            <li>Crop Management Guidance</li>
            <li>Live Weather Updates</li>
            <li>Market Price Tracking</li>
            <li>Government Schemes Info</li>
            <li>Personalized AI Advice</li>
            <li>Voice/Text Input Support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;