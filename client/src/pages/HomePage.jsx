import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleScanImageClick = () => {
    navigate("/browse");
  };

  return (
    <div className="min-h-screen bg-gray-800 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-white mb-8 animate-bounce">
        Welcome to the Image Scanner
      </h1>
      <button
        onClick={handleScanImageClick}
        className="bg-blue-500 text-white py-3 px-8 rounded-lg cursor-pointer transition-transform transform hover:scale-110 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Scan Image
      </button>
    </div>
  );
};

export default HomePage;
