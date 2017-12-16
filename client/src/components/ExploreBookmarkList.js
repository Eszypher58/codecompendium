import React, { Component } from "react";
import Add from ".././assets/add.png";

// Import Default Images
import HTMLIMG from ".././assets/html.png";
import CSSIMG from ".././assets/css.png";
import JavascriptIMG from ".././assets/javascript.png";
import JqueyIMG from ".././assets/jquery.png";
import ReactIMG from ".././assets/react.png";
import NodejsIMG from ".././assets/nodejs.png";
import DatabaseIMG from ".././assets/database.png";
import NPMIMG from ".././assets/npm.png";
import APIIMG from ".././assets/api.png";
import AngularIMG from ".././assets/angular.png";
import RubyIMG from ".././assets/ruby.png";
import FrameworkIMG from ".././assets/framework.png";
import MiscIMG from ".././assets/misc.png";
import DesignIMG from ".././assets/design.png";
import CplusIMG from ".././assets/c++.png";
import PythonIMG from ".././assets/python.png";
import JobIMG from ".././assets/jobs.png";
import HumorIMG from ".././assets/humor.png";


const ExploreBookmarkList = (props) => {

  console.log("this is the passed prop from mybookmark:", props);

  //const collectionCategories = {REACT:ReactIMG, JAVASCRIPT:JavascriptIMG, NODE:NodejsIMG, EXPRESS:ExpressjsIMG};

  let catImg = "";

  switch(props.category) {

    case "HTML":
      catImg = HTMLIMG;
      break;

    case "CSS":
      catImg = CSSIMG;
      break;

    case "JAVASCRIPT":
      catImg = JavascriptIMG;
      break;

    case "JQUERY":
      catImg = JqueyIMG;
      break;

    case "REACT":
      catImg = ReactIMG;
      break;

    case "NODEJS":
      catImg = NodejsIMG;
      break;
    
    case "DATABASES":
      catImg = DatabaseIMG;
      break;
    
    case "NPM":
      catImg = NPMIMG;
      break;

    case "API":
      catImg = APIIMG;
      break;

    case "ANGULAR":
      catImg = AngularIMG;
      break;

    case "RUBY":
      catImg = RubyIMG;
      break;

    case "FRAMEWORKS":
      catImg = FrameworkIMG;
      break;

    case "MISC":
      catImg = MiscIMG;
      break;

    case "DESIGN":
      catImg = DesignIMG;
      break

    case "CPP":
      catImg = CplusIMG;
      break

    case "PYTHON":
      catImg = PythonIMG;
      break

    case "JOBS":
      catImg = JobIMG;
      break

    case "HUMOR":
      catImg = HumorIMG;
      break
  }

  
  const bookmarkedItem = props.bookmarks;

  return (
    <div>
    <h3 className="title">ALL {props.category}</h3>
    {bookmarkedItem.length ? 
      
(bookmarkedItem.map(item => {

console.log("This is item passed to map:", item);

const {title, meta_tag_link, link, date, description, categories, like, dislike, _id} = item;

console.log(categories.toUpperCase(), props.category);

if (categories.toUpperCase() === props.category){

return (

<div className="card">

{/*<a href="#" className="deleteButton" id={_id} onClick={props.onClickDelete}><i className="fa fa-trash" aria-hidden="true"></i> Delete</a>*/}

<div className="img-container">
<img className="img-responsive" src={meta_tag_link || catImg} alt={categories} />
</div>

<div className="card-body">
<a className="card-title" href={link} target="_blank">{title}</a>
<p className="card-text truncate">{description}</p>

<div className="user">
<a href="#"><span>{props.name}</span></a>
</div>

<div className="like">
<a href="#"><i className="fa fa-thumbs-o-up like-icon" aria-hidden="true" onClick={props.onClickLike} id={_id + "&" + props.userId}></i></a> <span>{like}</span>
</div>

<div className="dislike">
<a href="#"><i className="fa fa-thumbs-o-down dislike-icon" aria-hidden="true" onClick={props.onClickDislike} id={_id + "&" + props.userId}></i></a> <span>{dislike}</span>
</div>
</div>
</div>

)

}})) : (<h3></h3>) }
    </div>
  );
}


export default ExploreBookmarkList;