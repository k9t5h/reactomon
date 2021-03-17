import React from "react";

export default function TypeItem(props) {
  return (
    <div className="type-container">
      <div className="type">{props.name}</div>
    </div>
  );
}
