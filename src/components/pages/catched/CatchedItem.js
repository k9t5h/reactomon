import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Image = styled.img`
  height: 75;
  margin-right: 3px;
  border: 2px solid ${(props) => props.theme.borderColor};
`;

export default function CatchedItem(props) {
  return (
    <Link to={"/pokemon/" + props.id}>
      <Image alt="sprite shiny" src={props.image} />
    </Link>
  );
}
