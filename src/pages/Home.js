import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../images/pic.png";
import image2 from "../images/download.JPG";
import img1 from "../images/1.png";
import graphImg from "../images/2.png";
import roomsImg from "../images/3.png";
import reportsImg from "../images/4.png";
import housesImg from "../images/5.png";

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <img src={image1} alt="Efficiency Meets Innovation" className="hero-image" />
        <div className="hero-text">
          <h1>Efficiency Meets Innovation</h1>
          <p>Control your home’s energy use and save effortlessly with My Watt.</p>
        </div>
      </div>

      <div className="info-box">
        <h3>Did you know that up to 30% of household energy is wasted due to inefficient usage?</h3>
        <p>
          Many homes leave lights on, overuse heating, and forget to turn off devices, leading to higher energy bills and unnecessary waste. Our smart energy solutions help you save up to 30% on your energy bills by optimizing usage and reducing waste.
        </p>
      </div>

      <h2>Smart Energy Savings Made Simple</h2>
      <div className="feature">
        <div className="feature-text">
          <p>
            Energy waste is a silent expense in every home. My Watt gives you real-time energy tracking and automation tools to cut costs, optimize energy use, and reduce your carbon footprint – all in one easy-to-use app.
          </p>
        </div>
        <img src={img1} alt="Smart Home Control" className="feature-image" />
      </div>

      <div className="features-list">
        <div className="feature-item">
          <img src={graphImg} alt="Energy Graphs" className="feature-item-image" />
          <div className="feature-item-text">
            <h3>View Real-time Energy Graphs:</h3>
            <p>
              Access detailed energy consumption graphs to visualize usage patterns over time. Analyze trends, optimize energy efficiency, and make informed decisions about energy management.
            </p>
          </div>
        </div>

        <div className="feature-item">
          <div className="feature-item-text">
            <h3>Add Unlimited Rooms and Devices:</h3>
            <p>
              Easily add and manage an unlimited number of rooms and devices. Track Real-Time Usage for every room and device, providing comprehensive insights into your energy consumption.
            </p>
          </div>
          <img src={roomsImg} alt="Rooms and Devices" className="feature-item-image" />
        </div>

        <div className="feature-item">
          <img src={reportsImg} alt="Daily Reports" className="feature-item-image" />
          <div className="feature-item-text">
            <h3>View & Download Daily Summary Reports:</h3>
            <p>
              Receive detailed daily energy usage reports, summarizing your consumption and insights. Download the reports to analyze your energy habits and make data-driven decisions.
            </p>
          </div>
        </div>

        <div className="feature-item">
          <div className="feature-item-text">
            <h3>Manage Multiple Houses</h3>
            <p>
              Home Managers can efficiently add and manage an unlimited number of houses, perfect for large families or property owners. House Users can join and switch between multiple houses, providing flexibility in shared living or multi-household setups.
            </p>
          </div>
          <img src={housesImg} alt="Manage Multiple Houses" className="feature-item-image" />
        </div>
      </div>
    </div>
  );
};

export default Home;