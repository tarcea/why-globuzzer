import React, { useState } from 'react';
import logo from '../../images/logo_globe.png';
import { VscMenu } from 'react-icons/vsc';
import Sesame from './Sesame';


const NavbarMobile = () => {
  const [scrollUp, setScrollUp] = useState(null);
  const [inHover, setHover] = useState(false);
  const [openSesame, setSesame] = useState(false);

  const handleClick = () => {
    openSesame && setSesame(false)
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

  window.addEventListener("scroll", () => {
    setScrollUp(window.pageYOffset)
  });

  return (
    <div>
    {openSesame &&
    <Sesame />
    }
    <div className="mobile-container" style={noLine} onClick={handleClick}>
      <VscMenu className="burger-menu"
                       style={whiteStyle}
                       onClick={() => setSesame(!openSesame)}/>
      <div className="logo-globe">
        <img src={logo} alt="logo-globe" />
      </div>
      <div className="ghost-button" style={style}>
        <p>Get started</p>
      </div>
    </div>
    </div>
  );
}

export default NavbarMobile;
