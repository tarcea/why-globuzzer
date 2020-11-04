import React from 'react';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';
import './Navbar.css';

const Navbar = ({ width }) => {
  return (
    <div className="navbar-container">
    {width >= 900 ? (
      <NavbarDesktop />
      ) :
      <NavbarMobile />
  }
    </div>
  );
}

export default Navbar;
