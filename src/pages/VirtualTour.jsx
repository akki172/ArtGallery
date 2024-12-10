import React from 'react';
import './VirtualTour.css'; // Ensure CSS is created with appropriate styles

const VirtualTour = () => {
  const openVirtualTour = () => {
    window.open("https://fruitsofthespirit.moyosaspaces.com/", "_blank");
  };

  return (
    <div className="virtual-tour-container">
      {/* Flex container for virtual tour details */}
      <div className="virtual-tour-row">
        {/* Image on the left side */}
        <div className="virtual-tour-image-container">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.quqCmBuFzAU7pUC7rdirmQHaDT&pid=Api&P=0&h=180"
            alt="Virtual Art Gallery"
            className="virtual-tour-image"
          />
        </div>

        {/* Text content and button on the right side */}
        <div className="virtual-tour-content">
          <h2>Explore Our Art Gallery Virtually</h2>
          <p>
            Immerse yourself in the world of art with our interactive virtual tour. Explore a wide range of beautiful artworks,
            from contemporary pieces to traditional masterpieces. Whether you're an art enthusiast or a casual observer,
            this virtual experience brings the gallery right to your fingertips. Start your tour today and discover the wonders
            of art like never before!
          </p>
          <button onClick={openVirtualTour} className="virtual-tour-button">
            Start Virtual Tour
          </button>
        </div>
      </div>

      {/* Horizontal scroll image gallery section */}
      <h2>Image Gallery With Horizontal Scroll</h2>
      <p>Use the horizontal scrollbar to see the other images.</p>
      <div className="scroll-container">
        <img src="https://tse1.mm.bing.net/th?id=OIP.pNU6vuRN_foMDxpz0x45JgHaFB&pid=Api&P=0&h=180" alt="Cinque Terre" width="600" height="400" />
        <img src="http://www.bssc.edu.au/wp-content/uploads/2020/10/Virtual-Exhibition.jpg" alt="Forest" width="600" height="400" />
        <img src="http://idialab.org/wp-content/uploads/2013/05/Avaya_ArtMuseum2.jpg" alt="Northern Lights" width="600" height="400" />
        <img src="https://tse4.mm.bing.net/th?id=OIP.TBix-d-hFraKSDijUhpmVwHaEY&pid=Api&P=0&h=180" alt="Mountains" width="600" height="400" />
      </div>
      <p>Note that the images are of the same size.</p>
    </div>
  );
};

export default VirtualTour;
