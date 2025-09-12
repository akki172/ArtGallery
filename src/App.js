import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
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
import Loginsin from './pages/Loginsin';
import Admin from './pages/Admin';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists  isLoggedIn={isLoggedIn} username={username} />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/photographs" element={<Photograph isLoggedIn={isLoggedIn}username={username} />}/> 
        <Route path="/photographs/:id" element={<PhotographDetail isLoggedIn={isLoggedIn} username={username} />} />
        <Route path="/virtualtour" element={<VirtualTour  isLoggedIn={isLoggedIn} username={username} />} /> 
        <Route path="/painting" element={<Paintings />} />
        <Route path="/paintings/:id" element={<PaintingsId />} />
        <Route path="/editioned-artworks" element={<EditionArtwork isLoggedIn={isLoggedIn} username={username} />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/loginsin" element={<Loginsin onLogin={handleLogin} />} />
        <Route path="/shop" element={<Shop isLoggedIn={isLoggedIn} username={username} />} />
        
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
