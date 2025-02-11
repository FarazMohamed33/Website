import React from "react";
import { FaStar } from "react-icons/fa"; // Import star icons

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
  ];

  return (
    <div className="download">
      <h2>Download the App</h2>
      <p>Get started by downloading the app from your preferred platform.</p>
      <a
        href="https://example.com/download"
        className="download-link"
      >
        Download Here
      </a>

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