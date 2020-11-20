import React, { useState, useEffect, useContext } from 'react';
import logo from '../../images/globuzzer_logo.png';
import { AnchorContext } from '../.././contexts/AnchorContext';
import { ContactContext } from '../.././contexts/ContactContext';
import styles from './NavbarDesktop.module.css';

const NavbarDesktop = (props) => {
  const [scrollUp, setScrollUp] = useState(null);
  const [inHover, setHover] = useState(false);
  const { top, footer, testimonials } = useContext(AnchorContext);
  const { handleContact } = useContext(ContactContext);

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

  const handleClick = (anchor) => {
        anchor.current.scrollIntoView({behavior: "smooth"});
    }


  return (
    <div className={styles.["top-menu"]}>
          <div className={styles.["desktop-container"]} style={noLine}>
              <img src={logo} alt="logo" className={style.["menu-logo desktop-logo"]}/>
            <div className={styles.["desktop-menu"]}>
            <div className={styles.["desktop-links"]} >
              <ul>

                <li style={whiteStyle} onClick={() => handleClick(footer)}>Testimonials</li>

                <li style={whiteStyle} onClick={handleContact} >Contact us</li>

              </ul>
            </div>
            <div style={style} className={styles.["desktop-button"]}
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

