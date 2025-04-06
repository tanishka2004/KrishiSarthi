import React, { useState } from 'react';
import Chatbot from '../components/ChatBot'; // Make sure the path & casing is correct

const Home = () => {
  const [showChat, setShowChat] = useState(false); // step 1

  const handleChatToggle = () => {
    setShowChat(true); // step 2: open chatbot
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-lime-200 p-6">
      {/* Hero Section */}
      <section className="text-center py-10">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800">FarmAid</h1>
        <p className="text-lg mt-4 max-w-2xl mx-auto text-green-700">
          AI Chat Helper for Indian Farmers – empowering agriculture with technology.
        </p>
        <button
          onClick={handleChatToggle}
          className="mt-6 px-6 py-3 bg-green-700 text-white rounded-xl hover:bg-green-800 transition"
        >
          Start Chatting
        </button>
      </section>

      {/* Conditionally render chatbot */}
      {showChat && (
        <div className="mt-10">
          <Chatbot />
        </div>
      )}

      {/* Features Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-green-900 mb-6 text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Crop Management', desc: 'Real-time info on crop diseases and techniques.' },
            { title: 'Weather Updates', desc: 'Accurate forecasts & tips for crops.' },
            { title: 'Market Insights', desc: 'Know mandi rates & trends easily.' },
            { title: 'Government Schemes', desc: 'Stay updated on subsidies & yojnas.' },
            { title: 'Personalized Advice', desc: 'Get AI-based help as per your farming style.' },
            { title: 'Text & Voice Input', desc: 'Talk to FarmAid your way!' },
          ].map((feature, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-green-800">{feature.title}</h3>
              <p className="mt-2 text-green-700">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
