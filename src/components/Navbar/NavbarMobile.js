import React from 'react';
import logo from '../../images/logo_globe.png';
import { GiHamburgerMenu } from 'react-icons/gi';


const NavbarMobile = () => {
  return (
    <div className="mobile-container">
      <GiHamburgerMenu className="burger-menu"/>
      <div className="logo-globe">
        <img src={logo} alt="logo-globe" />
      </div>
      <div className="ghost-button">
        <p>Get started</p>
      </div>
    </div>
  );
}

export default NavbarMobile;
