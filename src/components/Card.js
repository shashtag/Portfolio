import React from "react";

import "../css/card.css";

const Card = props => {
  console.log("[cards.js] rendering ...");
  return (
    <div className="card-body">
      <img src={props.image} className="card-image" alt=""></img>
      <div className="card-title">
        <u>{props.title}</u>
      </div>
    </div>
  );
};

export default Card;
