import React, { useState, useEffect } from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
import logo from '../../images/logo_globe.png';
// import { IconContext } from "react-icons";
import { VscMenu } from 'react-icons/vsc';
import Sesame from './Sesame';
import styles from './NavMobile.module.css';

const NavbarMobile = () => {
  const [scrollUp, setScrollUp] = useState(null);
  const [inHover, setHover] = useState(false);
  const [openSesame, setSesame] = useState(false);

  const updateScroll = () => {
    setScrollUp(window.pageYOffset);
  }

  const getClient = (e) => {
    (e.clientX > 213 || (e.clientY < 18 || e.clientY > 360))
    && setSesame(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    window.addEventListener("click", getClient);
    return () => {window.removeEventListener("scroll", updateScroll);
                  window.removeEventListener("click", getClient);
                  }
  }, [])

  const handleOpen = (newSesame) => {
    setSesame(newSesame);
  }

  const handleClick = () => {
    openSesame && setSesame(false);
  }

  const style = {
    background: scrollUp > 60 ? "#F24B6A" :
    (inHover ? "#F24B6A" : "rgba(255, 255, 255, 0)"),
    color: scrollUp > 60 ? "#FFFFFF" : (inHover ? "#FFFFFF" : "#F24B6A")
  }

  const whiteStyle = {
    color: scrollUp > 60 ? "#FFFFFF" : "#7B7B7B"
  }

  const noLine = {
    borderBottom: scrollUp > 60 ? 0 : "1px solid rgba(136, 136, 136, 0.3)"
  }

  return (
    <div>
    {openSesame &&

    <Sesame openSesame={openSesame} handleOpen={handleOpen} />

    }
    <div className={styles.["mobile-container"]} style={noLine} onClick={handleClick}>
      <VscMenu className={styles.["burger-menu"]}
                       style={whiteStyle}
                       onClick={() => setSesame(!openSesame)}/>
      <div className={styles.["logo-globe"]}>
        <img src={logo} alt="logo-globe" />
      </div>
      <div className={styles.["ghost-button"]}
           style={style}
           onMouseEnter={() => setHover(true)}
           onMouseLeave={() => setHover(false)}>
            {/*is it hover needed on mobile view???*/}
        <p>Get started</p>
      </div>
    </div>
    </div>
  );
}

export default NavbarMobile;
