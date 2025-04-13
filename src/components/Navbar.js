import React, { useState } from "react";
import { FaSeedling, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

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
        <div className="hidden md:flex items-center space-x-6 text-md font-medium">
          <Link to="/" className="hover:bg-white hover:text-green-700 px-3 py-1 rounded transition">
            Home
          </Link>
          <Link to="/dashboard" className="hover:bg-white hover:text-green-700 px-3 py-1 rounded transition">
            Dashboard
          </Link>
          <Link to="/about" className="hover:bg-white hover:text-green-700 px-3 py-1 rounded transition">
            About
          </Link>
          <Link to="/login">
            <button className="bg-white text-green-700 px-4 py-1 rounded hover:bg-green-100 transition">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-white text-green-700 px-4 py-1 rounded hover:bg-green-100 transition">
              Sign Up
            </button>
          </Link>
        </div>

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
          <li>
            <Link to="/" className="block hover:bg-white hover:text-green-700 px-3 py-2 rounded transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="block hover:bg-white hover:text-green-700 px-3 py-2 rounded transition">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/about" className="block hover:bg-white hover:text-green-700 px-3 py-2 rounded transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/login" className="block hover:bg-white hover:text-green-700 px-3 py-2 rounded transition">
              Login
            </Link>
          </li>
          <li>
            <Link to="/signup" className="block hover:bg-white hover:text-green-700 px-3 py-2 rounded transition">
              Sign Up
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
