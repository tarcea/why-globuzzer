import React from 'react';

const Card = ({ icon, title, body }) => {
  return (
    <div className="card-body">
      <div className="card-icon">
        <img src={icon} alt="" />
      </div>
      <div className="card-text">
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </div>
  );
}

export default Card;
