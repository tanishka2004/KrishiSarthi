import React from "react";

const WeatherCard = () => {
  const weatherData = {
    location: "Your Location",
    temperature: "28°C",
    condition: "Sunny",
    humidity: "60%",
    windSpeed: "15 km/h",
    tips: [
      "Irrigate your crops early in the morning to reduce water loss.",
      "Protect crops from heat stress by using shade nets.",
      "Monitor soil moisture levels regularly.",
    ],
  };

  return (
    <div className="min-h-screen bg-green-100 p-12 flex items-center justify-center">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-green-800 text-center mb-6 ">
             Weather Updates 
        </h1>
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-green-700">
            {weatherData.location}
          </h2>
          <p className="text-lg text-gray-700">
            Temperature: {weatherData.temperature}
          </p>
          <p className="text-lg text-gray-700">Condition: {weatherData.condition}</p>
          <p className="text-lg text-gray-700">Humidity: {weatherData.humidity}</p>
          <p className="text-lg text-gray-700">Wind Speed: {weatherData.windSpeed}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-green-800 mb-4">
            Tips for Your Crops
          </h3>
          <ul className="list-disc list-inside text-gray-700">
            {weatherData.tips.map((tip, index) => (
              <li key={index} className="mb-2">
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;