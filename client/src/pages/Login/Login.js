import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div id="content">
        <hr></hr>
        <a href="http://localhost:3001/auth/google">A link to google oauth via check component </a>
        <hr></hr>
        <a href="http://localhost:3001/auth/github">A link to github oauth via check component </a>
        <hr></hr>
      </div>
    );
  }
}

export default Login;