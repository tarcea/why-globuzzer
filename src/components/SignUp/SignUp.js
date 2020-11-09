import React from 'react';
import { Link } from "react-router-dom";
import { IoIosArrowDropleft } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import './SignUp.css'

const SignUp = () => {

  return (
    <div className="signup-container">
      <header>
      <Link to="/" className="back-home">
        <IoIosArrowDropleft className="icon-back"/>
        <p>Back</p>
      </Link>
      </header>
      <div className="search-form">
        <p>Choose cities you like</p>
        <div className="input-form">
          <BsSearch className="icon-search" />
          <input type="text" />
        </div>
      </div>
      <div className="grid-container">
        <h1>CARD1</h1>
        <h1>CARD2</h1>
        <h1>CARD3</h1>
        <h1>CARD4</h1>
      </div>
    </div>
  );
}

export default SignUp;
