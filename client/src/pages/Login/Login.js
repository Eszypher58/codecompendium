import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../.././assets/clogo.jpg";

class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-offset-4">
            <div id="content" >
              <div class="card login">

                <div class="header text-center">
                  <img id="logo" src={Logo} />
                  <p class="login-welcome">Bookmarking made for developers</p>
                </div>

                <div class="content text-center">
                  <a class="github-login" href="#"><i class="fa fa-github" aria-hidden="true"></i> Log in with Github</a>
                  
                  {/*<a href="http://localhost:3001/auth/google">A link to google oauth via check component </a>
                  <a href="http://localhost:3001/auth/github">A link to github oauth via check component </a>*/}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;