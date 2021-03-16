import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../layout/Header";
import Navbar from "../layout/Navbar";
import PokemonList from "../pages/pokemons/PokemonList";
import TypeList from "../pages/types/TypeList";

import "./App.css";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Navbar />
            <Route path="/pokemons" component={PokemonList} />
            <Route path="/types" component={TypeList} />
          </div>
        </div>
      </Router>
    );
  }
}
