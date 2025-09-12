import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentFilter, setCurrentFilter] = useState('all');

  const images = [
    { id: 1, src: "https://tse2.mm.bing.net/th?id=OIP.-M0gJh1X-RZzyOCBlBdIlAHaE9&pid=Api&P=0&h=180", category: "nature" },
    { id: 2, src: "https://external-preview.redd.it/67VV7CXR0bZc5KpoZItUL19r-8Thj1WSQTP_LAQ63Fs.jpg?width=960&crop=smart&auto=webp&s=15ceeaf27735e3844720a2e1d8c6e86b47fd554c", category: "abstract" },
    { id: 3, src: "https://tse2.mm.bing.net/th?id=OIP.Ow9L-KT0o7239DiR8e2QewHaEY&pid=Api&P=0&h=180", category: "nature" },
    { id: 4, src: "https://observer.com/wp-content/uploads/sites/2/2020/03/Screen-Shot-2020-03-13-at-2.12.14-PM.png", category: "modern" },
    { id: 5, src: "https://tse3.mm.bing.net/th?id=OIP.FMseVC1QtetfpluFgdAEiwHaEI&pid=Api&P=0&h=180", category: "abstract" },
    { id: 6, src: "https://i.pinimg.com/originals/4b/34/c7/4b34c7d52d74045c3ae9d9ede807ca4f.jpg", category: "modern" },
    { id: 7, src: "https://c4.wallpaperflare.com/wallpaper/918/282/517/art-artwork-gallery-museum-wallpaper-preview.jpg", category: "classic" },
    { id: 8, src: "https://tse4.mm.bing.net/th?id=OIP.HlaM6oPvibnEt4IZaRYl9wHaEK&pid=Api&P=0&h=180", category: "classic" },
    { id: 9, src: "https://tse1.mm.bing.net/th?id=OIP.F54-n1xkA2dFKO7fd4x1zgHaGP&pid=Api&P=0&h=180", category: "nature" },
    { id: 10, src: "https://tse4.mm.bing.net/th?id=OIP.6gY5n0vhk8NATlbTA7x6vgHaFl&pid=Api&P=0&h=180", category: "abstract" },
    { id: 11, src: "https://tse1.mm.bing.net/th?id=OIP.dljFfxcGRoF1kHtiuB9w-QHaFj&pid=Api&P=0&h=180", category: "nature" },
    { id: 12, src: "https://artfiles.alphacoders.com/834/thumb-1920-83420.jpg", category: "modern" },
    { id: 13, src: "https://tse1.mm.bing.net/th?id=OIP.rsLJnL0ZgAK9qI-Ac4DEzQHaHY&pid=Api&P=0&h=180", category: "abstract" },
    { id: 14, src: "https://visualwilderness.com/wp-content/uploads/2016/03/Ballintoy_802.jpg", category: "nature" },
    { id: 15, src: "https://gridfiti.com/wp-content/uploads/2018/04/Gridfiti_Blog_FairyLightsPhotography_0_Header.jpg", category: "modern" },
    { id: 16, src: "https://fujilove.com/wp-content/uploads/2017/06/DSCF0362-Bearbeitet.jpg", category: "nature" },
    { id: 17, src: "https://www.adorama.com/alc/wp-content/uploads/2022/07/mirror-photography-triple-reflection-e1659453298173.jpg", category: "abstract" },
    { id: 18, src: "http://printmeposter.com/blog/wp-content/uploads/2016/01/bigstock-Little-Island-With-Catholic-Ch-102434441.jpg", category: "nature" },
    { id: 19, src: "https://i.pinimg.com/originals/6c/19/a3/6c19a39a7a39eac8c49e370b6eb1d7d1.jpg", category: "classic" },
    { id: 20, src: "https://i.pinimg.com/originals/ee/12/e4/ee12e44c9caef703a0753bfdcf0ec0e7.jpg", category: "modern" },
    { id: 21, src: "https://i.pinimg.com/originals/f0/47/82/f04782d418903bbdd30f233cfec01f7b.jpg", category: "abstract" },
    { id: 22, src: "https://i.pinimg.com/originals/9c/68/12/9c68123a791a439929c44102e1bf2e1b.jpg", category: "classic" },
    { id: 23, src: "https://tse4.mm.bing.net/th?id=OIP.0FwxAlGQP8TwLFhRoSAu3AHaFC&pid=Api&P=0&h=180", category: "nature" },
    { id: 24, src: "https://i.pinimg.com/736x/cd/a1/b0/cda1b0256232e66dd7016f86d4564371.jpg", category: "modern" },
    { id: 25, src: "https://tse4.mm.bing.net/th?id=OIP.f7djUYY6-6lBcgJ2FTKHJAHaHa&pid=Api&P=0&h=180", category: "abstract" },
    { id: 26, src: "https://cdn.openart.ai/stable_diffusion/724997dbc06f6d0991d356dfd95e0a8e5017ab70_2000x2000.webp", category: "modern" }
  ];

  const filteredImages = currentFilter === 'all' 
    ? images 
    : images.filter(img => img.category === currentFilter);

  const openModal = (img) => {
    setSelectedImage(img);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <div className="gallery-container">
      {/* Modern Header */}
      <header className="gallery-header">
        <h1 className="gallery-title">Contemporary Art Collection</h1>
        <p className="gallery-subtitle">Explore our curated selection of modern artworks</p>
        
        {/* Filter Controls */}
        <div className="filter-controls">
          <button 
            className={`filter-btn ${currentFilter === 'all' ? 'active' : ''}`}
            onClick={() => setCurrentFilter('all')}
          >
            All Works
          </button>
          <button 
            className={`filter-btn ${currentFilter === 'modern' ? 'active' : ''}`}
            onClick={() => setCurrentFilter('modern')}
          >
            Modern
          </button>
          <button 
            className={`filter-btn ${currentFilter === 'abstract' ? 'active' : ''}`}
            onClick={() => setCurrentFilter('abstract')}
          >
            Abstract
          </button>
          <button 
            className={`filter-btn ${currentFilter === 'nature' ? 'active' : ''}`}
            onClick={() => setCurrentFilter('nature')}
          >
            Nature
          </button>
          <button 
            className={`filter-btn ${currentFilter === 'classic' ? 'active' : ''}`}
            onClick={() => setCurrentFilter('classic')}
          >
            Classic
          </button>
        </div>
      </header>

      {/* Masonry Grid Layout */}
      <div className="masonry-grid">
        {filteredImages.map((img) => (
          <div 
            key={img.id} 
            className="masonry-item"
            onClick={() => openModal(img)}
          >
            <img 
              src={img.src} 
              alt={`Artwork ${img.id}`} 
              className="gallery-image"
              loading="lazy"
            />
            <div className="image-overlay">
              <span className="image-category">{img.category}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>×</button>
            <img 
              src={selectedImage.src} 
              alt={`Enlarged view of artwork ${selectedImage.id}`}
              className="modal-image"
            />
            <div className="image-info">
              <h3>Artwork #{selectedImage.id}</h3>
              <p>Category: {selectedImage.category}</p>
              <button className="download-btn">Download</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;