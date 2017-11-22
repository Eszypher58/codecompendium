import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

// Components
import Aside from './components/Aside';

// Pages
import MyBookmark from "./pages/MyBookmark";
import MyCollection from "./pages/MyCollection";
import ExploreBookmark from "./pages/ExploreBookmark";
import ExploreCollection from "./pages/ExploreCollection";
import Login from "./pages/Login";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div class="wrapper">

            <Aside />
            
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/mybookmark" component={MyBookmark} />
              <Route exact path="/mycollection" component={MyCollection} />
              <Route exact path="/explorebookmark" component={ExploreBookmark} />
              <Route exact path="/explorecollection" component={ExploreCollection} />
            </Switch>

          </div>
       </div>
      </Router>
    );
  }
}

export default App;



