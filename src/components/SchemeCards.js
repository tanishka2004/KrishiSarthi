import React, { useState, useEffect } from "react";

const SchemeCards = () => {
  const [schemes, setSchemes] = useState([]);
  const [category, setCategory] = useState("");
  const [state, setState] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchSchemes = async () => {
    setLoading(true);
    try {
      const query = new URLSearchParams();
      if (category) query.append("category", category);
      if (state) query.append("state", state);

      const res = await fetch(`/schemes?${query.toString()}`);
      const data = await res.json();
      setSchemes(data);
    } catch (err) {
      console.error("Error fetching schemes:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchSchemes();
  }, []);

  return (
    <div className="min-h-screen bg-green-100 p-6 pt-24">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-green-800 text-center mb-6">
          Government Schemes
        </h1>

        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 border rounded w-full md:w-1/2"
          >
            <option value="">All Categories</option>
            <option value="subsidy">Subsidy</option>
            <option value="loan">Loan</option>
            <option value="insurance">Insurance</option>
            <option value="tech">Technology</option>
          </select>
          <input
            type="text"
            placeholder="Enter your state (e.g., MP, Maharashtra)"
            className="p-2 border rounded w-full md:w-1/2"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <button
            onClick={fetchSchemes}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Apply Filters
          </button>
        </div>

        {/* Scheme Cards */}
        {loading ? (
          <p className="text-center text-gray-600">Loading schemes...</p>
        ) : schemes.length === 0 ? (
          <p className="text-center text-gray-600">No schemes found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {schemes.map((scheme) => (
              <div
                key={scheme.id}
                className="bg-green-50 p-4 rounded-lg shadow border border-green-200"
              >
                <h2 className="text-xl font-semibold text-green-800">
                  {scheme.title}
                </h2>
                <p className="text-gray-700 mt-2">{scheme.description}</p>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>Category:</strong> {scheme.category} | <strong>State:</strong> {scheme.state}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SchemeCards;
