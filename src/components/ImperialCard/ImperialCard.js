import React from "react";
import "./ImperialCard.css";

const ImperialCard = props => (
  <div
    className="card"
    onClick={() => props.handleClick(props.id)}
  >
    <div className="img-container">
        <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default ImperialCard;
