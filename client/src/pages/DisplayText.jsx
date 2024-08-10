import React from "react";
import { Link } from "react-router-dom";

function DisplayText({ extractedText }) {
  return (
    <div className="min-h-screen bg-gray-800 flex justify-center items-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-gray-900 text-3xl font-bold mb-6">
          Extracted Text
        </h1>
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <p className="text-gray-700 whitespace-pre-wrap">{extractedText}</p>
        </div>
        <Link to="/browse" className="text-blue-500 hover:underline">
          Go back to upload
        </Link>
      </div>
    </div>
  );
}

export default DisplayText;
