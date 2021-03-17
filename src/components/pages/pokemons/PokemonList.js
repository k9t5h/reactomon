import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonItem from "./PokemonItem";

export default function PokemonList() {
  const [state, setState] = useState({
    url: "https://pokeapi.co/api/v2/pokemon",
    previous: "",
    next: "",
    pokemons: [],
  });

  useEffect(() => {
    axios.get(state.url).then((response) =>
      setState({
        url: state.url,
        previous: response.data.previous,
        next: response.data.next,
        pokemons: response.data.results,
      })
    );
  }, [state.url]);

  const displayPokemonItems = () => {
    return state.pokemons.map((pokemon) => (
      <PokemonItem
        name={pokemon.name}
        id={pokemon.url.split("/")[6]}
        key={pokemon.url.split("/")[6]}
      />
    ));
  };

  const loadPrevious = (e) => {
    e.preventDefault();
    if (state.previous !== null) {
      setState({ ...state, url: state.previous });
    }
  };

  const loadNext = (e) => {
    e.preventDefault();
    if (state.next !== null) {
      setState({ ...state, url: state.next });
    }
  };

  return (
    <div>
      {displayPokemonItems()}
      <div>
        <a href="/" onClick={loadPrevious} className="btn pagination">
          Previous
        </a>
        <a href="/" onClick={loadNext} className="btn pagination">
          Next
        </a>
      </div>
    </div>
  );
}
