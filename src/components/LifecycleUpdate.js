import React, { Component } from "react";

class LifecycleUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Luffu",
    };
  }

  static getDerivedStateFromProps() {
    console.log("static getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  // shouldComponentUpdate() {
  //   console.log("shouldComponentUpdate");
  //   return null;
  // }

  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  updateState() {
    this.setState({
      name: "Zoro",
    });
  }

  render() {
    console.log("Render");
    return (
      <div>
        <button onClick={() => this.updateState()}>Update</button>
      </div>
    );
  }
}

export default LifecycleUpdate;
