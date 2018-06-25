import React from "react";
import "./Title.css";

const Title = props => (
    <div className="title">
        <h1 >{props.children}</h1>
        <p className="subtitle">{props.subtitle}</p>
    </div>
);

export default Title;
