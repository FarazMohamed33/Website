import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa"; // Add FaEnvelope import

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 5000);
  };

  return (
    <div className="contact-page" style={{ maxWidth: '100%', overflowX: 'hidden' }}>
      {showPopup && (
        <div className="popup-overlay">
          <div className="success-popup">
            <p>Message delivered! We will answer as soon as possible.</p>
          </div>
        </div>
      )}
      
      <h2>Contact Us</h2>
      <p>We'd love to hear from you! Reach out to us for any questions or feedback.</p>

      {/* Contact Form */}
      <div className="contact-form">
        <h3>Send Us a Message</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>


      {/* Contact Information */}
      <div className="contact-info">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <p>Email: mywattapp@gmail.com</p>
        </div>
      </div>

      {/* Heriot-Watt University Map */}
      <div className="map-container">
        <h3>Find Us</h3>
        <iframe
          title="Heriot-Watt University Dubai Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.989740339283!2d55.159645975957766!3d25.102208635540517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f638e7ac4f2d3%3A0xec919842ff503d0b!2sHeriot-Watt%20University!5e0!3m2!1sen!2sae!4v1741203986916!5m2!1sen!2sae"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;