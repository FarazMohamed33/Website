import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../images/dragon_ball_z_battle_of_gods_screenshot3.jpg";
import image2 from "../images/dragon-ball-z-dragonball-san-goku-wallpaper.jpg";
import image3 from "../images/dragon-ball-son-goku-blue-power.jpg";
import img1 from "../images/super saiyan 3.jpg"; // Add your feature images
import img2 from "../images/super saiyan 3.jpg"; // Add your feature images
import img3 from "../images/super saiyan 3.jpg"; // Add your new feature image

const Home = () => {
  return (
    <div className="home">
      <h2>Why choose us?</h2>

      {/* Carousel Section */}
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div>
          <img src={image1} alt="Feature 1" />
          <p className="legend">Our tech company is dedicated to staying at the forefront of the industry</p>
        </div>
        <div>
          <img src={image2} alt="Feature 2" />
          <p className="legend">We prioritize user experience in every application we create</p>
        </div>
        <div>
          <img src={image3} alt="Feature 3" />
          <p className="legend">We understand the importance of communication and technologies in the modern world</p>
        </div>
      </Carousel>

      {/* Big Title: OUR PROJECTS */}
      <h2 className="projects-title">OUR PROJECTS</h2>

      {/* Feature Section 1 */}
      <div className="feature-section">
        <h3 className="feature-title">ChatPad</h3>
        <div className="feature-content">
          <img src={img1} alt="Revolutionize Your Home" className="feature-image" />
          <p className="feature-caption">
            Introducing our virtual collaborative brainstorming platform developed to redefine your interactive experience. More than just a tool, ChatPad is a powerhouse of collaborative features essential for teaching, presenting, and daily office tasks.
          </p>
        </div>
      </div>

      {/* Feature Section 2 */}
      <div className="feature-section">
        <h3 className="feature-title">Mastermind</h3>
        <div className="feature-content">
          <img src={img2} alt="Smart Energy Solutions" className="feature-image" />
          <p className="feature-caption">
            It is one of our most technical projects developed using C and Assembler, and it implements the Mastermind game on Raspberry Pi and other hardware. It enables the users to experience the game wholeheartedly by providing a retro environment.
          </p>
        </div>
      </div>

      {/* Feature Section 3 */}
      <div className="feature-section">
        <h3 className="feature-title">CHARACTER</h3>
        <div className="feature-content">
          <img src={img3} alt="Seamless Connectivity" className="feature-image" />
          <p className="feature-caption">
            KAMEHAMEHAAAAAAAAAAAAAAAAA
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;