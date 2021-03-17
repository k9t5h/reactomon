import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
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
