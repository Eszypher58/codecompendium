import React, { Component } from "react";
import ReactDOM from "react-dom";
import { makeBubbles } from "../helpers/canvas";

class Bubbles extends React.Component {
  componentDidMount() {
    let canvas = this.refs.myCanvas;
    makeBubbles(canvas);
  };
  render() {
    return (
      <div>
        <canvas id="canvas" ref="myCanvas"></canvas>
      </div>
   );
  }
}

export default Bubbles;
