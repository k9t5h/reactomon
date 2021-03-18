import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../layout/Header";
import Navbar from "../layout/Navbar";
import PokemonList from "../pages/pokemons/PokemonList";
import TypeList from "../pages/types/TypeList";
import PokemonDetail from "../pages/PokemonDetail";
import Theme from "../styles/Theme";
import { ThemeStore } from "../contexts/ThemeStore";

import "./App.css";

export default function App() {
  return (
    <ThemeStore>
      <Theme>
        <Router>
          <div className="App">
            <div className="container">
              <Header />
              <Navbar />
              <Route path="/pokemons" component={PokemonList} />
              <Route path="/types" component={TypeList} />
              <Route path="/pokemon/:id" component={PokemonDetail} />
            </div>
          </div>
        </Router>
      </Theme>
    </ThemeStore>
  );
}
