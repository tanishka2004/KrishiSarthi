import React, { useEffect, useState } from "react";

function Dashboard() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await fetch("http://localhost:5000/dashboard", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (!res.ok) {
          const errData = await res.json();
          throw new Error(errData.error || "Failed to fetch data");
        }

        const result = await res.json();
        setData(result);
      } catch (err) {
        setError(err.message || "Error loading dashboard");
      }
    };

    if (token) {
      fetchDashboard();
    } else {
      setError("You must be logged in.");
    }
  }, [token]);

  return (
    <div className="min-h-screen pt-24 p-6 bg-green-50">
      <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">
        📊 My Farm Dashboard
      </h1>

      {error ? (
        <p className="text-red-600 text-center">{error}</p>
      ) : data.length === 0 ? (
        <p className="text-gray-600 text-center">Loading your crop data...</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {data.map((crop, idx) => (
            <div
              key={idx}
              className="bg-white border border-green-300 shadow rounded-lg p-4"
            >
              <h2 className="text-xl font-semibold text-green-700">
                🌱 {crop.crop}
              </h2>
              <p className="text-sm text-gray-600">Type: {crop.type}</p>
              <p className="mt-2">
                💰 <strong>Market Price:</strong> ₹{crop.market_price}
              </p>
              <p>
                🌦️ <strong>Weather Tip:</strong> {crop.latest_weather_tip}
              </p>
              <p>
                🧠 <strong>Advice:</strong> {crop.advice}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
