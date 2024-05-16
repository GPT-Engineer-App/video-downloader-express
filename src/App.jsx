import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index.jsx";
import Downloads from "./pages/Downloads.jsx";
import Navigation from "./components/Navigation.jsx";

function App() {
  const [downloadedVideos, setDownloadedVideos] = useState([]);

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Index setDownloadedVideos={setDownloadedVideos} />} />
        <Route path="/downloads" element={<Downloads downloadedVideos={downloadedVideos} />} />
      </Routes>
    </Router>
  );
}

export default App;
