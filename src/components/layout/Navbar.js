import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ThemeContext } from "../contexts/ThemeStore";

const StyledDiv = styled.div`
  margin-left: 50px;
  margin-bottom: 50px;
`;

const NavLink = styled(Link)`
  padding: 10px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  font-weight: bold;
  border-radius: 10px;
  margin-right: 20px;
  text-decoration: none;

  :hover {
    color: darkred;
  }
`;

export default function Navbar() {
  const { theme, switchTheme } = useContext(ThemeContext);

  return (
    <StyledDiv>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/pokemons">Pokemons</NavLink>
      <NavLink to="/types">Types</NavLink>
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
