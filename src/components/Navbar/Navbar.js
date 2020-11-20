import React, { useState, useEffect, useContext } from 'react';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';
import style from './Navbar.module.css';
import { ContactContext } from '../.././contexts/ContactContext';
import Contact from '.././Contact/Contact';

const Navbar = ({ width }) => {

  const [navColor, setNavColor] = useState("transparent");
  const { contact } = useContext(ContactContext);
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
    <div className={style.["navbar-container"]} style={{background:`${navColor}`}}>

    {width >= 900
      ?
      <NavbarDesktop />
      :
      <NavbarMobile />
  }
  {contact && (
    <Contact width={width}/>
    )
  }
    </div>
  );
}

export default Navbar;
