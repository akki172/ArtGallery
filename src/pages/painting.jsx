import React from 'react';
import { Link } from 'react-router-dom';
import './Painting.css';

const paintings = [
  { id: 1, title: 'Akbar Padamsee | Untitled (Nude I)', price: 90000, imgSrc: '/img/p1.png', description: 'A classic piece by Akbar Padamsee exploring the human form.' },
  { id: 2, title: 'Akbar Padamsee | Untitled (Nude III)', price: 90000, imgSrc: '/img/p2.png', description: 'Another iconic artwork by Akbar Padamsee, rich in texture and emotion.' },
  { id: 3, title: 'Briana Blasko | Indigo Extraction 1, Tamil Nadu', price: 150000, imgSrc: '/img/p4.png', description: 'Capturing the beauty of indigo extraction in Tamil Nadu.' },
  { id: 4, title: 'Briana Blasko | Indigo Extraction 1, Tamil Nadu', price: 150000, imgSrc: '/img/p3.png', description: 'A deep look into traditional indigo extraction techniques.' },
  { id: 5, title: 'Briana Blasko | Indigo Extraction 1, Tamil Nadu', price: 150000, imgSrc: '/img/p5.png', description: 'A fine artwork showcasing the essence of Tamil Nadu.' },
  { id: 6, title: 'Briana Blasko | Indigo Extraction 1, Tamil Nadu', price: 150000, imgSrc: '/img/p6.png', description: 'A beautiful blend of colors representing traditional practices.' },
  { id: 7, title: 'Briana Blasko | Indigo Extraction 1, Tamil Nadu', price: 150000, imgSrc: '/img/p7.png', description: 'Another remarkable piece from the Indigo Extraction series.' },
  { id: 8, title: 'Briana Blasko | Indigo Extraction 1, Tamil Nadu', price: 150000, imgSrc: '/img/im3.png', description: 'Artfully depicting the indigo extraction process in Tamil Nadu.' },
  // Add more items as needed
];

const Paintings = () => {
  return (
    <div className="paintings-container">
      <h1>Paintings Collection</h1>
      <div className="paintings-grid">
        {paintings.map((painting) => (
          <Link to={`/paintings/${painting.id}`} key={painting.id} className="painting-card">
            <img src={painting.imgSrc} alt={painting.title} className="painting-image" />
            <h2 className="painting-title">{painting.title}</h2>
            <p className="painting-price">Rs. {painting.price.toLocaleString()}</p>
            <p className="painting-description">{painting.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Paintings;
