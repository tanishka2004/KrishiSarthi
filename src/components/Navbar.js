import React, { useState } from "react";
import { FaSeedling, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-gradient-to-r from-green-700 to-green-600 text-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <FaSeedling className="text-2xl" />
          <h1 className="text-xl font-bold tracking-wide">Farmer Portal</h1>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-md font-medium">
          <li className="hover:bg-white hover:text-green-700 px-3 py-1 rounded transition duration-300">
            <a href="#">Home</a>
          </li>
          <li className="hover:bg-white hover:text-green-700 px-3 py-1 rounded transition duration-300">
            <a href="#">Dashboard</a>
          </li>
          <li className="hover:bg-white hover:text-green-700 px-3 py-1 rounded transition duration-300">
            <a href="#">About</a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-3 bg-green-700 text-white text-md font-medium">
          <li className="hover:bg-white hover:text-green-700 px-3 py-2 rounded transition duration-300">
            <a href="#">Home</a>
          </li>
          <li className="hover:bg-white hover:text-green-700 px-3 py-2 rounded transition duration-300">
            <a href="#">Dashboard</a>
          </li>
          <li className="hover:bg-white hover:text-green-700 px-3 py-2 rounded transition duration-300">
            <a href="#">About</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
