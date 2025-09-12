import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Sample image URLs (replace with your actual image paths)
  const images = {
    hero: 'https://images.unsplash.com/photo-1560419015-7c427e8ae5ba',
    about: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968',
    art1: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5',
    art2: 'https://images.unsplash.com/photo-1578301978018-3005759f48f7',
    art3: 'https://images.unsplash.com/photo-1578926375605-eaf7559b1458',
    artist1: 'https://images.unsplash.com/photo-1554151228-14d9def656e4',
    artist2: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    artist3: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e',
    artist4: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your message, ${contactForm.name}! We'll get back to you soon.`);
    setContactForm({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="art-gallery">
      <header className="gallery-header">
        <div className="logo">ModernArt</div>
        <nav className="main-nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#artists">Artists</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        {/* Hero Section */}
        <section id="home" className="hero-section">
          <div className="hero-content">
            <h1>Modern Art Gallery</h1>
            <p>Discover groundbreaking contemporary artworks from talented artists worldwide.</p>
            <a href="/gallery" className="cta-button">Explore Collection</a>
          </div>
          <div className="featured-art">
            <div className="art-highlight large">
              <img src={images.art1} alt="Featured artwork" />
            </div>
            <div className="art-highlight small-top">
              <img src={images.art2} alt="Featured artwork" />
            </div>
            <div className="art-highlight small-bottom">
              <img src={images.art3} alt="Featured artwork" />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section">
          <div className="about-content">
            <div className="about-text">
              <h2>About Our Gallery</h2>
              <p>Founded in 2010, our gallery has been at the forefront of contemporary art, showcasing emerging and established artists from around the world.</p>
              <div className="about-grid">
                <div className="about-card">
                  <h3>Our Mission</h3>
                  <p>To bridge the gap between artists and art lovers, creating a space for dialogue and appreciation of modern art.</p>
                </div>
                <div className="about-card">
                  <h3>Exhibitions</h3>
                  <p>We host 12 major exhibitions annually, each carefully curated to present groundbreaking contemporary works.</p>
                </div>
                <div className="about-card">
                  <h3>Community</h3>
                  <p>Our gallery is more than a space - it's a community of artists, collectors, and art enthusiasts.</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img src={images.about} alt="Gallery interior" />
            </div>
          </div>
        </section>

        {/* Shop Section */}
        <section id="shop" className="shop-section">
  <h2>Artwork Shop</h2>
  <div className="art-grid">
    {[1, 2, 3, 4, 5, 6].map(item => (
      <div key={item} className="art-item">
        <img 
          src={images[`art${item % 3 + 1}`]} 
          alt={`Artwork ${item}`} 
          className="art-image"
        />
        <div className="art-details">
          <h3>Artwork Title {item}</h3>
          <p>Artist Name</p>
          <p>$1,200 - $3,500</p>
          <a href="/loginsin" className="view-details-button">View Details</a>
        </div>
      </div>
    ))}
  </div>
</section>

        {/* Artists Section */}
        <section id="artists" className="artist-section">
          <h2>Featured Artists</h2>
          <div className="artist-profiles">
            {[
              { name: 'Emma Stone', img: 'artist1' },
              { name: 'James Wilson', img: 'artist2' },
              { name: 'Sophia Chen', img: 'artist3' },
              { name: 'Michael Rodriguez', img: 'artist4' }
            ].map(artist => (
              <div key={artist.name} className="artist-card">
                <img 
                  src={images[artist.img]} 
                  alt={artist.name} 
                  className="artist-avatar"
                />
                <h3>{artist.name}</h3>
                <p>Contemporary {artist.name.split(' ')[0].endsWith('a') ? 'Painter' : 'Sculptor'}</p>
                <p>Based in {artist.name.length > 10 ? 'New York' : 'London'}</p>
                <a href="/artists"  className="artist-button">View Portfolio</a>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <h2>Contact Us</h2>
          <div className="contact-container">
            <form onSubmit={handleContactSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={contactForm.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={contactForm.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
            <div className="contact-info">
              <h3>Visit Us</h3>
              <p>123 Gallery Street<br />Art District, NY 10001</p>
              <h3>Hours</h3>
              <p>Tuesday - Saturday: 10am - 6pm<br />Sunday: 12pm - 5pm<br />Monday: Closed</p>
              <h3>Contact</h3>
              <p>info@moderngallery.com<br />(555) 123-4567</p>
            </div>
          </div>
        </section>
      </main>

      {showScrollButton && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          ↑
        </button>
      )}

      <footer className="gallery-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ModernArt Gallery</h3>
            <p>Celebrating contemporary art since 2010.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#shop">Shop</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Connect</h3>
            <div className="social-icons">
              <button className="social-icon">Instagram</button>
              <button className="social-icon">Twitter</button>
              <button className="social-icon">Facebook</button>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} ModernArt Gallery. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;