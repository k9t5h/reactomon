import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class PokemonItem extends Component {
  state = {
    sprite: "",
  };

  componentDidMount() {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${this.props.id}/`)
      .then((response) =>
        this.setState({
          sprite: response.data.sprites.back_default,
        })
      );
  }

  render() {
    const { id, name } = this.props;
    return (
      <div className="card-container">
        <div className="card">
          <img alt="poke-ball" src={this.state.sprite} height="75" />
          <div className="pokemon-item">
            <Link to={`/pokemon/${id}`}>{name}</Link>
          </div>
        </div>
      </div>
    );
  }
}
