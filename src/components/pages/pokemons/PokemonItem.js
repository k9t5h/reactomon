import React, { Component } from "react";
import ball from "../../../images/poke-ball.png";

export default class PokemonItem extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="card">
          <img alt="poke-ball" src={ball} height="75" />
          <p>{this.props.name}</p>
        </div>
      </div>
    );
  }
}
