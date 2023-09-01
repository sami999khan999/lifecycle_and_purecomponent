import React, { Component } from "react";

export default class RegularComp extends Component {
  render() {
    console.log("Regular Component");
    return (
      <div>
        <h1>Regular Component {this.props.number}</h1>
      </div>
    );
  }
}
