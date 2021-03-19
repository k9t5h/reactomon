import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ThemeContext } from "../contexts/ThemeStore";
import { PokemonContext } from "../contexts/PokemonStore";

const StyledDiv = styled.div`
  margin: 5px 0 50px 50px;
`;

const NavLink = styled(Link)`
  padding: 8px;
  background-color: black;
  color: silver;
  font-weight: bold;
  margin-right: 20px;
  text-decoration: none;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 11px;

  :hover {
    color: darkred;
  }
`;

export default function Navbar() {
  const { theme, switchTheme } = useContext(ThemeContext);
  const { catchedPokemons } = useContext(PokemonContext);

  return (
    <StyledDiv>
      <NavLink to="/pokemons">Pokemons</NavLink>
      <NavLink to="/types">Types</NavLink>
      <NavLink to="/catched">Caught ({catchedPokemons.length})</NavLink>
      {theme === "light" ? (
        <NavLink to="#" onClick={() => switchTheme("dark")}>
          Theme
        </NavLink>
      ) : (
        <NavLink to="#" onClick={() => switchTheme("light")}>
          Theme
        </NavLink>
      )}
    </StyledDiv>
  );
}
