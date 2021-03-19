import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, TableHeader, TableData } from "../styles/Table";

export default function PokemonDetail(props) {
  const [state, setState] = useState({
    id: "",
    name: "",
    height: "",
    weight: "",
    sprite: "",
    experience: "",
    abilities: "",
    stats: "",
    types: "",
  });

  const getFormattedStats = (response) => {
    let statString = "";
    response.data.stats.forEach((element) => {
      statString += element.stat.name + " - " + element.base_stat + "; ";
    });
    return statString;
  };

  const getFormattedTypes = (response) => {
    let typeString = "";
    response.data.types.forEach((element) => {
      typeString += element.type.name + "; ";
    });
    return typeString;
  };

  const getFormattedAbilities = (response) => {
    let abilityString = "";
    response.data.abilities.forEach((element) => {
      abilityString += element.ability.name + "; ";
    });
    return abilityString;
  };

  useEffect(() => {
    const {
      match: { params },
    } = props;
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${params.id}/`)
      .then((response) =>
        setState({
          id: response.data.id,
          name: response.data.name,
          height: response.data.height,
          weight: response.data.weight,
          sprite: response.data.sprites.other["official-artwork"].front_default,
          experience: response.data.base_experience,
          abilities: getFormattedAbilities(response),
          stats: getFormattedStats(response),
          types: getFormattedTypes(response),
        })
      );
  }, [props]);

  const {
    id,
    name,
    height,
    weight,
    sprite,
    experience,
    abilities,
    stats,
    types,
  } = state;
  return (
    <div className="detail-container">
      <img src={sprite} alt="sprite front" width="200" />
      <Table>
        <thead>
          <tr>
            <TableHeader>ID</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Height</TableHeader>
            <TableHeader>Weight</TableHeader>
            <TableHeader>Experience</TableHeader>
            <TableHeader>Abilities</TableHeader>
            <TableHeader>Stat Name - Base Stat</TableHeader>
            <TableHeader>Types</TableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableData>{id}</TableData>
            <TableData>{name}</TableData>
            <TableData>{height}</TableData>
            <TableData>{weight}</TableData>
            <TableData>{experience}</TableData>
            <TableData>{abilities}</TableData>
            <TableData>{stats}</TableData>
            <TableData>{types}</TableData>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
