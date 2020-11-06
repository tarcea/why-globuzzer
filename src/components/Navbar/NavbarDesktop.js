import React, { useState, useEffect } from 'react';
// import { Link, NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../../images/globuzzer_logo.png';

const NavbarDesktop = () => {
  const [scrollUp, setScrollUp] = useState(null);
  const [inHover, setHover] = useState(false);

  const updateScroll = () => {
    setScrollUp(window.pageYOffset);
  }

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, [])

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

  return (
    <div className="top-menu">
    <div className="desktop-container" style={noLine}>
        <img src={logo} alt="logo" className="menu-logo desktop-logo"/>
      <div className="desktop-menu">
      <div className="desktop-links" >
        <ul>
        <Link to="#testimonials">
          <li style={whiteStyle}>Testimonials</li>
        </Link>
        <Link to="#footer">
          <li style={whiteStyle}>Contact us</li>
        </Link>
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

