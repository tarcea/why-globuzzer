import React from 'react';
import Header from './Header';
import MenuCards from './MenuCards';
import { why } from '../../utils/data';


const WhyGlobuzzer = () => {
  return (
    <div>
      <header className="main-container">
        <div className="title">
          <Header text="Why Globuzzer?" />
        </div>
        <div className="small-line"></div>
        <div className="why">
          <Header text={why} />
        </div>
        <div className="big-line"></div>
        <div className="menu">
          <MenuCards />
        </div>
      </header>
    </div>
  );
}

export default WhyGlobuzzer;
