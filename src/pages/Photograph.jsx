import React from 'react';
import { Link } from 'react-router-dom';
import './Photograph.css';

const photographs = [
  { id: 1, title: 'Akbar Padamsee | Untitled (Nude I)', price: 90000, imgSrc: 'https://iso.500px.com/wp-content/uploads/2014/09/2048-13-1500x1000.jpg' },
  { id: 2, title: 'Akbar Padamsee | Untitled (Nude III)', price: 90000, imgSrc: 'https://i.pinimg.com/originals/34/51/25/34512528e7f0fab0757632a707469eb0.jpg' },
  { id: 3, title: 'Briana Blasko | Indigo Extraction 1, Tamil Nadu', price: 150000, imgSrc: 'https://tse1.mm.bing.net/th?id=OIP.2D0BGcBk53TV2udQVmSoCQHaE8&pid=Api&P=0&h=180' },
  { id: 4, title: 'Briana Blasko | Indigo Extraction 1, Tamil Nadu', price: 150000, imgSrc: 'https://tse2.mm.bing.net/th?id=OIP.LsSFd8nrZTtGoYHGfVLGlAHaEo&pid=Api&P=0&h=180' },
  { id: 5, title: 'Briana Blasko | Indigo Extraction 1, Tamil Nadu', price: 150000, imgSrc: 'https://tse1.mm.bing.net/th?id=OIP.rk_xZiir6ZSTWteEeQqYFgHaDt&pid=Api&P=0&h=180' },
  { id: 6, title: 'Briana Blasko | Indigo Extraction 1, Tamil Nadu', price: 150000, imgSrc: 'https://academy-cdn.wedio.com/2022/05/tips-to-focus-in-photography-wedio.jpg' },
  { id: 7, title: 'Briana Blasko | Indigo Extraction 1, Tamil Nadu', price: 150000, imgSrc: 'https://static.photocrowd.com/upl/p4/cms.xnDCapQTaVQNzTbhFjJA-hd.jpeg' },
  { id: 8, title: 'Briana Blasko | Indigo Extraction 1, Tamil Nadu', price: 150000, imgSrc: 'https://digital-photography-school.com/wp-content/uploads/2022/10/photography-composition-rules-1.jpg' },
  { id: 9, title: 'Briana Blasko | Indigo Extraction 1, Tamil Nadu', price: 150000, imgSrc: 'https://cdn.naturettl.com/wp-content/uploads/2022/10/08200219/black-and-white-landscape-photography-23.jpg' },
  { id: 10, title: 'Briana Blasko | Indigo Extraction 1, Tamil Nadu', price: 150000, imgSrc: 'https://www.canoncreatorlab.ca/wp-content/uploads/2023/08/get-inspired-light-painting-1-scaled.jpg' },
  { id: 11, title: 'Briana Blasko | Indigo Extraction 1, Tamil Nadu', price: 150000, imgSrc: 'https://tse4.mm.bing.net/th?id=OIP._UFgOHUhwj1KWJVaYpC9RQHaFF&pid=Api&P=0&h=180' },
  { id: 12, title: 'Briana Blasko | Indigo Extraction 1, Tamil Nadu', price: 150000, imgSrc: 'https://photographylife.com/wp-content/uploads/2015/03/20130523-0169-308-Edit.jpg' },
]

const Photograph = () => {
  return (
    <div className="photograph-container">
      <h1>Photograph Collection</h1>
      <div className="photograph-grid">
        {photographs.map((photo) => (
          <Link to={`/photographs/${photo.id}`} key={photo.id} className="photograph-card">
            <img src={photo.imgSrc} alt={photo.title} className="photograph-image" />
            <h2 className="photograph-title">{photo.title}</h2>
            <p className="photograph-price">Rs. {photo.price.toLocaleString()}</p>
            <p className="photograph-description">{photo.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Photograph;
