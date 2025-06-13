import React, { useState, useEffect } from "react";

const CropManagement = () => {
  const [cropName, setCropName] = useState("");
  const [cropType, setCropType] = useState("");
  const [crops, setCrops] = useState([]);
  const [advice, setAdvice] = useState({});
  const [loading, setLoading] = useState(false);

  // Fetch user's crops on mount
  useEffect(() => {
    const fetchCrops = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;
      try {
        const res = await fetch("/crops/", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.ok) {
          const data = await res.json();
          setCrops(data);
        }
      } catch (err) {
        // handle error
      }
    };
    fetchCrops();
  }, []);

  // Add crop handler
  const handleAddCrop = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) return;
    try {
      const res = await fetch("/crops/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name: cropName, type: cropType }),
      });
      if (res.ok) {
        const newCrop = await res.json();
        setCrops([...crops, newCrop]);
        setCropName("");
        setCropType("");
      }
    } catch (err) {
      // handle error
    }
  };

  // Get advice handler
  const handleGetAdvice = async (cropId) => {
    setLoading(true);
    const token = localStorage.getItem("token");
    if (!token) return;
    try {
      const res = await fetch(`/crops/advice/${cropId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        setAdvice((prev) => ({ ...prev, [cropId]: data.advice }));
      }
    } catch (err) {
      // handle error
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-green-100 p-6 pt-24">
      {/* pt-24 adds space for navbar */}
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-green-800 text-center mb-6">
          Crop Management
        </h1>

        {/* How Crop Management Works Section */}
        <div className="mb-8 bg-green-50 border border-green-200 rounded-lg p-4 shadow">
          <h2 className="text-lg font-semibold text-green-700 mb-2">
            How does Crop Management work?
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>
              <strong>Add your crops:</strong> Enter the crop name and type you are growing.
            </li>
            <li>
              <strong>Track your crops:</strong> See a list of all crops you have added.
            </li>
            <li>
              <strong>Get expert advice:</strong> Click "Get Advice" for any crop to receive personalized tips powered by AI.
            </li>
            <li>
              <strong>Secure & personalized:</strong> All your crop data is securely linked to your account.
            </li>
          </ul>
          <p className="mt-2 text-sm text-gray-500">
            Example: Add "Wheat" as crop name and "Rabi" as crop type, then get tailored advice for your wheat crop.
          </p>
        </div>

        <form
          className="flex flex-col md:flex-row gap-4 mb-8"
          onSubmit={handleAddCrop}
        >
          <input
            type="text"
            placeholder="Crop Name"
            className="p-2 border rounded"
            value={cropName}
            onChange={(e) => setCropName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Crop Type"
            className="p-2 border rounded"
            value={cropType}
            onChange={(e) => setCropType(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Add Crop
          </button>
        </form>

        <h2 className="text-xl font-semibold text-green-700 mb-4">
          Your Crops
        </h2>
        {crops.length === 0 ? (
          <p className="text-gray-600">No crops added yet.</p>
        ) : (
          <div className="space-y-4">
            {crops.map((crop) => (
              <div
                key={crop.id}
                className="bg-green-50 border border-green-300 rounded-lg p-4 shadow-md"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{crop.name}</p>
                    <p className="text-sm text-gray-600">{crop.type}</p>
                  </div>
                  <button
                    onClick={() => handleGetAdvice(crop.id)}
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                    disabled={loading}
                  >
                    {loading ? "Loading..." : "Get Advice"}
                  </button>
                </div>
                {advice[crop.id] && (
                  <div className="mt-2 p-2 bg-blue-50 rounded text-blue-800">
                    <strong>Advice:</strong> {advice[crop.id]}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CropManagement;