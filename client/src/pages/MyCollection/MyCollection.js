import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import parseURL from "parse-url";

// Components
import Aside from '../../components/Aside';
import Header from "../../components/Header";
import BookmarkList from "../../components/BookmarkList";
import CollectionList from "../../components/CollectionList";


class MyCollection extends Component {

  state = {
    categoriesCount: {},
    userName: "",
    userId: "",

  }

  componentDidMount(){

        const userEntity = JSON.parse(sessionStorage.myUserEntity);
        const id = userEntity.Id;
        const name = userEntity.Name;

        this.setState({userId: id});

        this.setState({userName: name});

        axios.post("/api/check/" + id, userEntity).then((res) => {

          axios.get("/api/save_entity_count/" + id).then((res) => {

                  this.setState({categoriesCount: res.data});

                })

        })



}


  render() {
    return (

      <div class="wrapper">
      <Aside userId={this.state.userId}/>

        <div id="content">
          <Header />
          <CollectionList
            userName={this.state.userName}
            userId={this.state.userId}
            categoriesCount={this.state.categoriesCount}
          />
        </div>
      </div>
    );
  }
}

export default MyCollection;
