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
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <FaSeedling className="text-2xl" />
          <h1 className="text-xl font-bold tracking-wide">KrishiSarthi</h1>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-grow justify-center px-4">
          <input
            type="text"
            placeholder={language === "en" ? "Search..." : "खोजें..."}
            className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Navigation Links and Buttons */}
        <div className="flex items-center space-x-6 text-md font-medium">
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
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;