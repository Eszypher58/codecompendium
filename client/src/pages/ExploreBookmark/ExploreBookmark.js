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
    categories: "HTML",
    selectedCategory: "",
    description: "",
    deleteId: "",
    isOpenAdd: false,
    isOpenDelete: false
  }

  componentDidMount(){

    const id = parseURL(window.location.href).pathname.split("/")[1];
    //console.log(id);
    //console.log(parseURL(window.location.href).pathname.split("/").slice(-1)[0]);
    const selectedCategory = parseURL(window.location.href).pathname.split("/").slice(-1)[0];
    console.log(id, selectedCategory);
    //this.setState({userId: id});
    this.setState({selectedCategory: selectedCategory.toUpperCase()});
    console.log(this.state.selectedCategory);

  axios.get("/api/global_saved_item/" + selectedCategory).then((res) => {

    console.log("mybookmark => componentDidMount")
    //console.log(res);

    this.setState({bookmarkedItem: res.data});
    console.log(this.state.bookmarkedItem);
    })
  }

  // toggleAddBookmark = () => {
  //
  //   console.log("clicked add bookmark");
  //
  //   this.setState({
  //     isOpenAdd: !this.state.isOpenAdd
  //   });
  // }
  //
  // toggleDeleteBookmark = (e) => {
  //
  //   console.log(e.target.id);
  //
  //   this.setState({
  //     isOpenDelete: !this.state.isOpenDelete,
  //     deleteId: e.target.id,
  //   });
  // }

  // handleTitle = (e) => {
  //   this.setState({title: e.target.value})
  // }
  //
  // handleLink = (e) => {
  //   this.setState({link: e.target.value})
  // }
  //
  // handleCategories = (e) => {
  //   this.setState({categories: e.target.value})
  // }
  //
  // handleDescription = (e) => {
  //   this.setState({description: e.target.value})
  // }
  //
  // handleDeleteButton = (e) => {
  //
  //   e.preventDefault();
  //
  //   console.log(e.target.id);
  //
  //   let id = e.target.id;
  //
  //   axios.delete("/api/remove_entity/" + id).then(res => {
  //
  //       console.log("data from remove entity (delete button)", res.data);
  //       this.setState({bookmarkedItem:res.data, isOpenDelete: false,})
  //
  //   }).catch(err => console.log(err));
  // }

  handleLike = (e) => {

    e.preventDefault();

    console.log(e.target.id);

    let id = e.target.id;

    axios.post("/api/like/" + id).then(res => {

      console.log("data returned from /api/like/", res.data);

      this.setState({bookmarkedItem:res.data})

    }).catch(err => console.log(err));


  }

  handleDislike = (e) => {

    axios.post().then(res => {

      console.log(e.target.id);

      let id = e.target.id;

      axios.post("/api/dislike/" + id).then(res => {

        console.log("data returned from /api/dislike/", res.data);

        this.setState({bookmarkedItem:res.data})

      }).catch(err => console.log(err));


    })

  }

// handleSubmitButton = (e) => {
//
//   e.preventDefault();
//
//   let id = e.target.id;
//
//   console.log(id);
//
//   const {title, link, categories, description } = this.state;
//
//   let item = {
//
//     title: title,
//     link: link,
//     categories: categories,
//     description: description,
//
//   }
//
//   console.log("item is:", item);
//
//   axios.post("/api/save_entity/" + id, {item}).then(res => {
//
//     //console.log(res.data);
//     this.setState({bookmarkedItem: res.data, isOpenAdd: false,})
//
//   }).catch(err => console.log(err));
//
// }

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
          />
        </div>

        {/* <AddBookmark show={this.state.isOpenAdd}
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
                  <option>JavaScript</option>
                  <option>jQuery</option>
                  <option>React</option>
                  <option>Node JS</option>
                  <option>Databases</option>
                  <option>NPM Packages</option>
                  <option>APIs</option>
                  <option>Angular</option>
                  <option>Ruby on Rails</option>
                  <option>Frameworks</option>
                  <option>Misc</option>
                  <option>Design</option>
                  <option>CPP</option>
                  <option>Python</option>
                  <option>Jobs</option>
                  <option>Humor</option>
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
          </AddBookmark> */}

       {/*   <DeleteBookmark show={this.state.isOpenDelete}
            onClose={this.toggleDeleteBookmark}
            onDelete={this.handleDeleteButton}
            bookmarkId={this.state.deleteId}
            userId={this.state.userId}>
            <span><h4><i className="fa fa-trash-o" aria-hidden="true"></i><b> Delete Bookmark?</b></h4></span>
            <br />
            <p>Once you delete the bookmark will be gone forever. Are you sure you want to proceed?</p>
            <br />
            <br />
          </DeleteBookmark>*/}

         <div class="notify"><span id="notifyType" class=""></span></div>


      </div>
    );
  }
}

export default ExploreBookmark;
