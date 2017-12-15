import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../.././assets/logo.png";
import Bubbles from '../../components/Bubbles';

class Login extends Component {
  render() {
    return (
      <div className="container">
        <Bubbles />
        <div className="row">
          <div className="col-md-offset-4">
            <div id="content" >
              <div class="card login">

                <div class="header text-center">
                  <img id="logo" src={Logo} />
                  <p class="login-welcome">Social bookmarking for web developers</p>
                </div>

                <div class="card-body text-center">

                  {/*<a class="github-login" href="/auth/google">Log in with Google</a>*/}

                  <div class="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div>
                  

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
