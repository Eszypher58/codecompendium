import React, { Component } from "react";
import axios from "axios";
//import passport from "passport";

import { Link } from "react-router-dom";

class Check extends Component {
  
    state = {
        
        data:"",
        
    }

    componentDidMount() {

        console.log("hit check.js");
/*
        var GitHubStrategy = require('passport-github2').Strategy;

        const GITHUB_CLIENT_ID = "9f864267db9eb6cd17ea";
        const GITHUB_CLIENT_SECRET = "55361f61718360f5a77388cfe87379ba8660140d";
        
        passport.serializeUser(function(user, done) {
          console.log(user);
          
          done(null, user);
          
        });
        
        passport.deserializeUser(function(obj, done) {
          console.log(obj)
          done(null, obj);
        });
        
        passport.use(new GitHubStrategy({
          clientID: GITHUB_CLIENT_ID,
          clientSecret: GITHUB_CLIENT_SECRET,
          callbackURL: "http://127.0.0.1:3001/welcome"
        },
        function(accessToken, refreshToken, profile, done) {

            console.log(profile);


        }));
        */
        
        axios.get("/auth/github").then(res => {
        

            console.log(res.request.responseURL);
            res.redirect(res.request.responseURL);
            this.setState({data: res.request.responseURL})
        
        }).catch(err => console.log(err))

    }

  
    render() {
    return (
      <div id="content">
        <h1>in check route</h1>
      </div>
    );
  }
}

export default Check;