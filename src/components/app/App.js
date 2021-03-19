import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../layout/Header";
import Navbar from "../layout/Navbar";
import PokemonList from "../pages/pokemons/PokemonList";
import TypeList from "../pages/types/TypeList";
import CatchedList from "../pages/catched/CatchedList";
import PokemonDetail from "../pages/PokemonDetail";
import Theme from "../styles/Theme";
import { ThemeStore } from "../contexts/ThemeStore";
import { PokemonStore } from "../contexts/PokemonStore";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  width: 800px;
`;

export default function App() {
  return (
    <ThemeStore>
      <Theme>
        <Router>
          <Container>
            <Header />
            <PokemonStore>
              <Navbar />
              <Route path="/pokemons" component={PokemonList} />
              <Route path="/catched" component={CatchedList} />
              <Route path="/pokemon/:id" component={PokemonDetail} />
            </PokemonStore>
            <Route path="/types" component={TypeList} />
          </Container>
        </Router>
      </Theme>
    </ThemeStore>
  );
}
