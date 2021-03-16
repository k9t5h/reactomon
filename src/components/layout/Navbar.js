import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="btn-container">
        <Link to="/pokemons" className="btn">
          Pokemons
        </Link>
        <Link to="/types" className="btn">
          Types
        </Link>
      </div>
    );
  }
}
