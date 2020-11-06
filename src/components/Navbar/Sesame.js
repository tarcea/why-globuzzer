import React from 'react';
import logo from '../../images/globuzzer_logo.png';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';

const Sesame = () => {


  return (
    <div className="floating-menu">
      <div className="sesame-container">
        <div>
          <img src={logo} alt="logo" className="sesame-logo"/>
        </div>
        <div className="sesame-links">
          <div className="link">
            <GoLocation />
            <a href="#www">Testimonials</a>
          </div>
          <div className="link">
            <AiOutlineQuestionCircle />
            <a href="#www">Contact us</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sesame;
