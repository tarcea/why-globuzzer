import React, { useState, useEffect } from 'react';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';
import './Navbar.css';

const Navbar = ({ width }) => {

  const [navColor, setNavColor] = useState("transparent");

  const setColor = () => {
    const currentScroll = window.pageYOffset;
    currentScroll > 60
    ?
      setNavColor("rgba(128,128,128,0.6)")
    :
      setNavColor("rgba(255, 255, 255, 0)")
  }

  useEffect(() => {
    window.addEventListener("scroll", setColor);
    return () => window.removeEventListener("scroll", setColor);
  }, [])

  return (
    <div className="navbar-container" style={{background:`${navColor}`}}>

    {width >= 900
      ?
      <NavbarDesktop />
      :
      <NavbarMobile />
  }
    </div>
  );
}

export default Navbar;
