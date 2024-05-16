import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index.jsx";
import Downloads from "./pages/Downloads.jsx";
import Navigation from "./components/Navigation.jsx";
import VideoPlayer from "./pages/VideoPlayer.jsx";

function App() {
  const [downloadedVideos, setDownloadedVideos] = useState([]);

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Index setDownloadedVideos={setDownloadedVideos} />} />
        <Route path="/downloads" element={<Downloads downloadedVideos={downloadedVideos} />} />
        <Route path="/video/:id" element={<VideoPlayer downloadedVideos={downloadedVideos} />} />
      </Routes>
    </Router>
  );
}

export default App;
