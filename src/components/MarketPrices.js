import React from "react";

const MarketPrices = () => {
  const marketData = [
    { crop: "Wheat", price: "₹2,000/quintal", trend: "Rising" },
    { crop: "Rice", price: "₹1,800/quintal", trend: "Stable" },
    { crop: "Maize", price: "₹1,500/quintal", trend: "Falling" },
    { crop: "Sugarcane", price: "₹3,000/quintal", trend: "Rising" },
  ];

  return (
    <div className="min-h-screen bg-green-100 p-12 flex items-center justify-center">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-green-800 text-center mb-6">
          Market Insights
        </h1>
        <p className="text-lg text-gray-700 text-center mb-6">
          Stay updated with the latest mandi rates and market trends to make
          informed decisions for your crops.
        </p>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-green-800 text-white">
                <th className="border border-gray-300 px-4 py-2">Crop</th>
                <th className="border border-gray-300 px-4 py-2">Price</th>
                <th className="border border-gray-300 px-4 py-2">Trend</th>
              </tr>
            </thead>
            <tbody>
              {marketData.map((data, index) => (
                <tr
                  key={index}
                  className={`text-center ${
                    index % 2 === 0 ? "bg-green-50" : "bg-white"
                  }`}
                >
                  <td className="border border-gray-300 px-4 py-2">
                    {data.crop}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {data.price}
                  </td>
                  <td
                    className={`border border-gray-300 px-4 py-2 ${
                      data.trend === "Rising"
                        ? "text-green-600"
                        : data.trend === "Falling"
                        ? "text-red-600"
                        : "text-gray-600"
                    }`}
                  >
                    {data.trend}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MarketPrices;