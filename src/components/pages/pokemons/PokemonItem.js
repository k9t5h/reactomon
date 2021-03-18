import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../styles/Card";
import ItemLink from "../../styles/ItemLink";

export default function PokemonItem(props) {
  const [sprite, setSprite] = useState("");

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${props.id}/`)
      .then((response) => setSprite(response.data.sprites.back_default));
  }, [props.id]);

  const { id, name } = props;
  return (
    <Card>
      <img alt="sprite back" src={sprite} height="75" />
      <ItemLink to={`/pokemon/${id}`}>{name}</ItemLink>
    </Card>
  );
}
