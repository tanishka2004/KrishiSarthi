import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { language, translations } = useLanguage();

  return (
    <footer className="bg-green-800 text-white text-center py-4">
      <p>{translations[language].footer}</p>
    </footer>
  );
};

export default Footer;
