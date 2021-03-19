import React, { useContext } from "react";
import styled from "styled-components";
import { PokemonContext } from "../../contexts/PokemonStore";
import CatchedItem from "./CatchedItem";
import pokeball from "../../../images/pokeball.png";
import Container from "../../styles/Container";

const BallContainer = styled.div`
  color: ${(props) => props.theme.text};
  font-weight: bold;
`;

const PokemonContainer = styled.div`
  width: 500px;
  margin: 0 auto;
  margin-top: 20px;
`;

export default function CatchedList() {
  const { catchedPokemons } = useContext(PokemonContext);

  const catchedItems = catchedPokemons.map((pokemonID) => (
    <CatchedItem
      image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemonID}.png`}
      key={pokemonID}
      id={pokemonID}
    />
  ));

  return (
    <Container>
      <BallContainer>
        <img alt="pokeball" src={pokeball} width="150" />
        <span>Gotta Catch 'Em All</span>
      </BallContainer>
      <PokemonContainer>{catchedItems}</PokemonContainer>
    </Container>
  );
}
