import React from "react";
import "./Nav.css";

const Nav = props => (

    <nav className="navbar">
        <ul>
            <li className="brand">
                {props.brand}
            </li>
            <li className={props.message}>
                {props.message} 
            </li>
            <li>
                <span className="score"> Score: {props.score}</span> <span className="scoreSplit">|</span> <span className="score">Top Score: {props.hiScore}</span>
            </li>
        </ul>
    </nav>
)

export default Nav;
