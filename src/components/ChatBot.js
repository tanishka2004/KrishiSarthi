import React, { useState } from "react";
import { Mic, Send } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Chatbot = () => {
  const { language } = useLanguage();
  const [input, setInput] = useState("");
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userQuestion = input;
    setInput("");
    setLoading(true);

    // Add user question to chat
    setChats((prevChats) => [
      ...prevChats,
      { question: userQuestion, answer: "..." },
    ]);

    try {
      const res = await fetch("/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userQuestion, lang: language }),
      });

      const data = await res.json();

      if (res.ok) {
        setChats((prevChats) => {
          const newChats = [...prevChats];
          newChats[newChats.length - 1].answer = data.reply;
          return newChats;
        });
      } else {
        throw new Error(data.error || "Failed to fetch reply");
      }
    } catch (err) {
      setChats((prevChats) => {
        const newChats = [...prevChats];
        newChats[newChats.length - 1].answer = "❌ Something went wrong.";
        return newChats;
      });
    }

    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">
        {language === "en" ? "FarmAid Chat Helper" : "फार्मएड चैट सहायक"}
      </h2>

      {/* Chat Container */}
      <div className="h-[300px] overflow-y-auto bg-gray-300 p-4 rounded-lg shadow">
        {chats.map((chat, idx) => (
          <div key={idx} className="mb-4">
            <p className="font-semibold text-green-700">
              {language === "en" ? "👤 You:" : "👤 आप:"}
            </p>
            <p className="mb-1">{chat.question}</p>
            <p className="font-semibold text-blue-700">
              {language === "en" ? "🤖 FarmAid:" : "🤖 फार्मएड:"}
            </p>
            <p className="text-gray-800">{chat.answer}</p>
          </div>
        ))}
      </div>

      {/* Input Section */}
      <div className="flex mt-4 gap-2">
        <input
          type="text"
          className="flex-grow p-2 border rounded-xl"
          placeholder={
            language === "en"
              ? "Type your question..."
              : "अपना प्रश्न टाइप करें..."
          }
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={loading}
        />
        <button
          onClick={handleSend}
          className="bg-green-600 text-white p-2 rounded-xl hover:bg-green-700"
          disabled={loading}
        >
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
