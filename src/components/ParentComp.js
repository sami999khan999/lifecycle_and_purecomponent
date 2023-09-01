import React, { Component } from "react";
import PureComp from "./PureComp";
import RegularComp from "./RegularComp";

export default class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        number: 1,
      });
    }, 1000);
  }

  render() {
    console.log("Parent Component");
    return (
      <div>
        <PureComp number={this.state.number} />
        <RegularComp number={this.state.number} />
      </div>
    );
  }
}
