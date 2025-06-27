import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSeedling, FaCloudSunRain, FaChartLine, FaUniversity, FaRobot, FaMicrophone } from 'react-icons/fa';
import bgImage from '../assets/farm.jpg';
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";

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

  // Animation variants for feature cards
  const cardVariants = {
    hiddenLeft: { opacity: 0, x: -80 },
    hiddenRight: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, type: "spring" } },
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Hero Section with background image */}
      <section
        className="relative flex flex-col items-center justify-center text-center min-h-[60vh] w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay: darker and less blurry */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 w-full flex flex-col items-center justify-center" style={{paddingTop: '100px'}}>
          <motion.h1
            className="typewriter text-4xl md:text-5xl font-bold text-green-700 inline-block"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {translations[language].homeTitle}
          </motion.h1>
          <motion.p
            className="text-lg mt-4 max-w-2xl mx-auto text-green-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {translations[language].homeDesc}
          </motion.p>
          <motion.button
            onClick={() => navigate('/chat')}
            className="mt-6 px-6 py-3 bg-gradient-to-r from-green-800 to-green-400 text-white rounded-xl hover:from-green-700 hover:to-green-500 transition"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            {translations[language].startChatting}
          </motion.button>
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-12 mb-12">
        <h2 className="text-2xl font-semibold text-green-900 mb-6 text-center">
          {translations[language].exploreFeatures}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-2">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-br from-green-100 via-green-50 to-green-200 rounded-2xl shadow-md p-5 hover:shadow-xl transition text-center border border-green-200"
              initial={i % 2 === 0 ? "hiddenLeft" : "hiddenRight"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
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
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
