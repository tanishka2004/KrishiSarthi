import React from 'react';
import Chatbot from '../components/ChatBot';

const ChatbotPage = () => {
  return (
    <div className="min-h-screen bg-green-50 p-6">
      <h2 className="text-3xl font-bold text-center text-green-800 mb-6">Chat with FarmAid</h2>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        <Chatbot />
      </div>
    </div>
  );
};

export default ChatbotPage;
