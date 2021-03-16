import React, { Component } from "react";
import axios from "axios";
import PokemonItem from "./PokemonItem";

export default class PokemonList extends Component {
  state = {
    next: "",
    pokemons: [],
  };

  componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((response) =>
      this.setState({
        next: response.data.next,
        pokemons: response.data.results,
      })
    );
  }

  render() {
    return this.state.pokemons.map((pokemon) => (
      <PokemonItem name={pokemon.name} url={pokemon.url} />
    ));
  }
}
