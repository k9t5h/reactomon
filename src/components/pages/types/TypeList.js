import React, { Component } from "react";
import axios from "axios";
import TypeItem from "./TypeItem";

export default class TypeList extends Component {
  state = {
    types: [],
  };

  componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/type").then((response) =>
      this.setState({
        types: response.data.results,
      })
    );
  }

  render() {
    return this.state.types.map((type) => (
      <TypeItem name={type.name} key={type.url.split("/")[6]} />
    ));
  }
}
