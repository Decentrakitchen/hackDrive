import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import DetectAnomaly from './pages/DetectAnomaly';
import Hotspot from './pages/Hotspot';
import DensityMap from './pages/DensityMap';

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detect-anomaly" element={<DetectAnomaly />} />
          <Route path="/hotspot" element={<Hotspot />} />
          <Route path="/density-map" element={<DensityMap />} />
        </Routes>
    </Router>
  );
}

export default App;
