import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './PhotographDetail.css';

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

];

const PhotographDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const photograph = photographs.find((photo) => photo.id === parseInt(id));

  const [cart, setCart] = useState([]);

  // Function to add the current photograph to the cart
  const handleAddToCart = () => {
    setCart([...cart, photograph]);
    alert(`${photograph.title} added to cart!`);
  };

  if (!photograph) {
    return <p>Photograph not found.</p>;
  }

  // Get random photographs for the "You May Also Like" section (excluding the current photograph)
  const suggestedPhotos = photographs.filter((photo) => photo.id !== photograph.id).slice(0, 4);

  return (
    <div className="photograph-detail">
      {/* Back Button */}
      <button onClick={() => navigate(-1)} className="back-button">Back</button>

      {/* Image and Content Section */}
      <img src={photograph.imgSrc} alt={photograph.title} className="photograph-detail-image" />

      <div className="photograph-detail-content">
        <h1>{photograph.title}</h1>
        <p>Price: Rs. {photograph.price.toLocaleString()}</p>
        <p>{photograph.description}</p>

        {/* Add to Cart Button */}
        <button onClick={handleAddToCart} className="add-to-cart-button">Add to Cart</button>

        {/* Suggested Photos */}
        <div className="suggested-photos">
          <h2>You May Also Like</h2>
          <div className="suggested-photos-list">
            {suggestedPhotos.map((photo) => (
              <div key={photo.id} className="suggested-photo" onClick={() => navigate(`/photographs/${photo.id}`)}>
                <img src={photo.imgSrc} alt={photo.title} className="suggested-photo-image" />
                <p>{photo.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotographDetail;
