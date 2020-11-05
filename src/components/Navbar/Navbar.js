import React, { useState } from 'react';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';
import './Navbar.css';

const Navbar = ({ width }) => {

  const [navColor, setNavColor] = useState("transparent");

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 60) {
      setNavColor("rgba(128,128,128,0.6)");
    } else {
      setNavColor("transparent");
    }
  });
  return (
    <div className="navbar-container" style={{background:`${navColor}`}}>

    {width >= 900 ? (
      <NavbarDesktop />
      ) :
      <NavbarMobile />
  }
    </div>
  );
}

export default Navbar;
