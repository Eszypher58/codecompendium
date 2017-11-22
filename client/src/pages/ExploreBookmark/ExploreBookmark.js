import React, { Component } from "react";
import { Link } from "react-router-dom";

// Components
import Aside from '../../components/Aside';
import Header from "../../components/Header";
import BookmarkList from "../../components/BookmarkList";


class ExploreBookmark extends Component {
  render() {
    return (
      <div id="content">
        <Header />
        <BookmarkList />
      </div>
    );
  }
}

export default ExploreBookmark;