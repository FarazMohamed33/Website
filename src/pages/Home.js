import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaEye, FaInfoCircle, FaRocket } from "react-icons/fa"; // Import icons
import { motion, AnimatePresence } from "framer-motion"; // Import animations
import image1 from "../images/dragon_ball_z_battle_of_gods_screenshot3.jpg";
import image2 from "../images/dragon-ball-z-dragonball-san-goku-wallpaper.jpg";
import image3 from "../images/dragon-ball-son-goku-blue-power.jpg";

const Home = () => {
  const [activeSections, setActiveSections] = useState([]);

  const toggleSection = (section) => {
    setActiveSections((prev) =>
      prev.includes(section)
        ? prev.filter((item) => item !== section) // Remove section if already active
        : [...prev, section] // Add section if not active
    );
  };

  return (
    <div>
      <h2>Welcome to Watt</h2>
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div>
          <img src={image1} alt="Feature 1" />
          <p className="legend">This is Image 1: Manage your home effortlessly.</p>
        </div>
        <div>
          <img src={image2} alt="Feature 2" />
          <p className="legend">This is Image 2: Monitor energy consumption.</p>
        </div>
        <div>
          <img src={image3} alt="Feature 3" />
          <p className="legend">This is Image 3: Customize settings easily.</p>
        </div>
      </Carousel>

      {/* Interactive Icons Section */}
      <div className="icon-grid">
        {/* Vision Section */}
        <div className="icon-card" onClick={() => toggleSection("vision")}>
          <FaEye className="icon" />
          <AnimatePresence>
            {activeSections.includes("vision") && (
              <motion.p
                className="description"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                Our vision is to create a world where technology empowers everyone to achieve their full potential.
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* About Us Section */}
        <div className="icon-card" onClick={() => toggleSection("about")}>
          <FaInfoCircle className="icon" />
          <AnimatePresence>
            {activeSections.includes("about") && (
              <motion.p
                className="description"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                We are a passionate team dedicated to building innovative solutions that make a difference.
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Mission Section */}
        <div className="icon-card" onClick={() => toggleSection("mission")}>
          <FaRocket className="icon" />
          <AnimatePresence>
            {activeSections.includes("mission") && (
              <motion.p
                className="description"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                Our mission is to deliver cutting-edge products that inspire and transform the way people live and work.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Home;