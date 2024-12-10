import React, { useState, useEffect } from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  const showSlides = (n) => {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    let currentIndex = n;
    if (n > slides.length) currentIndex = 1;
    if (n < 1) currentIndex = slides.length;

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[currentIndex - 1].style.display = "block";
    dots[currentIndex - 1].className += " active";
  };

  const plusSlides = (n) => {
    setSlideIndex(slideIndex + n);
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  return (
    <div className="about-us-container">
      <h2>About Us</h2>

      {/* Slideshow Section */}
      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <img src="https://wallpapercave.com/wp/wp2186274.jpg" style={{ width: "100%" }} alt="Nature" />
          <div className="text">Caption Text</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">2 / 3</div>
          <img src="https://broadmuseum.msu.edu/wp-content/uploads/2022/09/IMG_2284-scaled.jpg" style={{ width: "100%" }} alt="Snow" />
          <div className="text">Caption Two</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img src="https://wallpapers.com/images/hd/museum-background-1dlkmof8lh8rje8i.jpg" style={{ width: "100%" }} alt="Mountains" />
          <div className="text">Caption Three</div>
        </div>

        <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
        <a className="next" onClick={() => plusSlides(1)}>❯</a>
      </div>

      <div style={{ textAlign: "center" }}>
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
      </div>

      {/* Gallery Information Section */}
      <h3>Vadehra Art Gallery</h3>
      <p>
        Established in 1987, Vadehra Art Gallery represents a roster of artists across four generations with a focus on pioneering South Asian art. The gallery celebrates art as a conduit for cultural exploration and intellectual value. It is a confidante to art history and a paladin to contemporary art, continually nurturing a vibrant and flourishing ecosystem centered around the artist and their work.
      </p>
      <p>
        Modern masters such as M.F. Husain, Ram Kumar, S.H. Raza, and Tyeb Mehta, along with the subsequent generation of modernists like Arpita Singh, A. Ramachandran, Nalini Malani, Gulammohammed Sheikh, and Rameshwar Broota, find a prominent spot in the gallery's extensive history. The gallery continues to spotlight exciting contemporary talent like Atul Dodiya, Shilpa Gupta, Anju Dodiya, N.S. Harsha, and Sunil Gupta, as well as rising stars such as Zaam Arif, Shrimanti Saha, and Shailesh B.R.
      </p>
      <p>
        Vadehra Art Gallery’s programming is extensive and includes carefully curated exhibitions at two locations in Delhi, alongside art events, engaging conversations, and an expanding digital presence, including virtual exhibitions and an online shop. The gallery participates in major international art fairs such as Frieze in London and New York and Art Basel in Basel and Hong Kong, presenting curated projects globally.
      </p>
      <p>
        In 1996, the gallery ventured into publishing to address the need for better documentation, critical writing, and high-quality reproductions of Indian art. Over the years, Vadehra Art Gallery has published several books and monographs, in collaboration with major publishing houses like Penguin and Prestel, in addition to producing hundreds of illustrated exhibition catalogues and literature on ongoing exhibitions and artist projects.
      </p>

      {/* Meet The Team Section */}
      <h2>Meet The Team</h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <img src="/path/to/team1.jpg" alt="Jane" style={{ width: '100%' }} />
            <div className="container">
              <h2>Jane Doe</h2>
              <p className="title">CEO & Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>example@example.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="/path/to/team2.jpg" alt="Mike" style={{ width: '100%' }} />
            <div className="container">
              <h2>Mike Ross</h2>
              <p className="title">Art Director</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>example@example.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="/path/to/team3.jpg" alt="John" style={{ width: '100%' }} />
            <div className="container">
              <h2>John Doe</h2>
              <p className="title">Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>example@example.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
