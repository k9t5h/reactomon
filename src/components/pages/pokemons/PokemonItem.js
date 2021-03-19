import React, { useContext } from "react";
import Card from "../../styles/Card";
import ItemLink from "../../styles/ItemLink";
import { PokemonContext } from "../../contexts/PokemonStore";

export default function PokemonItem(props) {
  const { catchPokemon } = useContext(PokemonContext);

  const { id, name, image } = props;
  return (
    <Card>
      <img
        alt="sprite back"
        src={image}
        height="75"
        onClick={() => catchPokemon(id)}
        style={{ cursor: "pointer" }}
      />
      <ItemLink to={`/pokemon/${id}`}>{name}</ItemLink>
    </Card>
  );
}
