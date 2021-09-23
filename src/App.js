import React, { Component } from "react";
import ImperialCard from "./components/ImperialCard";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Title from "./components/Title";
import troopers from "./troopers.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    troopers: troopers,
    clicked: [],
    score: 0,
    hiScore: 0,
    message: "Click an image to begin!",
  };

  handleShuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  handleClick = (id) => {
    // alert(id);
    if (this.state.clicked.indexOf(id) === -1) {
      this.setState({
        troopers: troopers,
        clicked: this.state.clicked.concat(id),
        score: this.state.score + 1,
        hiScore:
          this.state.hiScore > this.state.score
            ? this.state.hiScore
            : this.state.hiScore + 1,
        message: "You guessed correctly!",
      });
    } else {
      this.setState({
        troopers: troopers,
        clicked: [],
        score: 0,
        topScore:
          this.state.score > this.state.hiScore
            ? this.state.score
            : this.state.hiScore,
        message: "You guessed incorrectly!",
      });
    }
    this.handleShuffleArray(troopers);
  };

  // Map over this.state.friends and render a component for each friend object
  render() {
    return (
      <Wrapper>
        <Nav
          brand="Clicky Game"
          message={this.state.message}
          score={this.state.score}
          hiScore={this.state.hiScore}
        />
        <Title subtitle="Click on an image to earn points, but don't click on any more than once!">
          Clicky Game: Imperial Helmet Edition
        </Title>
        <div className="container">
          <div className="card-container">
            {this.state.troopers.map((trooper) => (
              <ImperialCard
                handleClick={this.handleClick}
                id={trooper.id}
                key={trooper.id}
                name={trooper.name}
                message={this.state.message}
                image={trooper.image}
                score={this.state.score}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;
