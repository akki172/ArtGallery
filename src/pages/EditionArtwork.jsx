import React from 'react';
import { Link } from 'react-router-dom';
import './EditionArtwork.css';

const editionArtworks = [
  { id: 1, title: 'Akbar Padamsee | Untitled (Nude I)', price: 90000, imgSrc: 'https://i.pinimg.com/736x/2e/06/62/2e066257f4400b06379579105ee2bca7.jpg' },
  { id: 2, title: 'Akbar Padamsee | Untitled (Nude III)', price: 90000, imgSrc: 'https://www.artcollectorz.com/assets/managed/images/cache/ACAAEAAAUMA7IAIAAAAABIYB6QA7777774AAAAAA6QAVIAQA.jpg' },
  { id: 3, title: 'Briana Blasko | Indigo Extraction 1, Tamil Nadu', price: 150000, imgSrc: 'https://www.artcollectorz.com/assets/managed/images/cache/ADPEEAAA6QA7IAIAAAAAB5AB6QA7777774AAAAAALABFQAQA.jpg' },
  { id: 4, title: 'Briana Blasko | Indigo Extraction 1, Tamil Nadu', price: 150000, imgSrc: 'https://www.artcollectorz.com/assets/managed/images/cache/ACLWUAAAOMA7IAIAAAAAA4YB6QA7777774AAAAAAXUAVQAQA.jpg' },
  { id: 5, title: 'Briana Blasko | Indigo Extraction 1, Tamil Nadu', price: 150000, imgSrc: 'https://tse4.mm.bing.net/th?id=OIP.idL-tghXAQEZTuHsVFY68AHaHb&pid=Api&P=0&h=180' },
  { id: 6, title: 'Briana Blasko | Indigo Extraction 1, Tamil Nadu', price: 150000, imgSrc: 'http://www.artcollectorz.com/assets/managed/images/cache/ABWBGAAA6QAQGAIAAAAAB5ABAMA7777774AAAAAALABDOAIA.jpg' },
  { id: 7, title: 'Briana Blasko | Indigo Extraction 1, Tamil Nadu', price: 150000, imgSrc: 'https://tse3.mm.bing.net/th?id=OIP.9P5vrZ-vmJ-Sa72iDip4BgHaE-&pid=Api&P=0&h=180' },
  { id: 8, title: 'Briana Blasko | Indigo Extraction 1, Tamil Nadu', price: 150000, imgSrc: 'https://www.artcollectorz.com/assets/managed/images/cache/ABJQCAAA3EA7IAIAAAAABWIB6QA7777774AAAAAADQBDWAQA.jpg' },
  { id: 9, title: 'Briana Blasko | Indigo Extraction 1, Tamil Nadu', price: 150000, imgSrc: 'https://cdn.naturettl.com/wp-content/uploads/2022/10/08200219/black-and-white-landscape-photography-23.jpg' },
  { id: 10, title: 'Briana Blasko | Indigo Extraction 1, Tamil Nadu', price: 150000, imgSrc: 'https://tse3.mm.bing.net/th?id=OIP.xq7O3ekoXYjFUOt9QfKpqQHaGQ&pid=Api&P=0&h=180' },
  { id: 11, title: 'Briana Blasko | Indigo Extraction 1, Tamil Nadu', price: 150000, imgSrc: 'https://tse4.mm.bing.net/th?id=OIP._UFgOHUhwj1KWJVaYpC9RQHaFF&pid=Api&P=0&h=180' },
  { id: 12, title: 'Briana Blasko | Indigo Extraction 1, Tamil Nadu', price: 150000, imgSrc: 'https://photographylife.com/wp-content/uploads/2015/03/20130523-0169-308-Edit.jpg' },
];

const EditionArtwork = () => {
  return (
    <div className="edition-artwork-container">
      <h1>Edition Artwork Collection</h1>
      <div className="edition-artwork-grid">
        {editionArtworks.map((artwork) => (
          <Link to={`/editionartworks/${artwork.id}`} key={artwork.id} className="edition-artwork-card">
            <img src={artwork.imgSrc} alt={artwork.title} className="edition-artwork-image" />
            <h2 className="edition-artwork-title">{artwork.title}</h2>
            <p className="edition-artwork-price">Rs. {artwork.price.toLocaleString()}</p>
            <p className="edition-artwork-description">{artwork.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EditionArtwork;
