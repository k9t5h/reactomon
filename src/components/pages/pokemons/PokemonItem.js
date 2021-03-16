import React, { Component } from "react";
import { Link } from "react-router-dom";
import ball from "../../../images/poke-ball.png";

export default class PokemonItem extends Component {
  render() {
    const id = this.props.url.split("/")[6];
    return (
      <div className="card-container">
        <div className="card">
          <img alt="poke-ball" src={ball} height="75" />
          <div className="pokemon-item">
            <Link to={`/pokemon/${id}`}>{this.props.name}</Link>
          </div>
        </div>
      </div>
    );
  }
}
