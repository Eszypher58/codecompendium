import React, { Component } from "react";
import ReactIMG from ".././assets/react.png";
import JavascriptIMG from ".././assets/javascript.png";
import NodejsIMG from ".././assets/nodejs.png";
import ExpressjsIMG from ".././assets/express.png";


const BookmarkList = (props) => {

  console.log("this is the passed prop from mybookmark:", props);

  //const collectionCategories = {REACT:ReactIMG, JAVASCRIPT:JavascriptIMG, NODE:NodejsIMG, EXPRESS:ExpressjsIMG};

  let catImg = "";

  switch(props.category) {

    case "REACT":
      catImg = ReactIMG;
      break;
    
    case "JAVASCRIPT":
      catImg = JavascriptIMG;
      break;
    
    case "NODE":
      catImg = NodejsIMG;
      break;

    case "EXPRESS":
      catImg = ExpressjsIMG;
      break;

  }


  const bookmarkedItem = props.bookmarks;

  return (
    <div>

      <h3 className="title">{props.category}</h3>




        <div>
        <a href="#" onClick={props.onClick}>
            <div className="card">
              <div className="img-container">
                <i className="fa fa-plus-circle add-new-icon" aria-hidden="true"></i>
              </div>
              <div className="content">
                <a href="#">Add bookmark</a>
              </div>
            </div>
            </a>
        </div>


        {bookmarkedItem.length ? 
                          
          (bookmarkedItem.map(item => {

            console.log("This is item passed to map:", item);

            const {title, meta_tag_link, link, date, description, categories, like, dislike, _id} = item;

            if (categories.toUpperCase() === props.category){

              return (
                <div className="card">
                <a href="#" className="edit-btn deleteButton" id={_id} onClick={props.onClickDelete}><i className="fa fa-trash" aria-hidden="true"></i> Delete</a>
                <div className="img-container">
                  <img src={meta_tag_link || catImg} alt={categories} />
                </div>
      
                <div className="content">
                  <a href={link} target="_blank">{title}</a>

                  <p>{description}</p>
      
                  <div className="user">
                    <a href="#"><span>{props.name}</span></a>
                  </div>
      
                  <div className="like">
                    <a href="#"><i className="fa fa-heart like-icon" aria-hidden="true" onClick={props.onClickLike} id={_id + "&" + props.userId}></i></a> <span>{like}</span> likes
                  </div>
      
                </div>
              </div>
              )

        }})) : (<h3></h3>) }

            
        <div className="card">
          <a href="#" className="edit-btn"><i className="fa fa-trash" aria-hidden="true"></i> Delete</a>
          <div className="img-container">
            <img src="http://blog.teamtreehouse.com/wp-content/uploads/2014/05/codingconfidence.jpg" alt="Mountain View" />
          </div>

          <div className="content">
            <a href="#">How it feels to learn JavaScript in 2017</a>

            <div className="user">
              <a href="#"><span>Guilherme Henrique</span></a>
            </div>

            <div className="like">
              <a href="#"><i className="fa fa-heart like-icon" aria-hidden="true"></i></a> <span>223</span> likes
            </div>

          </div>
        </div>

        <div className="card">
          <a href="#" className="edit-btn"><i className="fa fa-trash" aria-hidden="true"></i> Delete</a>
          <div className="img-container">
            <img src="http://ng-center.com/wp-content/uploads/2016/05/UX-developer-01.jpg" alt="Mountain View" />
          </div>

          <div className="content">
            <a href="#">A Study Plan To Cure JavaScript Fatigue</a>

            <div className="user">
              <a href="#"><span>Guilherme Henrique</span></a>
            </div>

            <div className="like">
              <a href="#"><i className="fa fa-heart like-icon" aria-hidden="true"></i></a> <span>51</span> likes
            </div>

          </div>
        </div>

        <div className="card">
          <a href="#" className="edit-btn"><i className="fa fa-trash" aria-hidden="true"></i> Delete</a>
          <div className="img-container">
            <img src="https://udemy-images.udemy.com/course/750x422/260756_bac8_3.jpg" alt="Mountain View" />
          </div>

          <div className="content">
            <a href="#">10 Interview Questions Every JavaScript Developer Should Know</a>

            <div className="user">
              <a href="#"><span>Guilherme Henrique</span></a>
            </div>

            <div className="like">
              <a href="#"><i className="fa fa-heart like-icon" aria-hidden="true"></i></a> <span>105</span> likes
            </div>

          </div>
        </div>

        <div className="card">
          <a href="#" className="edit-btn"><i className="fa fa-trash" aria-hidden="true"></i> Delete</a>
          <div className="img-container">
            <img src="https://h2ctwnk7c3-flywheel.netdna-ssl.com/wp-content/uploads/2016/02/web-developer.jpg" alt="Mountain View" />
          </div>

          <div className="content">
            <a href="#">Top JavaScript Frameworks & Topics to Learn in 2017</a>

            <div className="user">
              <a href="#"><span>Guilherme Henrique</span></a>
            </div>

            <div className="like">
              <a href="#"><i className="fa fa-heart like-icon" aria-hidden="true"></i></a> <span>34</span> likes
            </div>

          </div>
        </div>

        <div className="card">
          <a href="#" className="edit-btn"><i className="fa fa-trash" aria-hidden="true"></i> Delete</a>
          <div className="img-container">
            <img src="https://cdn-images-1.medium.com/max/1600/1*WWyilxdduXEkWudAJaqKsA.jpeg" alt="Mountain View" />
          </div>

          <div className="content">
            <a href="#">Is Vanilla JavaScript worth learning? Absolutely.</a>

            <div className="user">
              <a href="#"><span>Guilherme Henrique</span></a>
            </div>

            <div className="like">
              <a href="#"><i className="fa fa-heart like-icon" aria-hidden="true"></i></a> <span>16</span> likes
            </div>

          </div>
        </div>

   
    </div>
  );
}


export default BookmarkList;