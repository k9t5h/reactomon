import React from "react";
import { Link } from "react-router-dom";

export default function PokemonItem(props) {
  const { id, name, image } = props;
  return (
    <div className="card-container">
      <div className="card">
        <img alt="sprite back" src={image} height="75" />
        <div className="pokemon-item">
          <Link to={`/pokemon/${id}`}>{name}</Link>
        </div>
      </div>
    </div>
  );
}
