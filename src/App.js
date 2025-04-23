import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext"; // Import LanguageProvider
import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ChatbotPage from "./pages/ChatbotPage";
import Login from "./pages/Login"; // Import Login
import Signup from "./pages/Signup"; // Import Signup
import MarketPrices from "./components/MarketPrices"; // Import MarketPrices
import WeatherCard from "./components/WeatherCard"; // Import WeatherCard
import SchemeCards from "./components/SchemeCards"; // Import SchemeCards
import CropManagement from "./components/CropManagement"; // Import CropManagement

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/crop-management" element={<CropManagement />} /> {/* Add this route */}
              <Route path="/chat" element={<ChatbotPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/market-prices" element={<MarketPrices />} />
              <Route path="/weather-card" element={<WeatherCard />} />
              <Route path="/government-schemes" element={<SchemeCards />} />
              <Route path="/personalized-advice" element={<ChatbotPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;