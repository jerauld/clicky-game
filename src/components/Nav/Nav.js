import React from "react";
import "./Nav.css";

const Nav = props => (

    <nav className="navbar">
        <ul>
            <li className="brand">
                Clicky Game
            </li>
            <li>
                Click and image to begin!
            </li>
            <li>
                Scores go here.
            </li>
        </ul>
    </nav>
)

export default Nav;
