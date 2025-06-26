import React, { useState } from "react";

const MarketPrices = () => {
  const [crop, setCrop] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const fetchPrices = async (e) => {
    e.preventDefault();
    setError("");
    setData(null);
    try {
      const res = await fetch(`/market?crop=${crop}`);
      const json = await res.json();
      if (!res.ok) {
        setError(json.error || "Failed to fetch");
        return;
      }
      setData(json);
    } catch (err) {
      setError("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-green-100 p-6 pt-24 flex flex-col items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-green-800 text-center mb-4">
          Market Insights
        </h1>

        <form onSubmit={fetchPrices} className="flex gap-4 mb-4">
          <input
            type="text"
            placeholder="Enter Crop (wheat, rice, maize)"
            className="flex-grow p-2 border rounded"
            value={crop}
            onChange={(e) => setCrop(e.target.value)}
            required
          />
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Get Price
          </button>
        </form>

        {error && <p className="text-red-600 text-center mb-4">{error}</p>}

        {data && (
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-green-700 mb-2 capitalize">{data.crop}</h2>
            <p className="text-lg text-gray-700">Latest Price: ₹{data.latest_price}</p>
            <p className="text-lg text-gray-700">Average Price: ₹{data.average_price.toFixed(2)}</p>
            <p className={`text-lg font-semibold ${data.trend === "up" ? "text-green-600" : "text-red-600"}`}>
              Market Trend: {data.trend === "up" ? "Rising 📈" : "Falling 📉"}
            </p>
            <p className="mt-2 text-sm text-gray-500">Past Prices: {data.history.join(", ")}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketPrices;
