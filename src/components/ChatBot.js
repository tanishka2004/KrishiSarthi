import React, { useState } from "react";
import { Mic, Send } from "lucide-react";

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [chats, setChats] = useState([]);

  const handleSend = () => {
    if (!input.trim()) return;

    const newChat = {
      question: input,
      answer: "Ye ek sample reply hai, AI yaha jawab dega.",
    };

    setChats([...chats, newChat]);
    setInput("");
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">FarmAid Chat Helper</h2>

      <div className="h-[400px] overflow-y-auto bg-gray-100 p-4 rounded-lg shadow">
        {chats.map((chat, idx) => (
          <div key={idx} className="mb-4">
            <p className="font-semibold text-green-700">👤 You:</p>
            <p className="mb-1">{chat.question}</p>
            <p className="font-semibold text-blue-700">🤖 FarmAid:</p>
            <p className="text-gray-800">{chat.answer}</p>
          </div>
        ))}
      </div>

      <div className="flex mt-4 gap-2">
        <input
          type="text"
          className="flex-grow p-2 border rounded-xl"
          placeholder="Type your question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSend} className="bg-green-600 text-white p-2 rounded-xl hover:bg-green-700">
          <Send size={20} />
        </button>
        <button className="bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-700">
          <Mic size={20} />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
