import React from "react";

const SchemeCards = () => {
  const schemes = [
    {
      name: "Pradhan Mantri Fasal Bima Yojana",
      description:
        "Crop insurance scheme to provide financial support to farmers in case of crop failure due to natural calamities.",
      benefits: [
        "Covers crop loss due to natural disasters.",
        "Affordable premium rates for farmers.",
        "Encourages sustainable farming practices.",
      ],
    },
    {
      name: "Kisan Credit Card (KCC)",
      description:
        "Provides farmers with timely access to credit for agricultural needs like seeds, fertilizers, and equipment.",
      benefits: [
        "Low-interest loans for farmers.",
        "Flexible repayment options.",
        "Covers both short-term and long-term credit needs.",
      ],
    },
    {
      name: "Soil Health Card Scheme",
      description:
        "Helps farmers understand the health of their soil and provides recommendations for improving soil quality.",
      benefits: [
        "Promotes balanced use of fertilizers.",
        "Improves crop productivity.",
        "Reduces input costs for farmers.",
      ],
    },
    {
      name: "PM-Kisan Samman Nidhi",
      description:
        "Provides direct income support of ₹6,000 per year to small and marginal farmers.",
      benefits: [
        "Direct benefit transfer to farmers' bank accounts.",
        "Supports small and marginal farmers.",
        "Helps meet agricultural expenses.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-yellow-100 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-yellow-800 text-center mb-6">
          Government Schemes
        </h1>
        <p className="text-lg text-gray-700 text-center mb-6">
          Stay updated on the latest government schemes, subsidies, and yojnas to support your farming journey.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {schemes.map((scheme, index) => (
            <div
              key={index}
              className="bg-yellow-50 border border-yellow-300 rounded-lg p-4 shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-yellow-800 mb-2">
                {scheme.name}
              </h2>
              <p className="text-gray-700 mb-4">{scheme.description}</p>
              <h3 className="text-lg font-medium text-yellow-700 mb-2">
                Benefits:
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                {scheme.benefits.map((benefit, i) => (
                  <li key={i} className="mb-1">
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchemeCards;