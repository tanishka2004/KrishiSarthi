import React, { useState } from "react";
import { FaSeedling, FaBars, FaTimes, FaLanguage } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext"; // Import Language Context

const Navbar = () => {
  const { language, translations, toggleLanguage } = useLanguage(); // Access language context
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-gradient-to-r from-green-800 to-green-400 text-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 mb-2 md:mb-0">
          <FaSeedling className="text-2xl" />
          <h1 className="text-xl font-bold tracking-wide">KrishiSarthi</h1>
        </div>

        {/* Navigation Links and Buttons - Centered */}
        <div className="flex flex-wrap justify-center items-center space-x-4 md:space-x-6 text-md font-medium">
          <Link to="/" className="hover:bg-white hover:text-green-700 px-3 py-1 rounded transition">
            {translations[language].home}
          </Link>
          <Link to="/dashboard" className="hover:bg-white hover:text-green-700 px-3 py-1 rounded transition">
            {translations[language].dashboard}
          </Link>
          <Link to="/about" className="hover:bg-white hover:text-green-700 px-3 py-1 rounded transition">
            {translations[language].about}
          </Link>
          <Link to="/login">
            <button className="bg-white text-green-700 px-4 py-1 rounded hover:bg-green-100 transition">
              {translations[language].login}
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-white text-green-700 px-4 py-1 rounded hover:bg-green-100 transition">
              {translations[language].signup}
            </button>
          </Link>
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-2 bg-white text-green-700 px-3 py-1 rounded hover:bg-green-100 transition"
          >
            <FaLanguage className="text-xl" />
            <span>{language === "en" ? "English" : "हिंदी"}</span>
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden mt-2 md:mt-0">
          <button onClick={toggleMenu}>
            {menuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;