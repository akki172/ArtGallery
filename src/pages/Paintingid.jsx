import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Make sure this path is correct
import './Paintingid.css';

const paintings = [
  { id: 1, title: 'Akbar Padamsee | Untitled (Nude I)', price: 90000, imgSrc: '/img/p1.png' },
  { id: 2, title: 'Akbar Padamsee | Untitled (Nude III)', price: 90000, imgSrc: '/img/p2.png' },
  { id: 3, title: 'Briana Blasko | Indigo Extraction 1, Tamil Nadu', price: 150000, imgSrc: '/img/p4.png' },
  { id: 4, title: 'Briana Blasko | Indigo Extraction 1, Tamil Nadu', price: 150000, imgSrc: '/img/p5.png' },
  { id: 5, title: 'Briana Blasko | Indigo Extraction 1, Tamil Nadu', price: 150000, imgSrc: '/img/p6.png' },
  { id: 6, title: 'Briana Blasko | Indigo Extraction 1, Tamil Nadu', price: 150000, imgSrc: '/img/p7.png' },
  { id: 7, title: 'Briana Blasko | Indigo Extraction 1, Tamil Nadu', price: 150000, imgSrc: '/img/p8.png' },
  { id: 8, title: 'Briana Blasko | Indigo Extraction 1, Tamil Nadu', price: 150000, imgSrc: '/img/p3.png' },
];

const PaintingId = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const painting = paintings.find((p) => p.id === parseInt(id));

  // State for cart and user authentication
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  // Function to add the current painting to the cart
  const handleAddToCart = () => {
    if (!isLoggedIn) {
      alert('Please login to add items to your cart');
      navigate('/login');
      return;
    }
    setCart([...cart, painting]);
    alert(`${painting.title} added to cart!`);
  };

  // Mock login function (replace with actual authentication)
  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setUsername(user.name);
  };

  if (!painting) {
    return (
      <>
        <Navbar user={{ name: username, isLoggedIn }} cartCount={cart.length} />
        <div className="not-found-container">
          <p>Painting not found.</p>
          <button onClick={() => navigate('/')} className="back-button">Return to Gallery</button>
        </div>
      </>
    );
  }

  // Get random paintings for the "You May Also Like" section
  const suggestedPaintings = paintings.filter((p) => p.id !== painting.id).slice(0, 4);

  return (
    <>
      <Navbar user={{ name: username, isLoggedIn }} cartCount={cart.length} onLogin={handleLogin} />
      
      <div className="painting-detail-container">
        {/* Back Button */}
        <button onClick={() => navigate(-1)} className="back-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Gallery
        </button>

        {/* Main Content */}
        <div className="painting-detail-content">
          <div className="painting-image-container">
            <img src={painting.imgSrc} alt={painting.title} className="painting-detail-image" />
          </div>
          
          <div className="painting-info">
            <h1 className="painting-title">{painting.title}</h1>
            <p className="painting-price">Rs. {painting.price.toLocaleString()}</p>
            
            <div className="painting-actions">
              <button onClick={handleAddToCart} className="add-to-cart-button">
                {isLoggedIn ? 'Add to Cart' : 'Login to Purchase'}
              </button>
              <button className="inquire-button">
                Inquire About This Piece
              </button>
            </div>
            
            <div className="painting-description">
              <h3>About This Artwork</h3>
              <p>
                This exquisite painting is part of our limited collection. Each piece comes with a 
                certificate of authenticity and can be shipped worldwide.
              </p>
              {isLoggedIn && (
                <div className="exclusive-member">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Exclusive member price applied</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Suggested Paintings */}
        <div className="suggested-paintings-section">
          <h2>You May Also Like</h2>
          <div className="suggested-paintings-grid">
            {suggestedPaintings.map((p) => (
              <div 
                key={p.id} 
                className="suggested-painting-card"
                onClick={() => navigate(`/paintings/${p.id}`)}
              >
                <img src={p.imgSrc} alt={p.title} className="suggested-painting-image" />
                <div className="suggested-painting-info">
                  <h4>{p.title}</h4>
                  <p>Rs. {p.price.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PaintingId;