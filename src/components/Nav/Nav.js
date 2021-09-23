import React from "react";
import "./Nav.css";

const Nav = (props) => {
  const messageEl = document.getElementById("message");

  function setMessageClass(newClass) {
    if (messageEl.classList.contains("correct")) {
      messageEl.classList.remove("correct");
    }
    if (messageEl.classList.contains("incorrect")) {
      messageEl.classList.remove("incorrect");
    }
    setTimeout(function () {
      messageEl.classList.add(newClass);
    }, 50);
  }

  if (props.message === "You guessed correctly!") {
    setMessageClass("correct");
  }

  if (props.message === "You guessed incorrectly!") {
    setMessageClass("incorrect");
  }

  return (
    <nav className="navbar">
      <ul>
        <li className="brand">{props.brand}</li>
        <li id="message">{props.message}</li>
        <li>
          <span className="score"> Score: {props.score}</span>{" "}
          <span className="scoreSplit">|</span>{" "}
          <span className="score">Top Score: {props.hiScore}</span>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
