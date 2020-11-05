import React, { useState } from 'react';
import logo from '../../images/globuzzer_watermark.png';
import {useSpring, animated} from 'react-spring';

const NavbarDesktop = () => {
  const [scrollUp, setScrollUp] = useState(null);
  const [inHover, setHover] = useState(false);

  const style = {
    background: scrollUp > 60 ? "#F24B6A" :
    "rgba(255, 255, 255, 0)",
    color: scrollUp > 60 ? "#FFFFFF" : "#F24B6A"
  }

  window.addEventListener("scroll", () => {
    setScrollUp(window.pageYOffset)
  });


  return (
    <div className="top-menu">
    {scrollUp}
    <div className="desktop-container">
        <img src={logo} alt="logo" className="menu-logo desktop-logo"/>
      <div className="desktop-menu">
      <div className="desktop-links">
        <ul>
          <li>Testimonials</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div style={style} className="desktop-button"
                         onMouseEnter={() => setHover(true)}
                         onMouseLeave={() => setHover(false)}>
        <p>Get started</p>
      </div>
      </div>
      </div>
    </div>
  );
}

export default NavbarDesktop;

