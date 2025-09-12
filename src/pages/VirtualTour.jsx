import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './VirtualTour.css';

const VirtualTour = () => {
  const navigate = useNavigate();

  const openVirtualTour = () => {
    window.open("https://fruitsofthespirit.moyosaspaces.com/", "_blank");
  };

  const galleryImages = [
    { src: "https://tse1.mm.bing.net/th?id=OIP.pNU6vuRN_foMDxpz0x45JgHaFB&pid=Api&P=0&h=180", alt: "Art Exhibition" },
    { src: "http://www.bssc.edu.au/wp-content/uploads/2020/10/Virtual-Exhibition.jpg", alt: "Virtual Gallery" },
    { src: "http://idialab.org/wp-content/uploads/2013/05/Avaya_ArtMuseum2.jpg", alt: "Museum Interior" },
    { src: "https://tse4.mm.bing.net/th?id=OIP.TBix-d-hFraKSDijUhpmVwHaEY&pid=Api&P=0&h=180", alt: "Art Display" },
    { src: "https://www.digitalartsonline.co.uk/cmsdata/slideshow/3672115/virtual-exhibition.jpg", alt: "Digital Art" },
    { src: "https://museum-next.com/wp-content/uploads/2020/04/virtual-exhibitions.jpg", alt: "Virtual Museum" },
    { src: "https://www.artdex.com/wp-content/uploads/2020/04/Virtual-Exhibitions.jpg", alt: "Contemporary Art" }
  ];

  return (
    <div className="virtual-tour-page">
      <Navbar />
      
      <main className="virtual-tour-container">
        {/* Hero Section */}
        <section className="virtual-tour-hero">
          <div className="hero-content">
            <h1>Immerse Yourself in Art</h1>
            <p className="hero-subtitle">Experience our gallery from anywhere in the world</p>
            <button onClick={openVirtualTour} className="cta-button">
              Start Virtual Tour
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h13M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1578926375605-eaf7559b1458?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Virtual Art Gallery Experience"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>360° Views</h3>
            <p>Explore every angle of our exhibitions with immersive 360-degree technology.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🖼️</div>
            <h3>High Resolution</h3>
            <p>View artworks in stunning detail with our high-resolution imaging.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Zoom In</h3>
            <p>Examine brushstrokes and textures up close like never before.</p>
          </div>
        </section>

        {/* Gallery Preview Section */}
        <section className="gallery-preview">
          <div className="section-header">
            <h2>Gallery Highlights</h2>
            <p>Swipe to explore featured exhibitions</p>
          </div>
          <div className="horizontal-scroll-gallery">
            {galleryImages.map((image, index) => (
              <div key={index} className="gallery-item">
                <img src={image.src} alt={image.alt} />
                <div className="image-overlay">
                  <button className="view-details-btn" onClick={() => navigate('/exhibition-details')}>
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="testimonial-section">
          <blockquote>
            "The virtual tour was so realistic, I felt like I was actually walking through the gallery. 
            The ability to zoom in on artworks revealed details I would have missed in person."
          </blockquote>
          <div className="testimonial-author">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah J." />
            <div>
              <p className="author-name">Sarah J.</p>
              <p className="author-title">Art Collector</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default VirtualTour;