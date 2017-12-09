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
    
        const id = parseURL(window.location.href).pathname.split("/")[1]; 
        console.log(id);
        this.setState({userId: id});
    
        axios.get("/api/name/" + id).then((res => {
    
          this.setState({userName: res.data});

          //console.log(this.state.userId, this.state.userName);
    
  }))

    axios.get("/api/save_entity_count/" + id).then((res) => {

      this.setState({categoriesCount: res.data});

      console.log("returned from /api/save_entity_count", this.state.categoriesCount);



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