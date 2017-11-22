import React, { Component } from "react";
import { Link } from "react-router-dom";

// Components
import Aside from '../../components/Aside';
import Header from "../../components/Header";
import BookmarkList from "../../components/BookmarkList";
import CollectionList from "../../components/CollectionList";


class MyCollection extends Component {
  render() {
    return (
      <div id="content">
        <Header />
        <CollectionList
          title="My Collections"
        />
      </div>
    );
  }
}

export default MyCollection;