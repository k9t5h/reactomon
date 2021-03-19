import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "../../styles/Container";
import TypeItem from "./TypeItem";

export default function TypeList() {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/type")
      .then((response) => setTypes(response.data.results));
  }, []);

  const displayTypeItems = () => {
    return types.map((type) => (
      <TypeItem name={type.name} key={type.url.split("/")[6]} />
    ));
  };

  return <Container>{displayTypeItems()}</Container>;
}
