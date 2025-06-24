import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

const translations = {
  en: {
    homeTitle: "KrishiSarthi",
    homeDesc: "Empowering Indian farmers with AI-driven solutions. Explore our chatbot and other features like crop management, weather updates, market insights, and more.",
    startChatting: "Start Chatting",
    exploreFeatures: "Explore Our Features",
    cropManagement: "Crop Management",
    cropDesc: "Real-time info on crop diseases and techniques.",
    weather: "Weather Updates",
    weatherDesc: "Accurate forecasts & tips for crops.",
    market: "Market Insights",
    marketDesc: "Know mandi rates & trends easily.",
    schemes: "Government Schemes",
    schemesDesc: "Stay updated on subsidies & yojnas.",
    advice: "Personalized Advice",
    adviceDesc: "Get AI-based help as per your farming style.",
    voice: "Text & Voice Input",
    voiceDesc: "Talk to FarmAid your way!",
    learnMore: "Learn More",

    // ✅ ADD THESE FOR NAVBAR AND FOOTER
    home: "Home",
    dashboard: "Dashboard",
    about: "About",
    login: "Login",
    signup: "Sign Up",
    footer: "© 2025 KrishiSarthi. All rights reserved.",
    // ✅ Crop Management Page
    cropManagementTitle: "Crop Management",
    howItWorks: "How does Crop Management work?",
    addYourCrops: "Add your crops",
    addYourCropsDesc: "Enter the crop name and type you are growing.",
    trackCrops: "Track your crops",
    trackCropsDesc: "See a list of all crops you have added.",
    getAdvice: "Get expert advice",
    getAdviceDesc: "Click 'Get Advice' for any crop to receive personalized tips powered by AI.",
    secureData: "Secure & personalized",
    secureDataDesc: "All your crop data is securely linked to your account.",
    example: "Example: Add 'Wheat' as crop name and 'Rabi' as crop type, then get tailored advice for your wheat crop.",
    yourCrops: "Your Crops",
    noCrops: "No crops added yet.",
    adviceLabel: "Advice",
    addCropBtn: "Add Crop",
    loading: "Loading..."

  },
  hi: {
    homeTitle: "कृषि साथी",
    homeDesc: "भारतीय किसानों को एआई-चालित समाधान प्रदान करना। हमारे चैटबॉट और अन्य सुविधाओं जैसे फसल प्रबंधन, मौसम अपडेट, बाजार अंतर्दृष्टि और अधिक का अन्वेषण करें।",
    startChatting: "चैट शुरू करें",
    exploreFeatures: "हमारी सुविधाएँ देखें",
    cropManagement: "फसल प्रबंधन",
    cropDesc: "फसल रोगों और तकनीकों पर रीयल-टाइम जानकारी।",
    weather: "मौसम अपडेट",
    weatherDesc: "फसलों के लिए सटीक पूर्वानुमान और सुझाव।",
    market: "बाजार जानकारी",
    marketDesc: "मंडी दरें और रुझान जानें।",
    schemes: "सरकारी योजनाएँ",
    schemesDesc: "सब्सिडी और योजनाओं की जानकारी रखें।",
    advice: "व्यक्तिगत सलाह",
    adviceDesc: "आपकी खेती शैली के अनुसार एआई आधारित सहायता प्राप्त करें।",
    voice: "टेक्स्ट और वॉयस इनपुट",
    voiceDesc: "अपने तरीके से फार्मएड से बात करें!",
    learnMore: "और जानें",

    // ✅ ADD THESE FOR NAVBAR AND FOOTER
    home: "होम",
    dashboard: "डैशबोर्ड",
    about: "हमारे बारे में",
    login: "लॉग इन",
    signup: "साइन अप",
    footer: "© 2025 कृषिसारथी। सर्वाधिकार सुरक्षित।",
    // ✅ फसल प्रबंधन पेज
    cropManagementTitle: "फसल प्रबंधन",
    howItWorks: "फसल प्रबंधन कैसे काम करता है?",
    addYourCrops: "अपनी फसलें जोड़ें",
    addYourCropsDesc: "आप जो फसल उगा रहे हैं उसका नाम और प्रकार दर्ज करें।",
    trackCrops: "अपनी फसलें ट्रैक करें",
    trackCropsDesc: "आपने जो फसलें जोड़ी हैं उनकी सूची देखें।",
    getAdvice: "विशेषज्ञ सलाह प्राप्त करें",
    getAdviceDesc: "'सलाह प्राप्त करें' पर क्लिक करें और फसल आधारित सुझाव प्राप्त करें।",
    secureData: "सुरक्षित और व्यक्तिगत",
    secureDataDesc: "आपका डेटा आपके खाते से सुरक्षित रूप से जुड़ा होता है।",
    example: "उदाहरण: 'गेहूं' और 'रबी' जोड़ें और सुझाव प्राप्त करें।",
    yourCrops: "आपकी फसलें",
    noCrops: "अभी तक कोई फसल नहीं जोड़ी गई है।",
    adviceLabel: "सलाह",
    addCropBtn: "फसल जोड़ें",
    loading: "लोड हो रहा है..."

  }
};


export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "hi" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
