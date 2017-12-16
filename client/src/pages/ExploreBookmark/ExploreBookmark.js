import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import parseURL from "parse-url";
import BG from "../../assets/bg.png";

// Components
import Aside from '../../components/Aside';
import Header from "../../components/Header";
import ExploreBookmarkList from "../../components/ExploreBookmarkList";
import AddBookmark from "../../components/AddBookmark";
import DeleteBookmark from "../../components/DeleteBookmark";

class ExploreBookmark extends Component {

  state = {
    bookmarkedItem: [],
    userName: "",
    userId: "",
    title: "",
    link: "",
    categories: "html",
    selectedCategory: "",
    description: "",
    deleteId: "",
    isOpenAdd: false,
    isOpenDelete: false
  }

  componentDidMount(){

    const selectedCategory = parseURL(window.location.href).pathname.split("/").slice(-1)[0];

    this.setState({selectedCategory: selectedCategory.toUpperCase()});


    const id = JSON.parse(sessionStorage.myUserEntity).Id;
    
    this.setState({userId: id});

  axios.get("/api/global_saved_item/" + selectedCategory).then((res) => {

    this.setState({bookmarkedItem: res.data});

    })
  }

  handleLike = (e) => {

    e.preventDefault();

    let id = e.target.id;

    axios.post("/api/global_saved_item/like/" + id).then(res => {

      this.setState({bookmarkedItem:res.data})

    }).catch(err => console.log(err));


  }

  handleDislike = (e) => {

    e.preventDefault();
    
            let id = e.target.id;
    
          axios.post("/api/global_saved_item/dislike/" + id).then(res => {
    
            this.setState({bookmarkedItem:res.data})
    
          }).catch(err => console.log(err));
    

  }

  render() {
    return (
      <div className="wrapper">

        <Aside userId={this.state.userId}/>

        <div id="content">
        <Header />
        <ExploreBookmarkList
          bookmarks={this.state.bookmarkedItem}
          name={this.state.userName}
          userId={this.state.userId}
          category={this.state.selectedCategory}
          onClickDelete={this.toggleDeleteBookmark}
          onClick={this.toggleAddBookmark}
          onClickLike={this.handleLike}
          onClickDislike={this.handleDislike}
          />
        </div>


         <div class="notify"><span id="notifyType" class=""></span></div>


      </div>
    );
  }
}

export default ExploreBookmark;
