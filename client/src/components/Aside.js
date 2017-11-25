import React, { Component } from "react";

const Aside = (props) => {
  return ( 
    <nav id="sidebar">
      <div className="sidebar-header">
        <h3 id="logo">Codependium</h3>
      </div>

      <ul className="list-unstyled components">
                    
        <li className="active">
          <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="true">My Collections</a>
            <ul className="list-unstyled" id="homeSubmenu">
              <li><a href="#"><i className="fa fa-folder-o" aria-hidden="false"></i> All</a></li>
              <li><a href="#"><i className="fa fa-folder-o" aria-hidden="false"></i> React</a></li>
              <li><a href="#"><i className="fa fa-folder-o" aria-hidden="false"></i> JavaScript</a></li>
              <li><a href="#"><i className="fa fa-folder-o" aria-hidden="false"></i> Node.js</a></li>
              <li><a href="#"><i className="fa fa-folder-o" aria-hidden="false"></i> Express.js</a></li>
            </ul>
        </li>

        <li>
          <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">Explore</a>
            <ul className="collapse list-unstyled" id="pageSubmenu">
              <li><a href="#"><i className="fa fa-folder-o" aria-hidden="true"></i> All</a></li>
              <li><a href="#"><i className="fa fa-folder-o" aria-hidden="true"></i> HTML</a></li>
              <li><a href="#"><i className="fa fa-folder-o" aria-hidden="true"></i> CSS</a></li>
              <li><a href="#"><i className="fa fa-folder-o" aria-hidden="true"></i> JavaScript</a></li>
              <li><a href="#"><i className="fa fa-folder-o" aria-hidden="true"></i> jQuery</a></li>
              <li><a href="#"><i className="fa fa-folder-o" aria-hidden="true"></i> Bootstrap</a></li>
              <li><a href="#"><i className="fa fa-folder-o" aria-hidden="true"></i> Material UI</a></li>
              <li><a href="#"><i className="fa fa-folder-o" aria-hidden="true"></i> Node.js</a></li>
              <li><a href="#"><i className="fa fa-folder-o" aria-hidden="true"></i> Express.js</a></li>
              <li><a href="#"><i className="fa fa-folder-o" aria-hidden="true"></i> MySQL</a></li>
              <li><a href="#"><i className="fa fa-folder-o" aria-hidden="true"></i> MongoDB</a></li>
              <li><a href="#"><i className="fa fa-folder-o" aria-hidden="true"></i> AJAX</a></li>
              <li><a href="#"><i className="fa fa-folder-o" aria-hidden="true"></i> API</a></li>
              <li><a href="#"><i className="fa fa-folder-o" aria-hidden="true"></i> AngularJS</a></li>
              <li><a href="#"><i className="fa fa-folder-o" aria-hidden="true"></i> React</a></li>
              <li><a href="#"><i className="fa fa-folder-o" aria-hidden="true"></i> MISC</a></li>
              <li><a href="#"><i className="fa fa-folder-o" aria-hidden="true"></i> Humor</a></li>
            </ul>
        </li>
      
      </ul>

      <ul className="list-unstyled CTAs">
        <li><a href="https://github.com/Eszypher58/codecompendium" target="_blank" id="github"><i className="fa fa-github-alt" aria-hidden="true"></i> Github Repo</a></li>
      </ul>
    </nav>
 );
}


export default Aside;