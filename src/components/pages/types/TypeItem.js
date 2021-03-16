import React, { Component } from "react";

export default class TypeItem extends Component {
  render() {
    return (
      <div className="type-container">
        <div className="type">{this.props.name}</div>
      </div>
    );
  }
}
