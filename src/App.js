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
    message: ""
    
  };

  handleReset = () => {
    this.setState(
      {
        clicked: []
      }
    )
  }

  handleShuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  handleClick = (id) => {
    // alert(id);
    if(this.state.clicked.indexOf(id) === -1) {
      this.setState(
        {
          clicked: this.state.clicked.concat(id)
        }
      );
    } else {
      this.handleReset();
    }
    this.handleShuffleArray(troopers);
  }

  // Map over this.state.friends and render a component for each friend object
  render() {
    return (
      <Wrapper>
        <Nav />
        <Title>Trooper List</Title>
        {this.state.troopers.map(trooper => (
          <ImperialCard
            handleClick={this.handleClick}
            id={trooper.id}
            key={trooper.id}
            name={trooper.name}
            image={trooper.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
