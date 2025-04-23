import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSeedling, FaCloudSunRain, FaChartLine, FaUniversity, FaRobot, FaMicrophone } from 'react-icons/fa';
import bgImage from '../assets/farm.jpg'; // ✅ path to the background image
import { useLanguage } from "../context/LanguageContext";

const Home = () => {
  const navigate = useNavigate();
  const { language, translations } = useLanguage();

  const features = [
    {
      title: 'Crop Management',
      desc: 'Real-time info on crop diseases and techniques.',
      icon: <FaSeedling className="text-green-600 text-3xl mb-2 mx-auto" />,
      path: "/crop-management", // Ensure this matches the route in App.js
    },
    {
      title: 'Weather Updates',
      desc: 'Accurate forecasts & tips for crops.',
      icon: <FaCloudSunRain className="text-blue-500 text-3xl mb-2 mx-auto" />,
      path: "/weather-card", // Add path for navigation
    },
    {
      title: 'Market Insights',
      desc: 'Know mandi rates & trends easily.',
      icon: <FaChartLine className="text-purple-600 text-3xl mb-2 mx-auto" />,
      path: "/market-prices", // Add path for navigation
    },
    {
      title: 'Government Schemes',
      desc: 'Stay updated on subsidies & yojnas.',
      icon: <FaUniversity className="text-yellow-600 text-3xl mb-2 mx-auto" />,
      path: "/government-schemes",
    },
    {
      title: 'Personalized Advice',
      desc: 'Get AI-based help as per your farming style.',
      icon: <FaRobot className="text-gray-700 text-3xl mb-2 mx-auto" />,
      path: "/personalized-advice",
    },
    {
      title: 'Text & Voice Input',
      desc: 'Talk to FarmAid your way!',
      icon: <FaMicrophone className="text-red-600 text-3xl mb-2 mx-auto" />,
      path: "/text-voice-input",
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* White overlay for readability */}
      <div className="bg-white/30 p-6 pb-20">
        {/* Hero Section */}
        <section className="text-center py-10">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800">KrishiSarthi</h1>
          <p className="text-lg mt-4 max-w-2xl mx-auto text-green-700">
            {language === "en"
              ? "Empowering Indian farmers with AI-driven solutions. Explore our chatbot and other features like crop management, weather updates, market insights, and more."
              : "भारतीय किसानों को एआई-चालित समाधान प्रदान करना। हमारे चैटबॉट और अन्य सुविधाओं जैसे फसल प्रबंधन, मौसम अपडेट, बाजार अंतर्दृष्टि और अधिक का अन्वेषण करें।"}
          </p>
          <button
            onClick={() => navigate('/chat')}
            className="mt-6 px-6 py-3 bg-gradient-to-r from-green-800 to-green-400 text-white rounded-xl hover:from-green-700 hover:to-green-500 transition"
          >
            {translations[language].startChatting}
          </button>
        </section>

        {/* Features Section */}
        <section className="mt-12 mb-12">
          <h2 className="text-2xl font-semibold text-green-900 mb-6 text-center">Explore Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition text-center"
              >
                {feature.icon}
                <h3 className="text-xl font-bold text-green-800">{feature.title}</h3>
                <p className="mt-2 text-green-700">{feature.desc}</p>
                <button
                  onClick={() => navigate(feature.path)} // Navigate to the respective page
                  className="mt-4 px-4 py-2 bg-green-800 text-white rounded-lg hover:bg-green-700 transition"
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
