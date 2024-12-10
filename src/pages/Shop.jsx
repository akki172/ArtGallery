import React from 'react';
import { Link } from 'react-router-dom';
import './Shop.css';

const Shop = () => {
  return (
    <div className="shop-container">
      <h1>Our Collection</h1>
      <div className="card-grid">
        <Link to="/photographs" className="card">
          <img src="/img/im1.png" alt="Photographs" className="card-image" />
          <h2 className="card-title">Photographs</h2>
          <p className="card-description">Explore a selection of unique photographs.</p>
        </Link>

        <Link to="/editioned-artworks" className="card">
          <img src="/img/im2.png" alt="Editioned Artworks" className="card-image" />
          <h2 className="card-title">Editioned Artworks</h2>
          <p className="card-description">Discover limited edition artworks.</p>
        </Link>

        <Link to="/painting" className="card">
          <img src="/img/im3.png" alt="Prints" className="card-image" />
          <h2 className="card-title">Painting</h2>
          <p className="card-description">Shop our collection of prints.</p>
        </Link>
      </div>
    </div>
  );
};

export default Shop;
