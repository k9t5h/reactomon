import { Component } from "react";
import React from "react";
import logo from "../../images/pokemon.png";

export default class Header extends Component {
  render() {
    return (
      <div>
        <img alt="pokemon-logo" src={logo} height="200" />
      </div>
    );
  }
}
