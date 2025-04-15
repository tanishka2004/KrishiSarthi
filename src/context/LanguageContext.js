import React, { createContext, useState, useContext } from "react";

// Create the Language Context
const LanguageContext = createContext();

// Language translations
const translations = {
  en: {
    home: "Home",
    dashboard: "Dashboard",
    about: "About",
    login: "Login",
    signup: "Sign Up",
    footer: "© 2025 Farmer Portal. All rights reserved.",
    chatbot: "Chat with our AI assistant for farming help.",
    features: "Features",
    startChatting: "Start Chatting",
  },
  hi: {
    home: "होम",
    dashboard: "डैशबोर्ड",
    about: "के बारे में",
    login: "लॉगिन",
    signup: "साइन अप",
    footer: "© 2025 किसान पोर्टल। सर्वाधिकार सुरक्षित।",
    chatbot: "कृषि सहायता के लिए हमारे एआई सहायक से बात करें।",
    features: "विशेषताएँ",
    startChatting: "चैट शुरू करें",
  },
};

// Language Provider Component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "hi" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, translations, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom Hook to Use Language Context
export const useLanguage = () => useContext(LanguageContext);