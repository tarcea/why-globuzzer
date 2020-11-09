import React from 'react';
import './Header.css';
//import { FaPlayCircle } from 'react-icons/fa';
// import background from './../../images/image_background.png';

const HeaderDesktop = () => {
  return (
    <div className="header-container">
      <div className="image-background">
        <div className="header-mobile">
            <h1>START YOUR TRAVEL BLOG WITH GLOBUZZER</h1>
            <p>Everything you need to begin sharing your travel experiences,
            reach a broader audience and gain profit</p>
            <div className="phone-frame-mobile">
              <video src="./../../images/vid.mp4"></video>
            </div>
            <h5>Get Started</h5>
        </div>
      </div>
    </div>
  );
}

export default HeaderDesktop;
