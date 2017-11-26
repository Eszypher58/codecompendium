import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import parseURL from "parse-url";

// Components
import Aside from '../../components/Aside';
import Header from "../../components/Header";
import BookmarkList from "../../components/BookmarkList";

class MyBookmark extends Component {

  state = {

    bookmarkedItem: [],
    userName: "",
    userId: "",
    title: "",
    link: "",
    categories: "",
    description: "",
  }

  componentDidMount(){

    const id = parseURL(window.location.href).pathname.split("/")[1]; 
    console.log(id);
    this.setState({userId: id});

    axios.get("/api/name/" + id).then((res => {

      //console.log(res.data);

      this.setState({userName: res.data});

    }))

    axios.get("/api/save_entity/" + id).then((res) => {

      console.log("mybookmark => componentDidMount")

      //console.log(res);

      this.setState({bookmarkedItem: res.data});

      //console.log(this.state.bookmarkedItem);

    })

  }

  handleTitle = (e) => {
    
    this.setState({title: e.target.value})
    
  }

  handleLink = (e) => {
    
    this.setState({link: e.target.value})
    
  }

  handleCategories = (e) => {
    
    this.setState({categories: e.target.value})
    
  }

  handleDescription = (e) => {
    
    this.setState({description: e.target.value})
    
  }



  handleDeleteButton = (e) => {
    
    e.preventDefault();
    
    console.log(e.target.id);
    
    let id = e.target.id;
    
    axios.delete("/api/remove_entity/" + id).then(res => {
    
      /*
        console.log(res);
        axios.get("/api/save_entity/" + id).then(res => {
            
          console.log(res.data);
          this.setState({bookmarkedItem: res.data})
            
        })
        */

        console.log(res.data);
        this.setState({bookmarkedItem:res.data})
    
    }).catch(err => console.log(err));
}

handleSubmitButton = (e) => {
  
  e.preventDefault();

  //console.log(this.state);
  //console.log(e.target);
  
  let id = e.target.id;

  const {title, link, categories, description } = this.state;

  let item = {

    title: title,
    link: link,
    categories: categories,
    description: description,

  }

  axios.post("/api/save_entity/" + id, {item}).then(res => {

    //console.log(res.data);
    this.setState({bookmarkedItem: res.data})

  }).catch(err => console.log(err));
  
}

  render() {
    return (
      
      <div id="content">
        <Header />
        <BookmarkList bookmarks={this.state.bookmarkedItem} name={this.state.userName} deleteButton={this.handleDeleteButton}/>


        <hr></hr>

        <form>
            <p>Title</p>
            <input id="title" placeholder="some text" type="text" onChange={this.handleTitle}></input>
            <p>Link</p>
            <input id="link" placeholder="some text" type="text" onChange={this.handleLink}></input>
            <p>Categories</p>
            <input id="categories" placeholder="some text" type="text" onChange={this.handleCategories}></input>
            <p>Description</p>
            <input id="description" placeholder="some text" type="text" onChange={this.handleDescription}></input>     
            <button id={this.state.userId} onClick={this.handleSubmitButton}>Submit</button>
        
        </form>

        <hr></hr>


      </div>
      
    );
  }
}

export default MyBookmark;