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
                Score: {props.score} | Top Score: {props.hiScore}
            </li>
        </ul>
    </nav>
)

export default Nav;
