import React from "react";
import Card from "../../styles/Card";
import ItemLink from "../../styles/ItemLink";

export default function PokemonItem(props) {
  const { id, name, image } = props;
  return (
    <Card>
      <img alt="sprite back" src={image} height="75" />
      <ItemLink to={`/pokemon/${id}`}>{name}</ItemLink>
    </Card>
  );
}
