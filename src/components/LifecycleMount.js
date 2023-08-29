import React, { Component } from "react";

class LifecycleMount extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    console.log("constructor");
  }

  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    console.log("return");
    return <div>lifecycleMount</div>;
  }
}

export default LifecycleMount;
