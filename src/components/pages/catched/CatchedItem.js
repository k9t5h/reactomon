import React from "react";
import { Link } from "react-router-dom";

export default function CatchedItem(props) {
  console.log(props.image);
  return (
    <Link to={"/pokemon/" + props.id}>
      <img
        alt="sprite shiny"
        src={props.image}
        height="75"
        style={{ border: "2px solid black", marginRight: "3px" }}
      />
    </Link>
  );
}
