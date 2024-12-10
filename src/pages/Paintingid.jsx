import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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

  const [cart, setCart] = useState([]);

  // Function to add the current painting to the cart
  const handleAddToCart = () => {
    setCart([...cart, painting]);
    alert(`${painting.title} added to cart!`);
  };

  if (!painting) {
    return <p>Painting not found.</p>;
  }

  // Get random paintings for the "You May Also Like" section (excluding the current painting)
  const suggestedPaintings = paintings.filter((p) => p.id !== painting.id).slice(0, 4);

  return (
    <div className="painting-detail">
      {/* Back Button */}
      <button onClick={() => navigate(-1)} className="back-button">Back</button>

      {/* Image and Content Section */}
      <img src={painting.imgSrc} alt={painting.title} className="painting-detail-image" />

      <div className="painting-detail-content">
        <h1>{painting.title}</h1>
        <p>Price: Rs. {painting.price.toLocaleString()}</p>
        <p>{painting.description}</p>

        {/* Add to Cart Button */}
        <button onClick={handleAddToCart} className="add-to-cart-button">Add to Cart</button>

        {/* Suggested Paintings */}
        <div className="suggested-paintings">
          <h2>You May Also Like</h2>
          <div className="suggested-paintings-list">
            {suggestedPaintings.map((p) => (
              <div key={p.id} className="suggested-painting" onClick={() => navigate(`/paintings/${p.id}`)}>
                <img src={p.imgSrc} alt={p.title} className="suggested-painting-image" />
                <p>{p.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaintingId;

