import React, { useState } from "react";

const WeatherCard = () => {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/weather?lat=${lat}&lon=${lon}`);
      const data = await res.json();
      if (res.ok) {
        setWeather(data);
      } else {
        setError(data.error || "Failed to fetch weather");
        setWeather(null);
      }
    } catch (err) {
      setError("Something went wrong");
      setWeather(null);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-green-100 p-6 pt-24 flex flex-col items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-green-800 text-center mb-4">Weather Updates</h1>

        <form onSubmit={fetchWeather} className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Latitude"
            className="p-2 border rounded flex-1"
            value={lat}
            onChange={(e) => setLat(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Longitude"
            className="p-2 border rounded flex-1"
            value={lon}
            onChange={(e) => setLon(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            {loading ? "Loading..." : "Get Weather"}
          </button>
        </form>

        {error && (
          <p className="text-red-600 text-center mb-4">{error}</p>
        )}

        {weather && (
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-green-700 mb-2">
              {weather.location}
            </h2>
            <p className="text-lg text-gray-700">Temperature: {weather.temperature}°C</p>
            <p className="text-lg text-gray-700">Forecast: {weather.forecast}</p>
            <p className="text-lg text-gray-700">Humidity: {weather.humidity}%</p>
            <p className="mt-4 p-3 bg-blue-50 text-blue-800 rounded shadow">
              <strong>Tip:</strong> {weather.tip}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherCard;
