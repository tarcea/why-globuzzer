import React from 'react';
import Card from './Card';
import { infos } from '../../utils/data';
import style from './MenuCards.module.css';

const MenuCards = () => {
  return (
    <div className={style.["grid-container"]}>
      {infos.map((info) => (
          <Card icon={info.icon}
                title={info.title}
                body={info.body}
                key={info.title}
          />
      ))}
    </div>
  );
}

export default MenuCards;
