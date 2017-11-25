import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

// Components
import Aside from '../../components/Aside';
import Header from "../../components/Header";
import BookmarkList from "../../components/BookmarkList";

class MyBookmark extends Component {

  state = {

    bookmarkedItem: [],

  }

  componentDidMount(){

    axios.get("/api/save_entity").then((res) => {

      console.log("mybookmark => componentDidMount")

      //console.log(res.data);

      this.setState({bookmarkedItem: res.data});

      //console.log(this.state.bookmarkedItem);

    })

  }

  handleDeleteButton = (e) => {
    
    e.preventDefault();
    
    console.log(e.target.id);
    
    let id = e.target.id;
    
    axios.delete("/api/remove_entity/" + id).then(res => {
    
        console.log(res);
        axios.get("api/save_entity").then(res => {
            
          console.log(res.data);
          this.setState({bookmarkedItem: res.data})
            
        })
        
    
    }).catch(err => console.log(err));
}

handleSubmitButton = (e) => {
  
  e.preventDefault();
  
  console.log(e.target.id);
  
  let id = e.target.id;
  
  axios.delete("/api/remove_entity/" + id).then(res => {
  
      console.log(res);
      axios.get("api/save_entity").then(res => {
          
        console.log(res.data);
        this.setState({bookmarkedItem: res.data})
          
      })
      
  
  }).catch(err => console.log(err));
}

  render() {
    return (
      
      <div id="content">
        <Header />
        <BookmarkList bookmarks={this.state} deleteButton={this.handleDeleteButton}/>


        <hr></hr>

        <form>
            <p>Title</p>
            <input id="title" placeholder="some text" type="text"></input>
            <p>Link</p>
            <input id="link" placeholder="some text" type="text"></input>
            <p>Categories</p>
            <input id="categories" placeholder="some text" type="text"></input>
            <p>Description</p>
            <input id="description" placeholder="some text" type="text"></input>     
            <button id="submit">Submit</button>
        
        </form>

        <hr></hr>


      </div>
      
    );
  }
}

export default MyBookmark;