import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonItem from "./PokemonItem";
import Pagination from "../../styles/Pagination";
import Container from "../../styles/Container";

export default function PokemonList() {
  const [state, setState] = useState({
    url: "https://pokeapi.co/api/v2/pokemon",
    previous: "",
    next: "",
    pokemons: [],
  });

  const [spriteImages, setSpriteImages] = useState(new Map());

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

  useEffect(() => {
    const spriteImages = new Map();
    state.pokemons.forEach((pokemon) => {
      axios.get(pokemon.url).then((response) => {
        const id = pokemon.url.split("/")[6];
        spriteImages.set(id, response.data.sprites.back_default);
        if (state.pokemons.length === spriteImages.size) {
          setSpriteImages(spriteImages);
        }
      });
    });
  }, [state.pokemons]);

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

  const pokemonItems = state.pokemons.map((pokemon) => (
    <PokemonItem
      id={pokemon.url.split("/")[6]}
      name={pokemon.name}
      image={spriteImages.get(pokemon.url.split("/")[6])}
      key={pokemon.url.split("/")[6]}
    />
  ));

  return (
    <div>
      <Container>{pokemonItems}</Container>
      <div>
        <Pagination href="/" onClick={loadPrevious}>
          Previous
        </Pagination>
        <Pagination href="/" onClick={loadNext}>
          Next
        </Pagination>
      </div>
    </div>
  );
}
