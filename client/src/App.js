import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

// Pages
import MyBookmark from "./pages/MyBookmark";
import MyCollection from "./pages/MyCollection";
import ExploreBookmark from "./pages/ExploreBookmark";
import ExploreCollection from "./pages/ExploreCollection";
/*import ExploreCollectionBubble from "./pages/ExploreCollectionBubble";*/
import Login from "./pages/Login";


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/*/mybookmark/*" component={MyBookmark} />
          <Route exact path="/*/mycollection" component={MyCollection} />
          <Route exact path="/explorebookmark" component={ExploreBookmark} />
          <Route exact path="/explorecollection" component={ExploreCollection} />
          {/*<Route exact path="/explorecollectionbubble" component={ExploreCollectionBubble} />*/}
        </Switch>
      </Router>
    );
  }
}

export default App;



