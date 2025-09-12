import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './PhotographDetail.css';

const photographs = [
  { id: 1, title: 'Akbar Padamsee | Untitled (Nude I)', price: 90000, imgSrc: 'https://iso.500px.com/wp-content/uploads/2014/09/2048-13-1500x1000.jpg', description: 'A rare early nude study by the modernist master, showing his signature approach to form and light.' },
  { id: 2, title: 'Akbar Padamsee | Untitled (Nude III)', price: 90000, imgSrc: 'https://i.pinimg.com/originals/34/51/25/34512528e7f0fab0757632a707469eb0.jpg', description: 'Part of Padamsee\'s celebrated nude series, showcasing his mastery of tonal values.' },
  { id: 3, title: 'Briana Blasko | Indigo Extraction 1', price: 150000, imgSrc: 'https://tse1.mm.bing.net/th?id=OIP.2D0BGcBk53TV2udQVmSoCQHaE8&pid=Api&P=0&h=180', description: 'Documentary photograph capturing traditional indigo dye extraction in Tamil Nadu.' },
  // ... keep other photograph objects
];

const PhotographDetail = ({ isLoggedIn, username, onLogout }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const photograph = photographs.find((photo) => photo.id === parseInt(id));

  const [cart, setCart] = useState([]);

  const handleAddToCart = () => {
    setCart([...cart, photograph]);
    alert(`${photograph.title} added to cart!`);
  };

  if (!photograph) {
    return (
      <>
        <Navbar isLoggedIn={isLoggedIn} username={username} onLogout={onLogout} />
        <div className="not-found">Photograph not found.</div>
      </>
    );
  }

  const suggestedPhotos = photographs.filter((photo) => photo.id !== photograph.id).slice(0, 4);

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} username={username} onLogout={onLogout} cartCount={cart.length} />
      
      <div className="photograph-detail-container">
        <div className="photograph-detail-content">
          {/* Back Button */}
          <button onClick={() => navigate(-1)} className="back-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Gallery
          </button>

          {/* Main Content */}
          <div className="detail-grid">
            <div className="image-section">
              <img src={photograph.imgSrc} alt={photograph.title} className="main-image" />
            </div>
            
            <div className="info-section">
              <h1 className="artwork-title">{photograph.title}</h1>
              <p className="artist-name">By {photograph.title.split('|')[0].trim()}</p>
              
              <div className="price-section">
                <span className="price">₹{photograph.price.toLocaleString()}</span>
                {photograph.originalPrice && (
                  <span className="original-price">₹{photograph.originalPrice.toLocaleString()}</span>
                )}
              </div>
              
              <p className="artwork-description">{photograph.description}</p>
              
              <div className="action-buttons">
                <button onClick={handleAddToCart} className="add-to-cart">
                  Add to Cart
                </button>
                <button className="inquire-button">
                  Contact for Purchase
                </button>
              </div>
              
              <div className="artwork-details">
                <h3>Details</h3>
                <p><strong>Medium:</strong> Archival pigment print</p>
                <p><strong>Dimensions:</strong> 24 × 36 inches</p>
                <p><strong>Year:</strong> 2023</p>
                <p><strong>Edition:</strong> Limited edition of 15</p>
              </div>
            </div>
          </div>

          {/* Suggested Works */}
          <div className="suggested-works">
            <h2>You May Also Like</h2>
            <div className="suggested-grid">
              {suggestedPhotos.map((photo) => (
                <div 
                  key={photo.id} 
                  className="suggested-card"
                  onClick={() => navigate(`/photographs/${photo.id}`)}
                >
                  <img src={photo.imgSrc} alt={photo.title} />
                  <div className="card-info">
                    <h3>{photo.title.split('|')[1].trim()}</h3>
                    <p>{photo.title.split('|')[0].trim()}</p>
                    <p className="price">₹{photo.price.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotographDetail;