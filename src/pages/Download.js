import React from "react";
import { FaStar } from "react-icons/fa"; // Import star icons
import appImage from "../images/my_watt_web.png"; // Replace with your app image path

const Download = () => {
  const reviews = [
    {
      name: "Franklin",
      rating: 5,
      comment: "This app is amazing! It has completely transformed how I manage my daily tasks.",
    },
    {
      name: "Trevor",
      rating: 4,
      comment: "Great app, very intuitive and easy to use. Highly recommended!",
    },
    {
      name: "Michael",
      rating: 5,
      comment: "I love the design and features. It's a must-have for productivity.",
    },
    {
      name: "Lester",
      rating: 4,
      comment: "Solid app with great functionality. Could use a few more customization options.",
    },
    {
      name: "Hermione",
      rating: 5,
      comment: "Absolutely fantastic! It helps me stay organized and efficient."
    },
    {
      name: "Harry",
      rating: 5,
      comment: "This app is brilliant! It has made my life so much easier.",
    },
  ];

  return (
    <div className="download" style={{ maxWidth: '100%', overflowX: 'hidden' }}>
      <div className="download-content">
        {/* App Image on the Left */}
        <div className="app-image-container">
          <img src={appImage} alt="App Preview" className="app-image-download" />
        </div>

        {/* Download Section on the Right */}
        <div className="download-section">
          <h2>Get ready for the future of sustainable technologies with MyWatt</h2>
          <a
            href="https://github.com/tp2042/F29SO-project"
            className="download-link"
          >
            Download Now
          </a>
        </div>
      </div>

      {/* Pricing Plans Section */}
      <div className="pricing-plans">
        <div className="plan free-plan">
          <h3>Free Plan</h3>
          <p>Perfect for individuals and small households looking for essential energy management.</p>
          <p><strong>AED 0/month</strong></p>
          <ul>
            <li>Basic energy tracking - Monitor energy usage for up to 3 rooms and 6 devices.</li>
            <li>Home management – Add and manage 1 house only.</li>
            <li>Device control – Remotely turn devices on/off.</li>
          </ul>
        </div>
        <div className="plan premium-plan">
          <div className="premium-plan-inner">
            <h3>— Premium Plan —</h3>
            <p>Ideal for large households or users seeking advanced control and detailed insights into energy usage.</p>
            <p><strong>AED 19/month or AED 189/year</strong></p>
            <p className="savings">(save AED 39 with the yearly plan)</p>
            <ul>
              <li>Advanced Energy Tracking: Track energy usage for an unlimited number of devices and rooms.</li>
              <li>Home Management: Manage an unlimited number of houses.</li>
              <li>Automate Devices & Set Schedules.</li>
              <li>Detailed Energy Reports.</li>
              <li>Mood Pages.</li>
              <li>Earn points for energy savings and completing challenges.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="how-it-works">
        <h3>How it works?</h3>
        <ol>
          <li>Download the app - Sign up as a Home Manager or Home User.</li>
          <li>Add your rooms and devices by navigating to the rooms menu down below.</li>
          <li>Schedule when appliances turn on/off to maximize savings.</li>
          <li>Save Money & Live Smarter – Reduce your energy bill with automated efficiency!</li>
        </ol>
      </div>

      {/* Reviews Section */}
      <div className="reviews-section">
        <h3>What Our Users Are Saying</h3>
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-rating">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < review.rating ? "star filled" : "star"}
                  />
                ))}
              </div>
              <p className="review-comment">"{review.comment}"</p>
              <p className="review-author">- {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Download;
