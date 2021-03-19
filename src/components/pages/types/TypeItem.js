import React from "react";
import styled from "styled-components";

const TypeContainer = styled.div`
  width: 100px;
  margin: 0 auto;
  display: inline-block;
  padding: 10px;
`;

const Type = styled.div`
  background: linear-gradient(black, green);
  color: white;
  padding: 5px;
`;

export default function TypeItem(props) {
  return (
    <TypeContainer>
      <Type>{props.name}</Type>
    </TypeContainer>
  );
}
