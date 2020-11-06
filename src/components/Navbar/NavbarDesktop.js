import React, { useState } from 'react';
import logo from '../../images/globuzzer_logo.png';
import {useSpring, animated} from 'react-spring';

const NavbarDesktop = () => {
  const [scrollUp, setScrollUp] = useState(null);
  const [inHover, setHover] = useState(false);

  const style = {
    background: scrollUp > 60 ? "#F24B6A" :
    (inHover ? "#F24B6A" : "rgba(255, 255, 255, 0)"),
    color: scrollUp > 60 ? "#FFFFFF" : (inHover ? "#FFFFFF" : "#F24B6A")
  }

  const whiteStyle = {
    color: scrollUp > 60 ? "#FFFFFF" : "#888888"
  }

  const noLine = {
    borderBottom: scrollUp > 60 ? 0 : "1px solid #FFFFFF"
  }

  window.addEventListener("scroll", () => {
    setScrollUp(window.pageYOffset)
  });


  return (
    <div className="top-menu">
    <div className="desktop-container" style={noLine}>
        <img src={logo} alt="logo" className="menu-logo desktop-logo"/>
      <div className="desktop-menu">
      <div className="desktop-links" >
        <ul>
          <li style={whiteStyle}>Testimonials</li>
          <li style={whiteStyle}>Contact us</li>
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

