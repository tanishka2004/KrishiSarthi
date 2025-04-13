import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSeedling, FaCloudSunRain, FaChartLine, FaUniversity, FaRobot, FaMicrophone } from 'react-icons/fa';
import bgImage from '../assets/farm.jpg'; // ✅ path to the background image

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: 'Crop Management',
      desc: 'Real-time info on crop diseases and techniques.',
      icon: <FaSeedling className="text-green-600 text-3xl mb-2 mx-auto" />,
    },
    {
      title: 'Weather Updates',
      desc: 'Accurate forecasts & tips for crops.',
      icon: <FaCloudSunRain className="text-blue-500 text-3xl mb-2 mx-auto" />,
    },
    {
      title: 'Market Insights',
      desc: 'Know mandi rates & trends easily.',
      icon: <FaChartLine className="text-purple-600 text-3xl mb-2 mx-auto" />,
    },
    {
      title: 'Government Schemes',
      desc: 'Stay updated on subsidies & yojnas.',
      icon: <FaUniversity className="text-yellow-600 text-3xl mb-2 mx-auto" />,
    },
    {
      title: 'Personalized Advice',
      desc: 'Get AI-based help as per your farming style.',
      icon: <FaRobot className="text-gray-700 text-3xl mb-2 mx-auto" />,
    },
    {
      title: 'Text & Voice Input',
      desc: 'Talk to FarmAid your way!',
      icon: <FaMicrophone className="text-red-600 text-3xl mb-2 mx-auto" />,
    },
  ];

  return (
    <div
  className="min-h-screen pt-20 bg-cover bg-center bg-no-repeat relative"
  style={{ backgroundImage: `url(${bgImage})` }}
>

      {/* White overlay for readability */}
      <div className="absolute inset-0 bg-white/30 p-6 ">
        {/* Hero Section */}
        <section className="text-center py-10">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800">KrishiSarthi</h1>
          <p className="text-lg mt-4 max-w-2xl mx-auto text-green-700">
            AI Chat Helper for Indian Farmers – empowering agriculture with technology.
          </p>
          <button
            onClick={() => navigate('/chat')}
            className="mt-6 px-6 py-3 bg-green-700 text-white rounded-xl hover:bg-green-800 transition"
          >
            Start Chatting
          </button>
        </section>

        {/* Features Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-green-900 mb-6 text-center">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition text-center"
              >
                {feature.icon}
                <h3 className="text-xl font-bold text-green-800">{feature.title}</h3>
                <p className="mt-2 text-green-700">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
