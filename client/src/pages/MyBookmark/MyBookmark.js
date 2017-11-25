import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// Components
import Aside from '../../components/Aside';
import Header from "../../components/Header";
import BookmarkList from "../../components/BookmarkList";

connect((store) => {

  console.log(store);

  return {

    items: store.itemArray

  }

})


class MyBookmark extends Component {
  render() {
    return (
      
      <div id="content">
        <Header />
        <BookmarkList />
      </div>
      
    );
  }
}

export default MyBookmark;