import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Upload({ setExtractedText }) {
  const [selectedFile, setSelectedFile] = useState();
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("document", selectedFile);

    const response = await fetch("http://localhost:5000/scan", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    setExtractedText(data.text);
    navigate("/display");
  };

  return (
    <div className="min-h-screen bg-gray-800 flex justify-center items-center">
      <header className="App-header">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-8 p-6 bg-gray-600 rounded-lg shadow-lg content-center">
            <h1 className="text-2xl font-bold text-white mb-4">
              Select Image File to Extract Text
            </h1>
            <input
              type="file"
              id="fileInput"
              className="hidden"
              onChange={handleFileChange}
            />
            <label
              htmlFor="fileInput"
              className="bg-green-500 text-white py-2 px-6 rounded-lg cursor-pointer transition-transform transform hover:scale-110 hover:bg-green-600"
            >
              Browse...
            </label>
            {selectedFile && (
              <span className="ml-4 text-lg text-white">
                {selectedFile.name}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded-lg cursor-pointer transition-transform transform hover:scale-110 hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </header>
    </div>
  );
}

export default Upload;
