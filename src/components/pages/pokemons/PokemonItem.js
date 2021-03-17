import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function PokemonItem(props) {
  const [sprite, setSprite] = useState("");

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${props.id}/`)
      .then((response) => setSprite(response.data.sprites.back_default));
  }, [props.id]);

  const { id, name } = props;
  return (
    <div className="card-container">
      <div className="card">
        <img alt="poke-ball" src={sprite} height="75" />
        <div className="pokemon-item">
          <Link to={`/pokemon/${id}`}>{name}</Link>
        </div>
      </div>
    </div>
  );
}
