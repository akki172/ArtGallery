import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './Photograph.css';

const photographs = [
  { 
    id: 1, 
    title: 'Akbar Padamsee | Untitled (Nude I)', 
    artist: 'Akbar Padamsee',
    artwork: 'Untitled (Nude I)',
    price: 90000, 
    imgSrc: 'https://iso.500px.com/wp-content/uploads/2014/09/2048-13-1500x1000.jpg',
    description: 'A seminal work from Padamsee\'s nude series, showcasing his mastery of form and light.',
    year: 1960,
    medium: 'Gelatin silver print',
    dimensions: '40 × 30 cm',
    edition: 'Edition of 15'
  },
  { 
    id: 2, 
    title: 'Akbar Padamsee | Untitled (Nude III)', 
    artist: 'Akbar Padamsee',
    artwork: 'Untitled (Nude III)',
    price: 90000, 
    imgSrc: 'https://i.pinimg.com/originals/34/51/25/34512528e7f0fab0757632a707469eb0.jpg',
    description: 'An exploration of abstraction and the human form.',
    year: 1960,
    medium: 'Gelatin silver print',
    dimensions: '40 × 30 cm',
    edition: 'Edition of 15'
  },
  { 
    id: 3,
    title: 'Briana Blasko | Indigo Extraction 1, Tamil Nadu',
    artist: 'Briana Blasko',
    artwork: 'Indigo Extraction 1, Tamil Nadu',
    price: 150000,
    imgSrc: 'https://tse1.mm.bing.net/th?id=OIP.2D0BGcBk53TV2udQVmSoCQHaE8&pid=Api&P=0&h=180',
    description: 'Captured in rural Tamil Nadu, this image documents the traditional dyeing process.',
    year: 2010,
    medium: 'Gelatin silver print',
    dimensions: '40 × 30 cm',
    edition: 'Edition of 15'
  },
  { 
    id: 4,
    title: 'Briana Blasko | Indigo Extraction 1, Tamil Nadu',
    artist: 'Briana Blasko',
    artwork: 'Indigo Extraction 1, Tamil Nadu',
    price: 150000,
    imgSrc: 'https://tse2.mm.bing.net/th?id=OIP.LsSFd8nrZTtGoYHGfVLGlAHaEo&pid=Api&P=0&h=180',
    description: 'Part of a powerful series capturing natural dyeing methods.',
    year: 2010,
    medium: 'Gelatin silver print',
    dimensions: '40 × 30 cm',
    edition: 'Edition of 15'
  },
  {
    id: 5,
    title: 'Briana Blasko | Indigo Extraction 1, Tamil Nadu',
    artist: 'Briana Blasko',
    artwork: 'Indigo Extraction 1, Tamil Nadu',
    price: 150000,
    imgSrc: 'https://tse1.mm.bing.net/th?id=OIP.rk_xZiir6ZSTWteEeQqYFgHaDt&pid=Api&P=0&h=180',
    description: 'Part of a powerful series capturing natural dyeing methods.',
    year: 2010,
    medium: 'Gelatin silver print',
    dimensions: '40 × 30 cm',
    edition: 'Edition of 15'
  },
  {
    id: 6,
    title: 'Briana Blasko | Indigo Extraction 1, Tamil Nadu',
    artist: 'Briana Blasko',
    artwork: 'Indigo Extraction 1, Tamil Nadu',
    price: 150000,
    imgSrc: 'https://academy-cdn.wedio.com/2022/05/tips-to-focus-in-photography-wedio.jpg',
    description: 'Captures the stillness and concentration in artisanal practices.',
    year: 2010,
    medium: 'Gelatin silver print',
    dimensions: '40 × 30 cm',
    edition: 'Edition of 15'
  },
  {
    id: 7,
    title: 'Briana Blasko | Indigo Extraction 1, Tamil Nadu',
    artist: 'Briana Blasko',
    artwork: 'Indigo Extraction 1, Tamil Nadu',
    price: 150000,
    imgSrc: 'https://static.photocrowd.com/upl/p4/cms.xnDCapQTaVQNzTbhFjJA-hd.jpeg',
    description: 'Movement and light merge in this compelling documentary photograph.',
    year: 2010,
    medium: 'Gelatin silver print',
    dimensions: '40 × 30 cm',
    edition: 'Edition of 15'
  },
  {
    id: 8,
    title: 'Briana Blasko | Indigo Extraction 1, Tamil Nadu',
    artist: 'Briana Blasko',
    artwork: 'Indigo Extraction 1, Tamil Nadu',
    price: 150000,
    imgSrc: 'https://digital-photography-school.com/wp-content/uploads/2022/10/photography-composition-rules-1.jpg',
    description: 'A thoughtful composition that emphasizes balance and texture.',
    year: 2010,
    medium: 'Gelatin silver print',
    dimensions: '40 × 30 cm',
    edition: 'Edition of 15'
  },
  {
    id: 9,
    title: 'Briana Blasko | Indigo Extraction 1, Tamil Nadu',
    artist: 'Briana Blasko',
    artwork: 'Indigo Extraction 1, Tamil Nadu',
    price: 150000,
    imgSrc: 'https://cdn.naturettl.com/wp-content/uploads/2022/10/08200219/black-and-white-landscape-photography-23.jpg',
    description: 'A serene depiction of tradition and landscape.',
    year: 2010,
    medium: 'Gelatin silver print',
    dimensions: '40 × 30 cm',
    edition: 'Edition of 15'
  },
  {
    id: 10,
    title: 'Briana Blasko | Indigo Extraction 1, Tamil Nadu',
    artist: 'Briana Blasko',
    artwork: 'Indigo Extraction 1, Tamil Nadu',
    price: 150000,
    imgSrc: 'https://www.canoncreatorlab.ca/wp-content/uploads/2023/08/get-inspired-light-painting-1-scaled.jpg',
    description: 'Light painting techniques blended with cultural storytelling.',
    year: 2010,
    medium: 'Gelatin silver print',
    dimensions: '40 × 30 cm',
    edition: 'Edition of 15'
  },
  {
    id: 11,
    title: 'Briana Blasko | Indigo Extraction 1, Tamil Nadu',
    artist: 'Briana Blasko',
    artwork: 'Indigo Extraction 1, Tamil Nadu',
    price: 150000,
    imgSrc: 'https://tse4.mm.bing.net/th?id=OIP._UFgOHUhwj1KWJVaYpC9RQHaFF&pid=Api&P=0&h=180',
    description: 'This frame delicately explores craft and nature.',
    year: 2010,
    medium: 'Gelatin silver print',
    dimensions: '40 × 30 cm',
    edition: 'Edition of 15'
  },
  {
    id: 12,
    title: 'Briana Blasko | Indigo Extraction 1, Tamil Nadu',
    artist: 'Briana Blasko',
    artwork: 'Indigo Extraction 1, Tamil Nadu',
    price: 150000,
    imgSrc: 'https://photographylife.com/wp-content/uploads/2015/03/20130523-0169-308-Edit.jpg',
    description: 'A textured and emotional tribute to indigenous practices.',
    year: 2010,
    medium: 'Gelatin silver print',
    dimensions: '40 × 30 cm',
    edition: 'Edition of 15'
  }
];


