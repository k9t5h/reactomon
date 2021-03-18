import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin-left: 50px;
  margin-bottom: 50px;
`;

const NavLink = styled(Link)`
  padding: 10px;
  background-color: black;
  color: silver;
  font-weight: bold;
  border-radius: 10px;
  margin-right: 20px;
  text-decoration: none;

  :hover {
    color: darkred;
  }
`;

export default function Navbar() {
  return (
    <StyledDiv>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/pokemons">Pokemons</NavLink>
      <NavLink to="/types">Types</NavLink>
      <NavLink to="#">Theme</NavLink>
    </StyledDiv>
  );
}
