import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div id="content">
        <button className="btn btn-lg btn-primary" id=""><a href="/check">Login link (not working)</a></button>
        <button className="btn btn-lg btn-primary" id="loginButton">Login jquery</button>
        <hr></hr>
        <a href="/check">A link to github oauth via check component </a>
        <hr></hr>
      </div>
    );
  }
}

export default Login;