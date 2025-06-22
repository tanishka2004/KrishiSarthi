import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSeedling, FaCloudSunRain, FaChartLine, FaUniversity, FaRobot, FaMicrophone } from 'react-icons/fa';
import bgImage from '../assets/farm.jpg';
import { useLanguage } from "../context/LanguageContext";

const Home = () => {
  const navigate = useNavigate();
  const { language, translations } = useLanguage();

  const features = [
    {
      title: translations[language].cropManagement,
      desc: translations[language].cropDesc,
      icon: <FaSeedling className="text-green-600 text-3xl mb-2 mx-auto" />,
      path: "/crop-management",
    },
    {
      title: translations[language].weather,
      desc: translations[language].weatherDesc,
      icon: <FaCloudSunRain className="text-blue-500 text-3xl mb-2 mx-auto" />,
      path: "/weather-card",
    },
    {
      title: translations[language].market,
      desc: translations[language].marketDesc,
      icon: <FaChartLine className="text-purple-600 text-3xl mb-2 mx-auto" />,
      path: "/market-prices",
    },
    {
      title: translations[language].schemes,
      desc: translations[language].schemesDesc,
      icon: <FaUniversity className="text-yellow-600 text-3xl mb-2 mx-auto" />,
      path: "/government-schemes",
    },
    {
      title: translations[language].advice,
      desc: translations[language].adviceDesc,
      icon: <FaRobot className="text-gray-700 text-3xl mb-2 mx-auto" />,
      path: "/personalized-advice",
    },
    {
      title: translations[language].voice,
      desc: translations[language].voiceDesc,
      icon: <FaMicrophone className="text-red-600 text-3xl mb-2 mx-auto" />,
      path: "/text-voice-input",
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-white/30 p-6 pb-20">
        {/* Hero Section */}
        <section className="text-center py-10">
          <h1 className="typewriter text-4xl md:text-5xl font-bold text-green-800 inline-block">
            {translations[language].homeTitle}
          </h1>
          <p className="text-lg mt-4 max-w-2xl mx-auto text-green-700">
            {translations[language].homeDesc}
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
          <h2 className="text-2xl font-semibold text-green-900 mb-6 text-center">
            {translations[language].exploreFeatures}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-2">
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition text-center"
              >
                {feature.icon}
                <h3 className="text-xl font-bold text-green-800">{feature.title}</h3>
                <p className="mt-2 text-green-700">{feature.desc}</p>
                <button
                  onClick={() => navigate(feature.path)}
                  className="mt-4 px-4 py-2 bg-green-800 text-white rounded-lg hover:bg-green-700 transition"
                >
                  {translations[language].learnMore}
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
