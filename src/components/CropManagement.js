import React from "react";

const CropManagement = () => {
  const cropFeatures = [
    {
      title: "Disease Identification",
      description:
        "Upload images of your crops to identify diseases using AI-powered tools.",
    },
    {
      title: "Pest Control Techniques",
      description:
        "Learn about organic and chemical pest control methods tailored to your crops.",
    },
    {
      title: "Fertilizer Recommendations",
      description:
        "Get personalized fertilizer recommendations based on your soil and crop type.",
    },
    {
      title: "Crop Rotation Tips",
      description:
        "Understand the benefits of crop rotation to improve soil health and yield.",
    },
    {
      title: "Weather-Based Alerts",
      description:
        "Receive alerts about weather conditions that may affect your crops.",
    },
  ];

  return (
    <div className="min-h-screen bg-green-100 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-green-800 text-center mb-6">
          Crop Management
        </h1>
        <p className="text-lg text-gray-700 text-center mb-6">
          Real-time information on crop diseases and techniques to help you
          maximize your yield and protect your crops.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cropFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-green-50 border border-green-300 rounded-lg p-4 shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-green-800 mb-2">
                {feature.title}
              </h2>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CropManagement;