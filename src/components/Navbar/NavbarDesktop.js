import React from 'react';
import logo from '../../images/globuzzer_watermark.png';

const NavbarDesktop = () => {
  return (
    <div className="top-menu">
    <div className="desktop-container">

        <img src={logo} alt="logo" className="menu-logo desktop-logo"/>
      <div className="desktop-menu">
      <div className="desktop-links">
        <ul>
          <li>Testimonials</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div className="desktop-button" >
        <p>Get started</p>
      </div>
      </div>
      </div>
      <hr className="desktop-underline" />
    </div>
  );
}

export default NavbarDesktop;

