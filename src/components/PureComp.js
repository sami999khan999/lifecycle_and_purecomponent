import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
    console.log("Pure Component");
    return (
      <div>
        <h1>PureComponent: {this.props.number}</h1>
      </div>
    );
  }
}

export default PureComp;
