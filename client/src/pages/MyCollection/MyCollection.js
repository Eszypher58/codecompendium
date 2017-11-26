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
    categories: [],
    userName: "",
    userId: "",

  }

  componentDidMount(){
    
        const id = parseURL(window.location.href).pathname.split("/")[1]; 
        console.log(id);
        this.setState({userId: id});
    
        axios.get("/api/name/" + id).then((res => {
    
          this.setState({userName: res.data});

          console.log(this.state.userId, this.state.userName);
    
  }))
}


  render() {
    return (

      <div class="wrapper">
      <Aside userId={this.state.userId}/>

        <div id="content">
          {/*<Header />*/}
          <CollectionList
            title={this.state.userName}
            userId={this.state.userId}
          />
        </div>
      </div>
    );
  }
}

export default MyCollection;