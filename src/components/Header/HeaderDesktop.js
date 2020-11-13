import React from 'react';
import './Header.css';
//import { FaPlayCircle } from 'react-icons/fa';
// import background from './../../images/image_background.png';

const HeaderDesktop = () => {
  return (
    <div className="header-container">
      <div className="image-background">
        <div className="header-grid">
          <div className="header-left">
            <h1>START YOUR TRAVEL BLOG WITH GLOBUZZER</h1>
            <p>Everything you need to begin sharing your travel experiences,
            reach a broader audience and gain profit</p>
            <div className="links-left">
              <h5>Get Started</h5>
              {/*
              <a href="#video" className="watch-video">
                <FaPlayCircle style={{marginRight: "8px"}}/>
                Watch the demo
              </a>
              */}
            </div>
          </div>
          <div className="header-right">
            <div className="phone-frame-desk">
            <video className="video" autoplay loop>
               <source src="./../../images/vid.mp4" type="video/mp4" />
            </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderDesktop;
