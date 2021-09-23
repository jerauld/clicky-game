import React from "react";
import "./Nav.css";

const Nav = props => {

    const messageClass = () => {
        const messageEl = document.getElementById('message');
        if (props.message === "You guessed correctly!") {
            if(messageEl.classList.contains('correct')) {
              messageEl.classList.remove('correct');
            }
            if(messageEl.classList.contains('incorrect')) {
              messageEl.classList.remove('incorrect');
            }
            setTimeout(function(){
              messageEl.classList.add('correct')
            }, 50);
        } else if (props.message === "You guessed incorrectly!") {
          if(messageEl.classList.contains('correct')) {
            messageEl.classList.remove('correct');
          }
          if(messageEl.classList.contains('incorrect')) {
            messageEl.classList.remove('incorrect');
          }
          setTimeout(function(){
            messageEl.classList.add('incorrect')
          }, 50);
        }
    }

    return (
        <nav className="navbar">
            <ul>
                <li className="brand">
                    {props.brand}
                </li>
                <li id="message" className={messageClass()}>
                    {props.message}
                </li>
                <li>
                    <span className="score"> Score: {props.score}</span> <span className="scoreSplit">|</span> <span className="score">Top Score: {props.hiScore}</span>
                </li>
            </ul>
        </nav>
    )

}

export default Nav;
