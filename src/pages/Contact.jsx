import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact</h2>
      <p>To make an enquiry, join our mailing list or to stay in touch, please fill in the form below:</p>
      
      <div className="contact-content">
        <form className="enquiry-form">
          <label>
            Name *
            <input type="text" name="name" required />
          </label>
          <label>
            Email *
            <input type="email" name="email" required />
          </label>
          <label>
            Phone
            <input type="tel" name="phone" />
          </label>
          <label>
            Message
            <textarea name="message" rows="4"></textarea>
          </label>
          <div className="newsletter">
            <label>Receive newsletters *</label>
            <div>
              <label>
                <input type="radio" name="newsletter" value="yes" /> Yes
              </label>
              <label>
                <input type="radio" name="newsletter" value="no" /> No
              </label>
            </div>
          </div>
          <button type="submit">Send Enquiry</button>
        </form>

        <div className="map-container">
          {/* Embed Google Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.639136490028!2d-122.0850916846817!3d37.42199957982795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24f5c40dbf1%3A0x3c0f08fa9a24b5de!2sGoogleplex!5e0!3m2!1sen!2sus!4v1610739120810!5m2!1sen!2sus"
            width="400"
            height="300"
            allowFullScreen=""
            loading="lazy"
            title="location-map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
