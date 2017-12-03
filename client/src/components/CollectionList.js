import React, { Component } from "react";
import ReactCol from ".././assets/col-react.png";
import JSCol from ".././assets/col-js.png";
import NodeCol from ".././assets/col-node.png";
import HTMLCol from ".././assets/col-html.png";
import JQueryCol from ".././assets/col-jquery.png";
import FrameworksCol from ".././assets/col-frameworks.png";


const CollectionList = (props) => {
  return (
    <div>
      <h3 className="title">{props.title}</h3>

      <a href={"/"+ props.userId + "/mybookmark/react"}>
        <div className="card collection-card">
            <div className="img-container collection-img">
              <img src={ReactCol} alt="" />
            </div>

            <div className="card-body">
              <a href={"/"+ props.userId + "/mybookmark/react"}>React</a>

              <div className="user">
                <a href="#"><span>Chloe Chou</span></a>
              </div>

              <div className="file">
                <i class="fa fa-file-text-o" aria-hidden="true"></i> <span>10</span> files
              </div>
            </div>
        </div>
      </a>

      <a href={"/"+ props.userId + "/mybookmark/javascript"}>
        <div className="card collection-card">
            <div className="img-container collection-img">
              <img src={JSCol} alt="" />
            </div>

            <div className="card-body">
              <a href={"/"+ props.userId + "/mybookmark/javascript"}>JavaScript</a>

              <div className="user">
                <a href="#"><span>Chloe Chou</span></a>
              </div>

              <div className="file">
                <i class="fa fa-file-text-o" aria-hidden="true"></i> <span>10</span> files
              </div>
            </div>
        </div>
      </a>

      <a href={"/"+ props.userId + "/mybookmark/node"}>
        <div className="card collection-card">
            <div className="img-container collection-img">
              <img src={NodeCol} alt="" />
            </div>

            <div className="card-body">
              <a href={"/"+ props.userId + "/mybookmark/node"}>Node JS</a>

              <div className="user">
                <a href="#"><span>Chloe Chou</span></a>
              </div>

              <div className="file">
                <i class="fa fa-file-text-o" aria-hidden="true"></i> <span>10</span> files
              </div>
            </div>
        </div>
      </a>

      <a href="#">
        <div className="card collection-card">
            <div className="img-container collection-img">
              <img src={HTMLCol} alt="" />
            </div>

            <div className="card-body">
              <a href="#">HTML</a>

              <div className="user">
                <a href="#"><span>Chloe Chou</span></a>
              </div>

              <div className="file">
                <i class="fa fa-file-text-o" aria-hidden="true"></i> <span>10</span> files
              </div>
            </div>
        </div>
      </a>

      <a href={"/"+ props.userId + "/mybookmark/node"}>
        <div className="card collection-card">
            <div className="img-container collection-img">
              <img src={FrameworksCol} alt="" />
            </div>

            <div className="card-body">
              <a href={"/"+ props.userId + "/mybookmark/node"}>Frameworks</a>

              <div className="user">
                <a href="#"><span>Chloe Chou</span></a>
              </div>

              <div className="file">
                <i class="fa fa-file-text-o" aria-hidden="true"></i> <span>10</span> files
              </div>
            </div>
        </div>
      </a>

      <a href={"/"+ props.userId + "/mybookmark/node"}>
        <div className="card collection-card">
            <div className="img-container collection-img">
              <img src={JQueryCol} alt="" />
            </div>

            <div className="card-body">
              <a href={"/"+ props.userId + "/mybookmark/node"}>jQuery</a>

              <div className="user">
                <a href="#"><span>Chloe Chou</span></a>
              </div>

              <div className="file">
                <i class="fa fa-file-text-o" aria-hidden="true"></i> <span>10</span> files
              </div>
            </div>
        </div>
      </a>

      <a href={"/"+ props.userId + "/mybookmark/express"}>
        <div className="card collection-card">
            <div className="img-container collection-img">
              <img src="" alt="" />
            </div>

            <div className="card-body">
              <a href={"/"+ props.userId + "/mybookmark/express"}>Express JS</a>

              <div className="user">
                <a href="#"><span>Chloe Chou</span></a>
              </div>

              <div className="file">
                <i class="fa fa-file-text-o" aria-hidden="true"></i> <span>10</span> files
              </div>
            </div>
        </div>
      </a>

        
    </div>
  );
}


export default CollectionList;