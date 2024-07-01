import React, { useState } from "react";

function App() {
  const [selectedFile, setSelectedFile] = useState();

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
    console.log(data);
  };

  return (
    <div className="App min-h-screen bg-gray-800 flex justify-center items-center">
      <header className="App-header">
        <form
          onSubmit={handleSubmit}
          className="bg-blue-300 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <input
              type="file"
              onChange={handleFileChange}
              className="shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Scan Document
            </button>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
