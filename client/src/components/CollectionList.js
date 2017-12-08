import React, { Component } from "react";
import ReactCol from ".././assets/col-react.png";
import JSCol from ".././assets/col-js.png";
import NodeCol from ".././assets/col-node.png";
import HTMLCol from ".././assets/col-html.png";
import JQueryCol from ".././assets/col-jquery.png";
import FrameworksCol from ".././assets/col-frameworks.png";
import CSSCol from ".././assets/col-css.png";
import DatabaseCol from ".././assets/col-database.png";
import NPMCol from ".././assets/col-npm.png";
import APICol from ".././assets/col-api.png";
import DesignCol from ".././assets/col-design.png";
import AngularCol from ".././assets/col-angular.png";


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

      <a href={"/"+ props.userId + "/mybookmark/nodejs"}>
        <div className="card collection-card">
            <div className="img-container collection-img">
              <img src={NodeCol} alt="" />
            </div>

            <div className="card-body">
              <a href={"/"+ props.userId + "/mybookmark/nodejs"}>Node JS</a>

              <div className="user">
                <a href="#"><span>Chloe Chou</span></a>
              </div>

              <div className="file">
                <i class="fa fa-file-text-o" aria-hidden="true"></i> <span>10</span> files
              </div>
            </div>
        </div>
      </a>

      <a href={"/"+ props.userId + "/mybookmark/npm"}>
        <div className="card collection-card">
            <div className="img-container collection-img">
              <img src={NPMCol} alt="" />
            </div>

            <div className="card-body">
              <a href={"/"+ props.userId + "/mybookmark/npm"}>NPM Packages</a>
              <div className="user">
                <a href="#"><span>Chloe Chou</span></a>
              </div>

              <div className="file">
                <i class="fa fa-file-text-o" aria-hidden="true"></i> <span>10</span> files
              </div>
            </div>
        </div>
      </a>

      <a href={"/"+ props.userId + "/mybookmark/html"}>
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

      <a href={"/"+ props.userId + "/mybookmark/jquery"}>
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

      <a href={"/"+ props.userId + "/mybookmark/design"}>
        <div className="card collection-card">
            <div className="img-container collection-img">
              <img src={DesignCol} alt="" />
            </div>

            <div className="card-body">
              <a href={"/"+ props.userId + "/mybookmark/design"}>Design</a>

              <div className="user">
                <a href="#"><span>Chloe Chou</span></a>
              </div>

              <div className="file">
                <i class="fa fa-file-text-o" aria-hidden="true"></i> <span>10</span> files
              </div>
            </div>
        </div>
      </a>

      <a href={"/"+ props.userId + "/mybookmark/css"}>
        <div className="card collection-card">
            <div className="img-container collection-img">
              <img src={CSSCol} alt="" />
            </div>

            <div className="card-body">
              <a href={"/"+ props.userId + "/mybookmark/css"}>CSS</a>

              <div className="user">
                <a href="#"><span>Chloe Chou</span></a>
              </div>

              <div className="file">
                <i class="fa fa-file-text-o" aria-hidden="true"></i> <span>10</span> files
              </div>
            </div>
        </div>
      </a>

      <a href={"/"+ props.userId + "/mybookmark/api"}>
        <div className="card collection-card">
            <div className="img-container collection-img">
              <img src={APICol} alt="" />
            </div>

            <div className="card-body">
              <a href={"/"+ props.userId + "/mybookmark/api"}>APIs</a>

              <div className="user">
                <a href="#"><span>Chloe Chou</span></a>
              </div>

              <div className="file">
                <i class="fa fa-file-text-o" aria-hidden="true"></i> <span>10</span> files
              </div>
            </div>
        </div>
      </a>

      <a href={"/"+ props.userId + "/mybookmark/database"}>
        <div className="card collection-card">
            <div className="img-container collection-img">
              <img src={DatabaseCol} alt="" />
            </div>

            <div className="card-body">
              <a href={"/"+ props.userId + "/mybookmark/databaseCol"}>Database</a>

              <div className="user">
                <a href="#"><span>Chloe Chou</span></a>
              </div>

              <div className="file">
                <i class="fa fa-file-text-o" aria-hidden="true"></i> <span>10</span> files
              </div>
            </div>
        </div>
      </a>

      <a href={"/"+ props.userId + "/mybookmark/angular"}>
        <div className="card collection-card">
            <div className="img-container collection-img">
              <img src={AngularCol} alt="" />
            </div>

            <div className="card-body">
              <a href={"/"+ props.userId + "/mybookmark/angular"}>Angular</a>

              <div className="user">
                <a href="#"><span>Chloe Chou</span></a>
              </div>

              <div className="file">
                <i class="fa fa-file-text-o" aria-hidden="true"></i> <span>10</span> files
              </div>
            </div>
        </div>
      </a>

      <a href={"/"+ props.userId + "/mybookmark/frameworks"}>
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

    

   

      

     {/* <a href={"/"+ props.userId + "/mybookmark/express"}>
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
      </a>*/}

        
    </div>
  );
}


export default CollectionList;