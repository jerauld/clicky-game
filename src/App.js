import React, { Component } from "react";
import ImperialCard from "./components/ImperialCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import troopers from "./troopers.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    troopers
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const troopers = this.state.troopers.filter(trooper => trooper.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ troopers });
  };

  // Map over this.state.friends and render a component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Trooper List</Title>
        {this.state.troopers.map(trooper => (
          <ImperialCard
            removeFriend={this.removeFriend}
            id={trooper.id}
            key={trooper.id}
            name={trooper.name}
            image={trooper.image}
            occupation={trooper.occupation}
            location={trooper.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
