import React from 'react';
import logo from '../../images/globuzzer_watermark.png';

const NavbarDesktop = () => {
  return (
    <div className="top-menu">
    <div className="desktop-container">
      <header>
        <img src={logo} alt="logo" className="menu-logo"/>
      </header>
      <div className="desktop-links">
        <ul>
          <li>Testimonials</li>
          <li>Contact us</li>
          <li className="selected" style={{color: '#F24B6A'}} >Get started</li>
        </ul>
      </div>
      </div>
      <hr className="desktop-underline" />
    </div>
  );
}

export default NavbarDesktop;

