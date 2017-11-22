import React, { Component } from "react";
import { Link } from "react-router-dom";

// Components
import Aside from '../../components/Aside';
import Header from "../../components/Header";
import BookmarkList from "../../components/BookmarkList";
import CollectionList from "../../components/CollectionList";


class ExploreCollection extends Component {
  render() {
    return (
      <div id="content">
        <Header />
        <CollectionList
          title="Explore Collections"
        />
      </div>
    );
  }
}

export default ExploreCollection;