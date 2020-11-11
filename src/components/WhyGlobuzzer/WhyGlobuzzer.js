import React from 'react';
import Header from './Header';
import MenuCards from './MenuCards';
import { why } from '../../utils/data';
import style from './WhyGlobuzzer.module.css';

const WhyGlobuzzer = () => {

  return (
    <div>
      <header className={style.["main-container"]} style={{marginTop: "128px"}}>
        <div className={style.title}>
          <Header text="Why Globuzzer?" />
        </div>
        <div className={style.["small-line"]}></div>
        <div className={style.why}>
          <Header text={why} />
        </div>
        <div className={style.["big-line"]}></div>
        <div className={style.menu} >
          <MenuCards />
        </div>
      </header>

    </div>
  );
}

export default WhyGlobuzzer;
