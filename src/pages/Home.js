import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../images/dragon_ball_z_battle_of_gods_screenshot3.jpg";
import image2 from "../images/dragon-ball-z-dragonball-san-goku-wallpaper.jpg";
import image3 from "../images/dragon-ball-son-goku-blue-power.jpg";

const Home = () => (
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
  </div>
);

export default Home;