import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './EditionArtwork.css';

const EditionArtwork = ({ isLoggedIn, username, onLogout }) => {
  const navigate = useNavigate();

  const editionArtworks = [
    { id: 1, title: 'Akbar Padamsee | Untitled (Nude I)', price: 90000, imgSrc: 'https://i.pinimg.com/736x/2e/06/62/2e066257f4400b06379579105ee2bca7.jpg', artist: 'Akbar Padamsee', year: 1960, medium: 'Oil on canvas' },
    { id: 2, title: 'Akbar Padamsee | Untitled (Nude III)', price: 90000, imgSrc: 'https://www.artcollectorz.com/assets/managed/images/cache/ACAAEAAAUMA7IAIAAAAABIYB6QA7777774AAAAAA6QAVIAQA.jpg', artist: 'Akbar Padamsee', year: 1962, medium: 'Oil on canvas' },
    { id: 3, title: 'Briana Blasko | Indigo Extraction 1', price: 150000, imgSrc: 'https://www.artcollectorz.com/assets/managed/images/cache/ADPEEAAA6QA7IAIAAAAAB5AB6QA7777774AAAAAALABFQAQA.jpg', artist: 'Briana Blasko', year: 2018, medium: 'Photography' },
    { id: 4, title: 'Briana Blasko | Indigo Extraction 2', price: 150000, imgSrc: 'https://www.artcollectorz.com/assets/managed/images/cache/ACLWUAAAOMA7IAIAAAAAA4YB6QA7777774AAAAAAXUAVQAQA.jpg', artist: 'Briana Blasko', year: 2018, medium: 'Photography' },
    { id: 5, title: 'Briana Blasko | Indigo Extraction 3', price: 150000, imgSrc: 'https://tse4.mm.bing.net/th?id=OIP.idL-tghXAQEZTuHsVFY68AHaHb&pid=Api&P=0&h=180', artist: 'Briana Blasko', year: 2019, medium: 'Photography' },
    { id: 6, title: 'Briana Blasko | Indigo Extraction 4', price: 150000, imgSrc: 'http://www.artcollectorz.com/assets/managed/images/cache/ABWBGAAA6QAQGAIAAAAAB5ABAMA7777774AAAAAALABDOAIA.jpg', artist: 'Briana Blasko', year: 2019, medium: 'Photography' },
    { id: 7, title: 'Briana Blasko | Indigo Extraction 5', price: 150000, imgSrc: 'https://tse3.mm.bing.net/th?id=OIP.9P5vrZ-vmJ-Sa72iDip4BgHaE-&pid=Api&P=0&h=180', artist: 'Briana Blasko', year: 2020, medium: 'Photography' },
    { id: 8, title: 'Briana Blasko | Indigo Extraction 6', price: 150000, imgSrc: 'https://www.artcollectorz.com/assets/managed/images/cache/ABJQCAAA3EA7IAIAAAAABWIB6QA7777774AAAAAADQBDWAQA.jpg', artist: 'Briana Blasko', year: 2020, medium: 'Photography' },
    { id: 9, title: 'Briana Blasko | Landscape Study', price: 150000, imgSrc: 'https://cdn.naturettl.com/wp-content/uploads/2022/10/08200219/black-and-white-landscape-photography-23.jpg', artist: 'Briana Blasko', year: 2021, medium: 'Photography' },
    { id: 10, title: 'Briana Blasko | Urban Geometry', price: 150000, imgSrc: 'https://tse3.mm.bing.net/th?id=OIP.xq7O3ekoXYjFUOt9QfKpqQHaGQ&pid=Api&P=0&h=180', artist: 'Briana Blasko', year: 2021, medium: 'Photography' },
    { id: 11, title: 'Briana Blasko | Light Patterns', price: 150000, imgSrc: 'https://tse4.mm.bing.net/th?id=OIP._UFgOHUhwj1KWJVaYpC9RQHaFF&pid=Api&P=0&h=180', artist: 'Briana Blasko', year: 2022, medium: 'Photography' },
    { id: 12, title: 'Briana Blasko | Nature Abstracts', price: 150000, imgSrc: 'https://photographylife.com/wp-content/uploads/2015/03/20130523-0169-308-Edit.jpg', artist: 'Briana Blasko', year: 2022, medium: 'Photography' },
  ];

  const handleAddToCart = (artworkId, e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }
    // Add to cart logic here
    console.log(`Added artwork ${artworkId} to cart`);
  };

  const handleQuickView = (artworkId, e) => {
    e.preventDefault();
    navigate(`/editionartworks/${artworkId}`);
  };

  return (
    <div className="edition-artwork-page">
      <Navbar isLoggedIn={isLoggedIn} username={username} onLogout={onLogout} />
      
      <main className="edition-artwork-container">
        <div className="collection-header">
          <h1>Edition Artwork Collection</h1>
          <p className="collection-description">
            Limited edition prints and artworks from renowned contemporary artists. 
            Each piece is part of a numbered series, certified by the artist.
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
              <option value="Print">Print</option>
            </select>
            <select className="filter-select">
              <option value="">Price Range</option>
              <option value="0-50000">Under ₹50,000</option>
              <option value="50000-100000">₹50,000 - ₹100,000</option>
              <option value="100000+">Over ₹100,000</option>
            </select>
          </div>
        </div>

        <div className="edition-artwork-grid">
          {editionArtworks.map((artwork) => (
            <Link 
              to={`/editionartworks/${artwork.id}`} 
              key={artwork.id} 
              className="edition-artwork-card"
            >
              <div className="artwork-image-container">
                <img 
                  src={artwork.imgSrc} 
                  alt={artwork.title} 
                  className="edition-artwork-image" 
                />
                <div className="artwork-overlay">
                  <button 
                    className="quick-view-btn"
                    onClick={(e) => handleQuickView(artwork.id, e)}
                  >
                    Quick View
                  </button>
                  <button 
                    className="add-to-cart-btn"
                    onClick={(e) => handleAddToCart(artwork.id, e)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="artwork-details">
                <h2 className="edition-artwork-title">{artwork.title}</h2>
                <p className="artwork-artist">{artwork.artist} • {artwork.year}</p>
                <p className="artwork-medium">{artwork.medium}</p>
                <p className="edition-artwork-price">₹{artwork.price.toLocaleString()}</p>
                {isLoggedIn && (
                  <div className="artwork-actions">
                    <button 
                      className="wishlist-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        console.log(`Added artwork ${artwork.id} to wishlist`);
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default EditionArtwork;