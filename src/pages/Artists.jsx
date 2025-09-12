import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './Artists.css';

const Artists = () => {
  const navigate = useNavigate();

  const artists = [
    {
      id: 1,
      name: "Jane Doe",
      title: "Abstract Painter",
      bio: "Pioneer of contemporary abstract expressionism with exhibitions worldwide.",
      email: "jane@example.com",
      imgSrc: "https://i.pinimg.com/originals/84/b6/ee/84b6ee48d0954e7f0b0c998c24e807b7.jpg"
    },
    {
      id: 2,
      name: "Mike Ross",
      title: "Sculptor",
      bio: "Creates monumental steel sculptures exploring human-nature relationships.",
      email: "mike@example.com",
      imgSrc: "https://i.pinimg.com/originals/82/3d/15/823d156c0722af54cbf9b00259073be8.jpg"
    },
    {
      id: 3,
      name: "Lisa Chen",
      title: "Digital Artist",
      bio: "Blends traditional techniques with cutting-edge digital media.",
      email: "lisa@example.com",
      imgSrc: "https://i.pinimg.com/originals/f1/26/ca/f126ca0a9660845835551e28b4c8537b.jpg"
    },
    {
      id: 4,
      name: "Alice Smith",
      title: "Oil Painter",
      bio: "Master of hyperrealistic portraiture with emotional depth.",
      email: "alice@example.com",
      imgSrc: "https://i.pinimg.com/originals/28/99/77/289977a6f0ae4a902d6f0efc66bcca0c.jpg"
    },
    {
      id: 5,
      name: "Tom Brown",
      title: "Installation Artist",
      bio: "Creates immersive environments exploring urban landscapes.",
      email: "tom@example.com",
      imgSrc: "https://i.pinimg.com/236x/6d/f8/3e/6df83ebb1d6e3bab410ee0f22a927862.jpg"
    },
    {
      id: 6,
      name: "Sara Lee",
      title: "Photographer",
      bio: "Documentary photographer focusing on cultural preservation.",
      email: "sara@example.com",
      imgSrc: "https://i.pinimg.com/736x/8e/51/cd/8e51cdbaf0fd1e3f375e2c8ee511bf36.jpg"
    },
    {
      id: 7,
      name: "Emma Green",
      title: "Textile Artist",
      bio: "Revolutionizing fabric art with sustainable materials.",
      email: "emma@example.com",
      imgSrc: "https://i.pinimg.com/736x/4d/2e/1a/4d2e1abb877a920c2ae4103c43da029d.jpg"
    },
    {
      id: 8,
      name: "David Clark",
      title: "Ceramicist",
      bio: "Modern takes on ancient pottery techniques.",
      email: "david@example.com",
      imgSrc: "https://i.pinimg.com/736x/ad/0e/c8/ad0ec8fe76073546e4bc187e36d50843.jpg"
    },
    {
      id: 9,
      name: "Rachel White",
      title: "Mixed Media",
      bio: "Combines found objects with painting to comment on consumerism.",
      email: "rachel@example.com",
      imgSrc: "https://tse2.mm.bing.net/th?id=OIP.xqNd3jA3kQHhrgAg_TEkpAHaHO&pid=Api&P=0&h=180"
    },
    {
      id: 10,
      name: "Liam Carter",
      title: "Glass Artist",
      bio: "Creates luminous architectural glass installations.",
      email: "liam@example.com",
      imgSrc: "https://i.pinimg.com/736x/55/4e/fd/554efdefe2969245d76019173b5ffc44.jpg"
    }
  ];

  return (
    <div className="artists-page">
      <Navbar />
      
      <main className="artists-container">
        <section className="artists-header">
          <h1>Our Artists</h1>
          <p className="subtitle">
            Vadehra Art Gallery represents a diverse group of South Asian artists spanning several generations.
            From modern masters to contemporary voices, we celebrate the richness and diversity of the art scene.
          </p>
          <div className="search-filter">
            <input 
              type="text" 
              placeholder="Search artists..." 
              className="search-input"
            />
            <select className="filter-select">
              <option value="">All Disciplines</option>
              <option value="painting">Painting</option>
              <option value="sculpture">Sculpture</option>
              <option value="photography">Photography</option>
              <option value="digital">Digital Art</option>
            </select>
          </div>
        </section>

        <section className="artists-grid">
          {artists.map(artist => (
            <div key={artist.id} className="artist-card">
              <div className="artist-image-container">
                <img 
                  src={artist.imgSrc} 
                  alt={artist.name} 
                  className="artist-image"
                />
                <div className="social-links">
                  <button className="social-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </button>
                  <button className="social-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </button>
                  <button className="social-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="artist-info">
                <h2>{artist.name}</h2>
                <p className="artist-title">{artist.title}</p>
                <p className="artist-bio">{artist.bio}</p>
                <div className="artist-actions">
                  <button 
                    className="view-works-btn"
                    onClick={() => navigate(`/artist/${artist.id}`)}
                  >
                    View Works
                  </button>
                  <a href={`mailto:${artist.email}`} className="contact-btn">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="newsletter-section">
          <h2>Stay Updated With Our Artists</h2>
          <p>Subscribe to receive news about exhibitions, new works, and artist features</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Your email address" />
            <button type="submit">Subscribe</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Artists;