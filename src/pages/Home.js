import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../images/pic.png";
///import image2 from "../images/download.JPG";
import img1 from "../images/my_watt_web1.png";
import graphImg from "../images/my_watt_web2.png";
import roomsImg from "../images/my_watt_web3.png";
import reportsImg from "../images/my_watt_web4.png";
import housesImg from "../images/my_watt_web5.png";

const Home = () => {
  const [hoverSide, setHoverSide] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          if (entry.target.classList.contains('feature-item')) {
            entry.target.classList.add('animate');
          }
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll, .feature-item').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e, element) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const side = x < rect.width / 2 ? 'left' : 'right';
    setHoverSide(side);
  };

  const handleMouseLeave = () => {
    setHoverSide(null);
  };

  return (
    <div className="home" style={{ maxWidth: '100%', overflowX: 'hidden', padding: 0 }}>
      <div className="hero-section">
        <img src={image1} alt="Efficiency Meets Innovation" className="hero-image" />
        <div className="hero-text">
          <h1>Efficiency Meets Innovation</h1>
          <p>Control your home’s energy use and save effortlessly with My Watt.</p>
        </div>
      </div>

      <div className="info-box animate-on-scroll">
        <h3>Did you know that up to 30% of household energy is wasted due to inefficient usage?</h3>
        <p>
          Many homes leave lights on, overuse heating, and forget to turn off devices, leading to higher energy bills and unnecessary waste. Our smart energy solutions help you save up to 30% on your energy bills by optimizing usage and reducing waste.
        </p>
      </div>

      <div className="energy-savings-section">
        <h2>Smart Energy Savings Made Simple</h2>
        <div className="energy-savings-content">
          <div className="energy-savings-text">
            <p>
              Energy waste is a silent expense in every home. My Watt gives you real-time energy tracking 
              and automation tools to cut costs, optimize energy use, and reduce your carbon footprint – 
              all in one easy-to-use app.
            </p>
          </div>
          <div className="energy-savings-image">
            <img src={img1} alt="Smart Home Control" />
          </div>
        </div>
      </div>

      <div className="features-list">
        <div className="feature-item">
          <div 
            className={`feature-item-image-container ${hoverSide ? `hover-${hoverSide}` : ''}`}
            onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={graphImg} alt="Energy Graphs" className="feature-item-image" />
          </div>
          <div className="feature-item-text">
            <h3>View Real-time Energy Graphs:</h3>
            <p>
              Access detailed energy consumption graphs to visualize usage patterns over time. Analyze trends, optimize energy efficiency, and make informed decisions about energy management.
            </p>
          </div>
        </div>

        <div className="feature-item">
          <div 
            className={`feature-item-image-container ${hoverSide ? `hover-${hoverSide}` : ''}`}
            onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={roomsImg} alt="Rooms and Devices" className="feature-item-image" />
          </div>
          <div className="feature-item-text">
            <h3>Add Unlimited Rooms and Devices:</h3>
            <p>
              Easily add and manage an unlimited number of rooms and devices. Track Real-Time Usage for every room and device, providing comprehensive insights into your energy consumption.
            </p>
          </div>
        </div>

        <div className="feature-item">
          <div 
            className={`feature-item-image-container ${hoverSide ? `hover-${hoverSide}` : ''}`}
            onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={reportsImg} alt="Daily Reports" className="feature-item-image" />
          </div>
          <div className="feature-item-text">
            <h3>View & Download Daily Summary Reports:</h3>
            <p>
              Receive detailed daily energy usage reports, summarizing your consumption and insights. Download the reports to analyze your energy habits and make data-driven decisions.
            </p>
          </div>
        </div>

        <div className="feature-item">
          <div 
            className={`feature-item-image-container ${hoverSide ? `hover-${hoverSide}` : ''}`}
            onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={housesImg} alt="Manage Multiple Houses" className="feature-item-image" />
          </div>
          <div className="feature-item-text">
            <h3>Manage Multiple Houses</h3>
            <p>
              Home Managers can efficiently add and manage an unlimited number of houses, perfect for large families or property owners. House Users can join and switch between multiple houses, providing flexibility in shared living or multi-household setups.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;