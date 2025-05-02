# KrishiSarthi 🌾

**KrishiSarthi** is a smart, AI-powered frontend platform designed to assist Indian farmers with real-time weather updates, crop advice, market trends, and government schemes — all in a regional language-friendly and intuitive UI.

This project was developed as part of a hackathon and continues to evolve with new features and backend integration support.

---

## 🌟 Features

### 🧠 AI Assistant - FarmAid
Includes both **text and voice support**. Key features:

- **🌦 Weather Updates**
  - Accurate forecasts and crop-specific weather tips.
  - 📌 *Functionality*: This feature fetches real-time weather data from a backend API and displays it on the UI.
  
- **🌱 Crop Management**
  - Seasonal advice, pest control, and best practices.
  - 📌 *Functionality*: This feature expects dynamic data from the backend to provide tailored tips based on region, season, and crop.

- **📊 Market Insights**
  - Real-time mandi prices and market trends.
  - 📌 *Functionality*: Displays latest prices and trends fetched from APIs or government datasets via backend.

- **🏛️ Government Schemes**
  - Up-to-date schemes and eligibility information.
  - 📌 *Functionality*: Data is dynamically populated from the backend based on user queries or region.

---

## 🛠 Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Voice Support**: Web Speech API (Browser-based)
- **Icons**: React Icons

> The backend is expected to be built separately and integrated via REST APIs or GraphQL.

---

## 🤝 Future Integration Plan

To make this a full-stack application, backend developers can build and provide APIs for each feature. Here's how integration is planned:

| Feature           | API Requirement                                              |
|-------------------|--------------------------------------------------------------|
| Weather Updates   | Real-time weather data from APIs like OpenWeatherMap         |
| Crop Management   | Dynamic crop tips based on location, season, and crop type   |
| Market Insights   | Live mandi prices from government databases or APIs          |
| Government Schemes| Region and language-specific scheme data                     |

The frontend is designed to easily integrate with these APIs using `fetch` or `axios`.

---

## 🚀 Getting Started (Frontend Only)

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/krishisarthi.git
   cd krishisarthi

Install dependencies:

npm install

Run the app:

npm run dev
