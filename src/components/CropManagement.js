import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CropManagement = () => {
  const [cropName, setCropName] = useState("");
  const [cropType, setCropType] = useState("");
  const [crops, setCrops] = useState([]);
  const [advice, setAdvice] = useState({});
  const [loading, setLoading] = useState(false);
  const { language, translations } = useLanguage();
  const t = translations[language];

  const handleAddCrop = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/crops/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: cropName, type: cropType }),
      });

      if (res.ok) {
        const newCrop = await res.json();
        setCrops([...crops, newCrop]);
        setCropName("");
        setCropType("");
        toast.success(language === "en" ? "Crop added successfully!" : "फसल सफलतापूर्वक जोड़ी गई!");
      } else {
        toast.error(language === "en" ? "Failed to add crop." : "फसल जोड़ने में विफल।");
      }
    } catch (err) {
      console.error(err);
      toast.error(language === "en" ? "Error occurred while adding crop." : "फसल जोड़ते समय त्रुटि हुई।");
    }
  };

  const handleGetAdvice = async (cropId) => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/crops/advice/${cropId}`);
      if (res.ok) {
        const data = await res.json();
        setAdvice((prev) => ({ ...prev, [cropId]: data.advice }));
        toast.success(language === "en" ? "Advice fetched!" : "सलाह प्राप्त हुई!");
      } else {
        toast.error(language === "en" ? "Failed to get advice." : "सलाह प्राप्त करने में विफल।");
      }
    } catch (err) {
      console.error(err);
      toast.error(language === "en" ? "Error fetching advice." : "सलाह लाते समय त्रुटि हुई।");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-green-100 p-6 pt-24">
      <ToastContainer position="top-center" autoClose={3000} />

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-green-800 text-center mb-6">
          {t.cropManagementTitle}
        </h1>

        <div className="mb-8 bg-green-50 border border-green-200 rounded-lg p-4 shadow">
          <h2 className="text-lg font-semibold text-green-700 mb-2">
            {t.howItWorks}
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li><strong>{t.addYourCrops}:</strong> {t.addYourCropsDesc}</li>
            <li><strong>{t.trackCrops}:</strong> {t.trackCropsDesc}</li>
            <li><strong>{t.getAdvice}:</strong> {t.getAdviceDesc}</li>
            <li><strong>{t.secureData}:</strong> {t.secureDataDesc}</li>
          </ul>
          <p className="mt-2 text-sm text-gray-500">{t.example}</p>
        </div>

        <form className="flex flex-col md:flex-row gap-4 mb-8" onSubmit={handleAddCrop}>
          <input
            type="text"
            placeholder={t.cropManagementTitle}
            className="p-2 border rounded"
            value={cropName}
            onChange={(e) => setCropName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder={t.cropType || "Crop Type"}
            className="p-2 border rounded"
            value={cropType}
            onChange={(e) => setCropType(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            {t.addCropBtn}
          </button>
        </form>

        <h2 className="text-xl font-semibold text-green-700 mb-4">{t.yourCrops}</h2>
        {crops.length === 0 ? (
          <p className="text-gray-600">{t.noCrops}</p>
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
                    {loading ? t.loading : t.getAdvice}
                  </button>
                </div>
                {advice[crop.id] && (
                  <div className="mt-2 p-2 bg-blue-50 rounded text-blue-800">
                    <strong>{t.adviceLabel}:</strong> {advice[crop.id]}
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
