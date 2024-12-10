import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Artists from './pages/Artists';
import Gallery from './pages/Gallery';
import Shop from './pages/Shop';
import Photograph from './pages/Photograph';
import PhotographDetail from './pages/PhotographDetail';
import VirtualTour from './pages/VirtualTour';
import Paintings from './pages/painting';
import PaintingsId from './pages/Paintingid';
import EditionArtwork from './pages/EditionArtwork';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Admin from './pages/Admin'; // Add this import

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/photographs" element={<Photograph />} />
        <Route path="/photographs/:id" element={<PhotographDetail />} />
        <Route path="/virtualtour" element={<VirtualTour />} />
        <Route path="/painting" element={<Paintings />} />
        <Route path="/paintings/:id" element={<PaintingsId />} />
        <Route path="/editioned-artworks" element={<EditionArtwork />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} /> {/* Add this route */}
      </Routes>
    </Router>
  );
}

export default App;
