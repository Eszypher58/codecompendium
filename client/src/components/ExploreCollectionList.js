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
import RubyCol from ".././assets/col-ruby.png";
import PythonCol from ".././assets/col-python.png";
import HumorCol from ".././assets/col-humor.png";
import CPlusCol from ".././assets/col-c++.png";
import MiscCol from ".././assets/col-misc.png";
import JobsCol from ".././assets/col-jobs.png";


const CollectionList = (props) => {
  return (
    <div>
      <h3 className="title">Explore Collections</h3>

      <a href={"explorebookmark/react"}>
        <div className="card collection-card">
            <div className="img-container collection-img">
              <img src={ReactCol} alt="" />
            </div>

            <div className="card-body">
              <a href={"explorebookmark/react"}>React</a>

              <div className="user">
                <a href="#"><span>{props.userName}</span></a>
              </div>

              <div className="file">
                {/* <i class="fa fa-file-text-o" aria-hidden="true"></i> <span>{props.categoriesCount.REACT}</span> files */}
              </div>
            </div>
        </div>
      </a>

      <a href={"explorebookmark/javascript"}>
        <div className="card collection-card">
            <div className="img-container collection-img">
              <img src={JSCol} alt="" />
            </div>

            <div className="card-body">
              <a href={"explorebookmark/javascript"}>JavaScript</a>

              <div className="user">
                <a href="#"><span>{props.userName}</span></a>
              </div>

              <div className="file">
                {/* <i class="fa fa-file-text-o" aria-hidden="true"></i> <span>{props.categoriesCount.JAVASCRIPT}</span> files */}
              </div>
            </div>
        </div>
      </a>

      <a href={"explorebookmark/nodejs"}>
        <div className="card collection-card">
            <div className="img-container collection-img">
              <img src={NodeCol} alt="" />
            </div>

            <div className="card-body">
              <a href={"explorebookmark/nodejs"}>Node JS</a>

              <div className="user">
                <a href="#"><span>{props.userName}</span></a>
              </div>

              <div className="file">
                {/* <i class="fa fa-file-text-o" aria-hidden="true"></i> <span>{props.categoriesCount.NODEJS}</span> files */}
              </div>
            </div>
        </div>
      </a>

      <a href={"explorebookmark/npm"}>
        <div className="card collection-card">
            <div className="img-container collection-img">
              <img src={NPMCol} alt="" />
            </div>

            <div className="card-body">
              <a href={"explorebookmark/npm"}>NPM Packages</a>
              <div className="user">
                <a href="#"><span>{props.userName}</span></a>
              </div>

              <div className="file">
                {/* <i class="fa fa-file-text-o" aria-hidden="true"></i> <span>{props.categoriesCount.NPM}</span> files */}
              </div>
            </div>
        </div>
      </a>

      <a href={"explorebookmark/html"}>
        <div className="card collection-card">
            <div className="img-container collection-img">
              <img src={HTMLCol} alt="" />
            </div>

            <div className="card-body">
              <a href={"explorebookmark/html"}>HTML</a>

              <div className="user">
                <a href="#"><span>{props.userName}</span></a>
              </div>

              <div className="file">
                {/* <i class="fa fa-file-text-o" aria-hidden="true"></i> <span>{props.categoriesCount.HTML}</span> files */}
              </div>
            </div>
        </div>
      </a>

      <a href={"explorebookmark/jquery"}>
        <div className="card collection-card">
            <div className="img-container collection-img">
              <img src={JQueryCol} alt="" />
            </div>

            <div className="card-body">
              <a href={"explorebookmark/jquery"}>jQuery</a>

              <div className="user">
                <a href="#"><span>{props.userName}</span></a>
              </div>

              <div className="file">
                {/* <i class="fa fa-file-text-o" aria-hidden="true"></i> <span>{props.categoriesCount.JQUERY}</span> files */}
              </div>
            </div>
        </div>
      </a>

      <a href={"explorebookmark/design"}>
        <div className="card collection-card">
            <div className="img-container collection-img">
              <img src={DesignCol} alt="" />
            </div>

            <div className="card-body">
              <a href={"explorebookmark/design"}>Design</a>

              <div className="user">
                <a href="#"><span>{props.userName}</span></a>
              </div>

              <div className="file">
                {/* <i class="fa fa-file-text-o" aria-hidden="true"></i> <span>{props.categoriesCount.DESIGN}</span> files */}
              </div>
            </div>
        </div>
      </a>

      <a href={"explorebookmark/css"}>
        <div className="card collection-card">
            <div className="img-container collection-img">
              <img src={CSSCol} alt="" />
            </div>

            <div className="card-body">
              <a href={"explorebookmark/css"}>CSS</a>

              <div className="user">
                <a href="#"><span>{props.userName}</span></a>
              </div>

              <div className="file">
                {/* <i class="fa fa-file-text-o" aria-hidden="true"></i> <span>{props.categoriesCount.CSS}</span> files */}
              </div>
            </div>
        </div>
      </a>

      <a href={"explorebookmark/API"}>
        <div className="card collection-card">
            <div className="img-container collection-img">
              <img src={APICol} alt="" />
            </div>

            <div className="card-body">
              <a href={"explorebookmark/API"}>APIs</a>

              <div className="user">
                <a href="#"><span>{props.userName}</span></a>
              </div>

              <div className="file">
                {/* <i class="fa fa-file-text-o" aria-hidden="true"></i> <span>{props.categoriesCount.API}</span> files */}
              </div>
            </div>
        </div>
      </a>

      <a href={"explorebookmark/databases"}>
        <div className="card collection-card">
            <div className="img-container collection-img">
              <img src={DatabaseCol} alt="" />
            </div>

            <div className="card-body">
              <a href={"explorebookmark/databases"}>Database</a>

              <div className="user">
                <a href="#"><span>{props.userName}</span></a>
              </div>

              <div className="file">
                {/* <i class="fa fa-file-text-o" aria-hidden="true"></i> <span>{props.categoriesCount.DATABASES}</span> files */}
              </div>
            </div>
        </div>
      </a>

      <a href={"explorebookmark/angular"}>
        <div className="card collection-card">
            <div className="img-container collection-img">
              <img src={AngularCol} alt="" />
            </div>

            <div className="card-body">
              <a href={"explorebookmark/angular"}>Angular</a>

              <div className="user">
                <a href="#"><span>{props.userName}</span></a>
              </div>

              <div className="file">
                {/* <i class="fa fa-file-text-o" aria-hidden="true"></i> <span>{props.categoriesCount.ANGULAR}</span> files */}
              </div>
            </div>
        </div>
      </a>

      <a href={"explorebookmark/frameworks"}>
        <div className="card collection-card">
            <div className="img-container collection-img">
              <img src={FrameworksCol} alt="" />
            </div>

            <div className="card-body">
              <a href={"explorebookmark/frameworks"}>Frameworks</a>

              <div className="user">
                <a href="#"><span>{props.userName}</span></a>
              </div>

              <div className="file">
                {/* <i class="fa fa-file-text-o" aria-hidden="true"></i> <span>{props.categoriesCount.FRAMEWORKS}</span> files */}
              </div>
            </div>
        </div>
      </a>

      <a href={"explorebookmark/ruby"}>
        <div className="card collection-card">
            <div className="img-container collection-img">
              <img src={RubyCol} alt="" />
            </div>

            <div className="card-body">
              <a href={"explorebookmark/ruby"}>Ruby</a>

              <div className="user">
                <a href="#"><span>{props.userName}</span></a>
              </div>

              <div className="file">
                {/* <i class="fa fa-file-text-o" aria-hidden="true"></i> <span>{props.categoriesCount.RUBY}</span> files */}
              </div>
            </div>
        </div>
      </a>

      <a href={"explorebookmark/cpp"}>
        <div className="card collection-card">
            <div className="img-container collection-img">
              <img src={CPlusCol} alt="" />
            </div>

            <div className="card-body">
              <a href={"explorebookmark/cpp"}>C++</a>

              <div className="user">
                <a href="#"><span>{props.userName}</span></a>
              </div>

              <div className="file">
                {/* <i class="fa fa-file-text-o" aria-hidden="true"></i> <span>{props.categoriesCount.CPP}</span> files */}
              </div>
            </div>
        </div>
      </a>

      <a href={"explorebookmark/python"}>
        <div className="card collection-card">
            <div className="img-container collection-img">
              <img src={PythonCol} alt="" />
            </div>

            <div className="card-body">
              <a href={"explorebookmark/python"}>Python</a>

              <div className="user">
                <a href="#"><span>{props.userName}</span></a>
              </div>

              <div className="file">
                {/* <i class="fa fa-file-text-o" aria-hidden="true"></i> <span>{props.categoriesCount.PYTHON}</span> files */}
              </div>
            </div>
        </div>
      </a>

         <a href={"explorebookmark/humor"}>
        <div className="card collection-card">
            <div className="img-container collection-img">
              <img src={HumorCol} alt="" />
            </div>

            <div className="card-body">
              <a href={"explorebookmark/humor"}>Humor</a>

              <div className="user">
                <a href="#"><span>{props.userName}</span></a>
              </div>

              <div className="file">
                {/* <i class="fa fa-file-text-o" aria-hidden="true"></i> <span>{props.categoriesCount.HUMOR}</span> files */}
              </div>
            </div>
        </div>
      </a>

      <a href={"explorebookmark/misc"}>
        <div className="card collection-card">
            <div className="img-container collection-img">
              <img src={MiscCol} alt="" />
            </div>

            <div className="card-body">
              <a href={"explorebookmark/misc"}>Misc.</a>

              <div className="user">
                <a href="#"><span>{props.userName}</span></a>
              </div>

              <div className="file">
                {/* <i class="fa fa-file-text-o" aria-hidden="true"></i> <span>{props.categoriesCount.MISC}</span> files */}
              </div>
            </div>
        </div>
      </a>

      <a href={"explorebookmark/jobs"}>
        <div className="card collection-card">
            <div className="img-container collection-img">
              <img src={JobsCol} alt="" />
            </div>

            <div className="card-body">
              <a href={"explorebookmark/jobs"}>Jobs</a>

              <div className="user">
                <a href="#"><span>{props.userName}</span></a>
              </div>

              <div className="file">
                {/* <i class="fa fa-file-text-o" aria-hidden="true"></i> <span>{props.categoriesCount.JOBS}</span> files */}
              </div>
            </div>
        </div>
      </a>






      {/* <a href={"explorebookmark/express"}>
        <div className="card collection-card">
            <div className="img-container collection-img">
              <img src="" alt="" />
            </div>

            <div className="card-body">
              <a href={"explorebookmark/express"}>Express JS</a>

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
