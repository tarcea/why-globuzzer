import React from 'react';
import style from './Card.module.css';

const Card = ({ icon, title, body }) => {
  return (
    <div className={style.["card-body"]}>
      <div className={style.["card-icon"]}>
        <img src={icon} alt="" />
      </div>
      <div className={style.["card-text"]}>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </div>
  );
}

export default Card;
