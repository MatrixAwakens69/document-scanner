import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Upload from "./pages/Upload";
import DisplayText from "./pages/DisplayText";
import HomePage from "./pages/HomePage";

function App() {
  const [extractedText, setExtractedText] = useState("");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/browse"
          element={<Upload setExtractedText={setExtractedText} />}
        />
        <Route
          path="/display"
          element={<DisplayText extractedText={extractedText} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
