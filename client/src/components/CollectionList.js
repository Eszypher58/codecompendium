import React, { Component } from "react";
import ReactIMG from ".././assets/react.png";
import JavascriptIMG from ".././assets/javascript.png";
import NodejsIMG from ".././assets/nodejs.png";
import ExpressjsIMG from ".././assets/express.png";

const CollectionList = (props) => {
  return (
    <div>
      <h3 className="title">{props.title}'s Collection</h3>

        <div>
          <a href="#">
            <div className="card collection-card">
              <div className="img-container collection-img">
                <i class="fa fa-plus-circle add-new-icon" aria-hidden="true"></i>
              </div>
              <div className="content">
                <a href="#">Add Collection</a>
              </div>
            </div>
         </a>
        </div>
            
        <div className="card collection-card">
          <a href="#" className="edit-btn"><i class="fa fa-trash" aria-hidden="true"></i> Delete</a>
          <div className="img-container collection-img">
            <img src={ReactIMG} alt="" />
          </div>

          <div className="content">
            <a href="#">React</a>
            <div className="file">
              <i class="fa fa-file-text-o" aria-hidden="true"></i> <span>10</span> files
            </div>
          </div>
        </div>

        <div className="card collection-card">
          <a href="#" className="edit-btn"><i class="fa fa-trash" aria-hidden="true"></i> Delete</a>
          <div className="img-container collection-img">
            <img src={JavascriptIMG} alt="" />
          </div>

          <div className="content">
            <a href="#">JavaScript</a>
            <div className="file">
              <i class="fa fa-file-text-o" aria-hidden="true"></i> <span>23</span> files
            </div>
          </div>
        </div>

        <div className="card collection-card">
          <a href="#" className="edit-btn"><i class="fa fa-trash" aria-hidden="true"></i> Delete</a>
          <div className="img-container collection-img">
            <img src={NodejsIMG} alt="" />
          </div>

          <div className="content">
            <a href="#">Express.js</a>
            <div className="file">
              <i class="fa fa-file-text-o" aria-hidden="true"></i> <span>2</span> files
            </div>
          </div>
        </div>

        <div className="card collection-card">
          <a href="#" className="edit-btn"><i class="fa fa-trash" aria-hidden="true"></i> Delete</a>
          <div className="img-container collection-img">
            <img src={ExpressjsIMG} alt="" />
          </div>

          <div className="content">
            <a href="#">Node.js</a>
            <div className="file">
              <i class="fa fa-file-text-o" aria-hidden="true"></i> <span>8</span> files
            </div>
          </div>
        </div>
        
    </div>
  );
}


export default CollectionList;