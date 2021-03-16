import React, { Component } from "react";
import axios from "axios";
import PokemonItem from "./PokemonItem";

export default class PokemonList extends Component {
  state = {
    previous: "",
    next: "",
    pokemons: [],
  };

  componentDidMount(url = "https://pokeapi.co/api/v2/pokemon") {
    axios.get(url).then((response) =>
      this.setState({
        previous: response.data.previous,
        next: response.data.next,
        pokemons: response.data.results,
      })
    );
  }

  displayPokemonItems() {
    return this.state.pokemons.map((pokemon) => (
      <PokemonItem
        name={pokemon.name}
        id={pokemon.url.split("/")[6]}
        key={pokemon.url.split("/")[6]}
      />
    ));
  }

  loadPrevious = (e) => {
    e.preventDefault();
    if (this.state.previous !== null) {
      this.componentDidMount(this.state.previous);
    }
  };

  loadNext = (e) => {
    e.preventDefault();
    if (this.state.next !== null) {
      this.componentDidMount(this.state.next);
    }
  };

  render() {
    return (
      <div>
        {this.displayPokemonItems()}
        <div>
          <a href="/" onClick={this.loadPrevious} className="btn pagination">
            Previous
          </a>
          <a href="/" onClick={this.loadNext} className="btn pagination">
            Next
          </a>
        </div>
      </div>
    );
  }
}
