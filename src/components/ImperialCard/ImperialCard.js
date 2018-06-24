import React from "react";
import "./ImperialCard.css";

const ImperialCard = props => (
  <div className="card">
    <div className="img-container">
      <span onClick={() => props.removeFriend(props.id)} className="remove">
        <img alt={props.name} src={props.image} />
      </span>
    </div>
  </div>
);

export default ImperialCard;
