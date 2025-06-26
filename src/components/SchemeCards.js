import React, { useEffect, useState } from "react";
import { FaUniversity, FaInfoCircle, FaCheckCircle, FaExternalLinkAlt } from "react-icons/fa";

const SchemeCards = () => {
  const [schemes, setSchemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSchemes = async () => {
      try {
        const res = await fetch("/schemes");
        const data = await res.json();
        if (res.ok) {
          setSchemes(data);
        } else {
          setError("Failed to load schemes");
        }
      } catch (err) {
        setError("Something went wrong");
      }
      setLoading(false);
    };

    fetchSchemes();
  }, []);

  return (
    <div className="min-h-screen bg-green-100 p-6 pt-24">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-green-800 text-center mb-6 flex items-center justify-center gap-2">
          <FaUniversity className="text-3xl" />
          Government Schemes for Farmers
        </h1>

        <p className="text-center text-gray-700 mb-6 max-w-2xl mx-auto">
          Explore central schemes offering financial assistance, insurance, subsidies, and credit to empower Indian farmers.
        </p>

        {loading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-600">{error}</p>
        ) : (
          <div className="space-y-6">
            {schemes.map((scheme, index) => (
              <div key={index} className="border border-green-200 rounded-xl p-5 shadow-sm bg-green-50">
                <h2 className="text-2xl font-bold text-green-700 mb-2 flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" /> {scheme.name}
                </h2>
                <p className="text-gray-800 flex items-center gap-2 mb-2">
                  <FaInfoCircle className="text-green-600" /> {scheme.description}
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  <strong>Eligibility:</strong> {scheme.eligibility}
                </p>
                <a
                  href={scheme.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-700 hover:underline font-medium text-sm"
                >
                  Know More <FaExternalLinkAlt className="ml-1 text-xs" />
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SchemeCards;
