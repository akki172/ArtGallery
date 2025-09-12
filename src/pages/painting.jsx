import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './Painting.css';

const Paintings = ({ isLoggedIn, username, onLogout }) => {
  const navigate = useNavigate();

  const paintings = [
    { id: 1, title: 'Akbar Padamsee | Untitled (Nude I)', price: 90000, imgSrc: '/img/p1.png', artist: 'Akbar Padamsee', year: 1960, medium: 'Oil on canvas', description: 'A classic piece exploring the human form.' },
    { id: 2, title: 'Akbar Padamsee | Untitled (Nude III)', price: 90000, imgSrc: '/img/p2.png', artist: 'Akbar Padamsee', year: 1962, medium: 'Oil on canvas', description: 'Rich in texture and emotion.' },
    { id: 3, title: 'Briana Blasko | Indigo Extraction 1', price: 150000, imgSrc: '/img/p4.png', artist: 'Briana Blasko', year: 2018, medium: 'Photography', description: 'Capturing the beauty of indigo extraction.' },
    { id: 4, title: 'Briana Blasko | Indigo Extraction 2', price: 150000, imgSrc: '/img/p3.png', artist: 'Briana Blasko', year: 2018, medium: 'Photography', description: 'Traditional indigo techniques.' },
    { id: 5, title: 'Briana Blasko | Indigo Extraction 3', price: 150000, imgSrc: '/img/p5.png', artist: 'Briana Blasko', year: 2019, medium: 'Photography', description: 'Essence of Tamil Nadu.' },
    { id: 6, title: 'Briana Blasko | Indigo Extraction 4', price: 150000, imgSrc: '/img/p6.png', artist: 'Briana Blasko', year: 2019, medium: 'Photography', description: 'Beautiful blend of colors.' },
    { id: 7, title: 'Briana Blasko | Indigo Extraction 5', price: 150000, imgSrc: '/img/p7.png', artist: 'Briana Blasko', year: 2020, medium: 'Photography', description: 'Remarkable series piece.' },
    { id: 8, title: 'Briana Blasko | Indigo Extraction 6', price: 150000, imgSrc: '/img/im3.png', artist: 'Briana Blasko', year: 2020, medium: 'Photography', description: 'Artful process depiction.' },
  ];

  const handleAddToCart = (paintingId, e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }
    console.log(`Added painting ${paintingId} to cart`);
  };

  const handleQuickView = (paintingId, e) => {
    e.preventDefault();
    navigate(`/paintings/${paintingId}`);
  };

  return (
    <div className="paintings-page">
      <Navbar isLoggedIn={isLoggedIn} username={username} onLogout={onLogout} />
      
      <main className="paintings-container">
        <div className="collection-header">
          <h1>Paintings Collection</h1>
          <p className="collection-description">
            Explore our curated selection of modern and contemporary paintings from renowned artists.
          </p>
          <div className="collection-filters">
            <select className="filter-select">
              <option value="">All Artists</option>
              <option value="Akbar Padamsee">Akbar Padamsee</option>
              <option value="Briana Blasko">Briana Blasko</option>
            </select>
            <select className="filter-select">
              <option value="">All Mediums</option>
              <option value="Painting">Painting</option>
              <option value="Photography">Photography</option>
            </select>
            <select className="filter-select">
              <option value="">Price Range</option>
              <option value="0-50000">Under ₹50,000</option>
              <option value="50000-100000">₹50,000 - ₹100,000</option>
              <option value="100000+">Over ₹100,000</option>
            </select>
          </div>
        </div>

        <div className="paintings-grid">
          {paintings.map((painting) => (
            <Link 
              to={`/paintings/${painting.id}`} 
              key={painting.id} 
              className="painting-card"
            >
              <div className="painting-image-container">
                <img 
                  src={painting.imgSrc} 
                  alt={painting.title} 
                  className="painting-image" 
                />
                <div className="painting-overlay">
                  <button 
                    className="quick-view-btn"
                    onClick={(e) => handleQuickView(painting.id, e)}
                  >
                    Quick View
                  </button>
                  <button 
                    className="add-to-cart-btn"
                    onClick={(e) => handleAddToCart(painting.id, e)}
                  >
                    {isLoggedIn ? 'Add to Cart' : 'Login to Purchase'}
                  </button>
                </div>
              </div>
              <div className="painting-details">
                <h2 className="painting-title">{painting.title}</h2>
                <p className="painting-artist">{painting.artist} • {painting.year}</p>
                <p className="painting-medium">{painting.medium}</p>
                <p className="painting-price">₹{painting.price.toLocaleString()}</p>
                {isLoggedIn && (
                  <button 
                    className="wishlist-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      console.log(`Added painting ${painting.id} to wishlist`);
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    Add to Wishlist
                  </button>
                )}
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Paintings;