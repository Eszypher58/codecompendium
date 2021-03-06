import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import parseURL from "parse-url";
import BG from "../../assets/bg.png";

// Components
import Aside from '../../components/Aside';
import Header from "../../components/Header";
import BookmarkList from "../../components/BookmarkList";
import AddBookmark from "../../components/AddBookmark";
import DeleteBookmark from "../../components/DeleteBookmark";

class MyBookmark extends Component {

  state = {
    bookmarkedItem: [],
    userName: "",
    userId: "",
    title: "",
    link: "",
    categories: "HTML",
    selectedCategory: "",
    description: "",
    deleteId: "",
    isOpenAdd: false,
    isOpenDelete: false
  }

  componentDidMount(){

    const id = parseURL(window.location.href).pathname.split("/")[1];
    const selectedCategory = parseURL(window.location.href).pathname.split("/").slice(-1)[0];

    this.setState({userId: id});
    this.setState({selectedCategory: selectedCategory.toUpperCase()});

    axios.get("/api/name/" + id).then((res => {

      this.setState({userName: res.data});

  }))

  axios.get("/api/save_entity/" + id).then((res) => {

    this.setState({bookmarkedItem: res.data});

    })
  }

  toggleAddBookmark = () => {

    this.setState({
      isOpenAdd: !this.state.isOpenAdd
    });
  }

  toggleDeleteBookmark = (e) => {

    this.setState({
      isOpenDelete: !this.state.isOpenDelete,
      deleteId: e.target.id,
    });
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

    let id = e.target.id;

    axios.delete("/api/remove_entity/" + id).then(res => {

        this.setState({bookmarkedItem:res.data, isOpenDelete: false,})

    }).catch(err => console.log(err));
  }

  handleLike = (e) => {

    e.preventDefault();

    let id = e.target.id;

    axios.post("/api/like/" + id).then(res => {

      this.setState({bookmarkedItem:res.data})

    }).catch(err => console.log(err));


  }

  handleDislike = (e) => {


    e.preventDefault();

        let id = e.target.id;

      axios.post("/api/dislike/" + id).then(res => {

        this.setState({bookmarkedItem:res.data})

      }).catch(err => console.log(err));


  }

handleSubmitButton = (e) => {

  e.preventDefault();

  let id = e.target.id;

  const {title, link, categories, description } = this.state;

  let item = {

    title: title,
    link: link,
    categories: categories,
    description: description,

  }

  axios.post("/api/save_entity/" + id, {item}).then(res => {

    this.setState({bookmarkedItem: res.data, isOpenAdd: false,})

  }).catch(err => console.log(err));

}

  render() {
    return (
      <div className="wrapper">

        <Aside userId={this.state.userId}/>

        <div id="content">
        <Header />
        <BookmarkList
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

        <AddBookmark show={this.state.isOpenAdd}
            onClose={this.toggleAddBookmark}
            onAdd={this.handleSubmitButton}
            userId={this.state.userId}>
            <img src={BG} className="modal-bg"/>
            <span><h4><i className="fa fa-bookmark-o modal-icon" aria-hidden="true"></i><b> Add Bookmark</b></h4></span>
            <p>Insert a link to any web page here.</p>
            <br />
            <form>
              <div class="form-group">
                <label for="collection" className="form-title">Choose a collection</label>
                <select className="form-control" id="collection" value={this.state.categories} onChange={this.handleCategories}>
                  <option>HTML</option>
                  <option>CSS</option>
                  <option>JAVASCRIPT</option>
                  <option>JQUERY</option>
                  <option>REACT</option>
                  <option>NODEJS</option>
                  <option>DATABASES</option>
                  <option>NPM</option>
                  <option>API</option>
                  <option>ANGULAR</option>
                  <option>RUBY</option>
                  <option>FRAMEWORKS</option>
                  <option>MISC</option>
                  <option>DESIGN</option>
                  <option>CPP</option>
                  <option>PYTHON</option>
                  <option>JOBS</option>
                  <option>HUMOR</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="link" className="form-title">Link</label>
                <input type="text" className="form-control" id="link" onChange={this.handleLink} placeholder="Insert link" />
              </div>

              <div className="form-group">
                <label htmlFor="title" className="form-title">Title</label>
                <input type="text" className="form-control" id="title" onChange={this.handleTitle} placeholder="Enter title" />
              </div>

              <div className="form-group">
                <label htmlFor="text" className="form-title">Description</label>
                <textarea className="form-control" id="text" rows="3" onChange={this.handleDescription} placeholder="Enter description"></textarea>
              </div>
            </form>
            <br />
          </AddBookmark>

          <DeleteBookmark show={this.state.isOpenDelete}
            onClose={this.toggleDeleteBookmark}
            onDelete={this.handleDeleteButton}
            bookmarkId={this.state.deleteId}
            userId={this.state.userId}>
            <span><h4><i className="fa fa-trash-o" aria-hidden="true"></i><b> Delete Bookmark?</b></h4></span>
            <br />
            <p>Once you delete the bookmark will be gone forever. Are you sure you want to proceed?</p>
            <br />
            <br />
          </DeleteBookmark>


      </div>
    );
  }
}

export default MyBookmark;
