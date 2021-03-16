import React, { Component } from "react";
import axios from "axios";

export default class PokemonDetail extends Component {
  state = {
    id: "",
    name: "",
    height: "",
    weight: "",
    sprite: "",
    experience: "",
    abilities: "",
    stats: "",
    types: "",
  };

  getFormattedStats(response) {
    let statString = "";
    response.data.stats.forEach((element) => {
      statString += element.stat.name + " - " + element.base_stat + "; ";
    });
    return statString;
  }

  getFormattedTypes(response) {
    let typeString = "";
    response.data.types.forEach((element) => {
      typeString += element.type.name + "; ";
    });
    return typeString;
  }

  getFormattedAbilities(response) {
    let abilityString = "";
    response.data.abilities.forEach((element) => {
      abilityString += element.ability.name + "; ";
    });
    return abilityString;
  }

  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${params.id}/`)
      .then((response) =>
        this.setState({
          id: response.data.id,
          name: response.data.name,
          height: response.data.height,
          weight: response.data.weight,
          sprite: response.data.sprites.other["official-artwork"].front_default,
          experience: response.data.base_experience,
          abilities: this.getFormattedAbilities(response),
          stats: this.getFormattedStats(response),
          types: this.getFormattedTypes(response),
        })
      );
  }

  render() {
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
    } = this.state;
    return (
      <div className="detail-container">
        <img src={sprite} alt="sprite front" width="200" />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Height</th>
              <th>Weight</th>
              <th>Experience</th>
              <th>Abilities</th>
              <th className="fit-width">Stat Name - Base Stat</th>
              <th>Types</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{id}</td>
              <td>{name}</td>
              <td>{height}</td>
              <td>{weight}</td>
              <td>{experience}</td>
              <td>{abilities}</td>
              <td>{stats}</td>
              <td className="fit-width">{types}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
