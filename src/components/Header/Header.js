import React from 'react';
import './Header.css';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';


const Header = ({ width }) => {
  return (
    <div>
      {width >= 900
        ?
        <HeaderDesktop />
        :
        <HeaderMobile />
      }
    </div>
  );
}

export default Header;
