import React, { useState, useEffect } from 'react';
import './Header.css';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';
import styles from './Header.module.css';


const Header = ({ width }) => {
  let smallScreen = (width <= 500 ? true : false);

  return (
    <div className={styles.container}>
    {smallScreen ? (
        <div className={styles.header}>
          <h1>START YOUR TRAVEL</h1>
          <h1>WEBSITE</h1>
          <h1>WITH GLOBUZZER</h1>
          <p>Everything you need to begin sharing your travel
          experiences, reach a broader audience and gain profit.
          </p>
          <video className={styles.video}>
            <source src="" />
          </video>
          <p>Get started</p>
        </div>
      ) : (
      <div className={styles.grid}>
        <div className={styles.left}>
            <h1>START YOUR TRAVEL BLOG
            WITH GLOBUZZER</h1>
            <p>Everything you need to begin sharing your travel
            experiences, reach a broader audience and gain profit.
            </p>
            <p>Get started</p>
        </div>
        <div className={styles.right}>
          <video className={styles.video}>
            <source src="" />
          </video>
        </div>
      </div>
      )}
    </div>
  );
}

export default Header;