const Photograph = ({ isLoggedIn, username, onLogout }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Handle single photograph view
  if (id) {
    const photograph = photographs.find(photo => photo.id === parseInt(id));

    const handleAddToCart = () => {
      setCart([...cart, photograph]);
      alert(`${photograph.title} added to cart!`);
    };

    const handleAddToWishlist = () => {
      setWishlist([...wishlist, photograph]);
      alert(`${photograph.title} added to wishlist!`);
    };

    if (!photograph) {
      return (
        <>
          <Navbar isLoggedIn={isLoggedIn} username={username} onLogout={onLogout} cartCount={cart.length} />
          <div className="not-found">
            <h2>Photograph not found</h2>
            <button onClick={() => navigate('/photographs')} className="back-button">
              Back to Gallery
            </button>
          </div>
        </>
      );
    }

    return (
      <>
        <Navbar isLoggedIn={isLoggedIn} username={username} onLogout={onLogout} cartCount={cart.length} />
        <div className="photograph-detail-container">
          <button onClick={() => navigate('/photographs')} className="back-button">
            ← Back to Gallery
          </button>
          
          <div className="detail-grid">
            <div className="image-section">
              <img src={photograph.imgSrc} alt={photograph.title} className="main-image" />
            </div>
            
            <div className="info-section">
              <h1 className="artist-name">{photograph.artist}</h1>
              <h2 className="artwork-title">{photograph.artwork}</h2>
              
              <div className="price-section">
                <span className="price">₹{photograph.price.toLocaleString()}</span>
              </div>
              
              <div className="action-buttons">
                <button onClick={handleAddToCart} className="add-to-cart">
                  Add to Cart
                </button>
                <button onClick={handleAddToWishlist} className="wishlist-button">
                  ♡ Add to Wishlist
                </button>
              </div>
              
              <p className="artwork-description">{photograph.description}</p>
              
              <div className="artwork-details">
                <h3>Details</h3>
                <div className="detail-row">
                  <span className="detail-label">Medium:</span>
                  <span>{photograph.medium}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Dimensions:</span>
                  <span>{photograph.dimensions}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Year:</span>
                  <span>{photograph.year}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Edition:</span>
                  <span>{photograph.edition}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="related-works">
            <h3>Related Works</h3>
            <div className="related-grid">
              {photographs
                .filter(photo => photo.id !== photograph.id && photo.artist === photograph.artist)
                .slice(0, 3)
                .map(photo => (
                  <div key={photo.id} className="related-card" onClick={() => navigate(`/photographs/${photo.id}`)}>
                    <img src={photo.imgSrc} alt={photo.title} />
                    <div className="related-info">
                      <h4>{photo.artwork}</h4>
                      <p>₹{photo.price.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </>
    );
  }

  // Handle gallery view
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} username={username} onLogout={onLogout} cartCount={cart.length} />
      <div className="photograph-gallery-container">
        <div className="gallery-header">
          <h1>Photograph Collection</h1>
          <div className="sort-options">
            <select>
              <option>Sort by</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Recently Added</option>
            </select>
          </div>
        </div>
        
        <div className="photograph-grid">
          {photographs.map(photo => (
            <div key={photo.id} className="photo-card">
              <Link to={`/photographs/${photo.id}`} className="photo-link">
                <div className="image-container">
                  <img src={photo.imgSrc} alt={photo.title} />
                  <div className="photo-overlay">
                    <button className="quick-view">Quick View</button>
                  </div>
                </div>
                <div className="photo-info">
                  <h3>{photo.artist}</h3>
                  <h4>{photo.artwork}</h4>
                  <p className="price">₹{photo.price.toLocaleString()}</p>
                </div>
              </Link>
              <div className="card-actions">
                <button 
                  onClick={() => {
                    setCart([...cart, photo]);
                    alert(`${photo.title} added to cart!`);
                  }} 
                  className="add-to-cart"
                >
                  Add to Cart
                </button>
                <button 
                  onClick={() => {
                    setWishlist([...wishlist, photo]);
                    alert(`${photo.title} added to wishlist!`);
                  }} 
                  className="wishlist-btn"
                >
                  ♡
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Photograph;