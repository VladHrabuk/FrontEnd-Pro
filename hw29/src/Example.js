import React from "react";
import "./Example.css";

class Example extends React.Component {
  render() {
    return (
      <div className="bottom-line">
        <h4>{this.props.country}</h4>
      </div>
    );
  }
}

export default Example;
