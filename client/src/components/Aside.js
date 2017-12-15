import React, { Component } from "react";
import LongLogo from ".././assets/LongLogo.png";


const Aside = (props) => {

  function signOut() {
    var auth2 = window["gapi"].auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
      window.sessionStorage.clear();
      window.location.href = "/";
    });
  }

  // function signOut() {
  //   window.sessionStorage.clear();
  //   window.location.href = "/";
  //   console.log("signout ran");
  // };


  return (
    <nav id="sidebar">
      <div className="sidebar-header">
        <img id="logo2" src={LongLogo} />
      </div>

      <ul className="list-unstyled components">
        <li>
          <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">Explore</a>
            <ul className="collapse list-unstyled" id="pageSubmenu">
              <li><a href="#"><i className="fa fa-folder-o" aria-hidden="true"></i> All</a></li>
              <li><a href="#"><i className="fa fa-folder-o" aria-hidden="true"></i> HTML</a></li>
              <li><a href="#"><i className="fa fa-folder-o" aria-hidden="true"></i> CSS</a></li>
              <li><a href="#"><i className="fa fa-folder-o" aria-hidden="true"></i> JavaScript</a></li>
              <li><a href="#"><i className="fa fa-folder-o" aria-hidden="true"></i> jQuery</a></li>
              <li><a href="#"><i className="fa fa-folder-o" aria-hidden="true"></i> React</a></li>
              <li><a href="#"><i className="fa fa-folder-o" aria-hidden="true"></i> Node JS</a></li>
              <li><a href="#"><i className="fa fa-folder-o" aria-hidden="true"></i> Database</a></li>
              <li><a href="#"><i className="fa fa-folder-o" aria-hidden="true"></i> NPM Packages</a></li>
              <li><a href="#"><i className="fa fa-folder-o" aria-hidden="true"></i> APIs</a></li>
              <li><a href="#"><i className="fa fa-folder-o" aria-hidden="true"></i> Angular</a></li>
              <li><a href="#"><i className="fa fa-folder-o" aria-hidden="true"></i> Ruby</a></li>
              <li><a href="#"><i className="fa fa-folder-o" aria-hidden="true"></i> Frameworks</a></li>
              <li><a href="#"><i className="fa fa-folder-o" aria-hidden="true"></i> Misc.</a></li>
              <li><a href="#"><i className="fa fa-folder-o" aria-hidden="true"></i> Design</a></li>
              <li><a href="#"><i className="fa fa-folder-o" aria-hidden="true"></i> C++</a></li>
              <li><a href="#"><i className="fa fa-folder-o" aria-hidden="true"></i> Python</a></li>
              <li><a href="#"><i className="fa fa-folder-o" aria-hidden="true"></i> Jobs</a></li>
              <li><a href="#"><i className="fa fa-folder-o" aria-hidden="true"></i> Humor</a></li>
            </ul>
        </li>

        <li className="active">
          <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">My Collections</a>
            <ul className="list-unstyled" id="homeSubmenu">
              <li><a href={"/"+ props.userId + "/mycollection"} ><i className="fa fa-folder-o" aria-hidden="false"></i> All</a></li>
              <li><a href={"/"+ props.userId + "/mybookmark/html"}><i className="fa fa-folder-o" aria-hidden="false"></i> HTML</a></li>
              <li><a href={"/"+ props.userId + "/mybookmark/css"}><i className="fa fa-folder-o" aria-hidden="false"></i> CSS</a></li>
              <li><a href={"/"+ props.userId + "/mybookmark/javascript"}><i className="fa fa-folder-o" aria-hidden="false"></i> JavaScript</a></li>
              <li><a href={"/"+ props.userId + "/mybookmark/jquery"}><i className="fa fa-folder-o" aria-hidden="false"></i> jQuery</a></li>
              <li><a href={"/"+ props.userId + "/mybookmark/react"}><i className="fa fa-folder-o" aria-hidden="false"></i> React</a></li>
              <li><a href={"/"+ props.userId + "/mybookmark/nodejs"}><i className="fa fa-folder-o" aria-hidden="false"></i> Node JS</a></li>
              <li><a href={"/"+ props.userId + "/mybookmark/databases"}><i className="fa fa-folder-o" aria-hidden="false"></i> Databases</a></li>
              <li><a href={"/"+ props.userId + "/mybookmark/npm"}><i className="fa fa-folder-o" aria-hidden="false"></i> NPM Packages</a></li>
              <li><a href={"/"+ props.userId + "/mybookmark/API"}><i className="fa fa-folder-o" aria-hidden="false"></i> APIs</a></li>
              <li><a href={"/"+ props.userId + "/mybookmark/angular"}><i className="fa fa-folder-o" aria-hidden="false"></i> Angular</a></li>
              <li><a href={"/"+ props.userId + "/mybookmark/ruby"}><i className="fa fa-folder-o" aria-hidden="false"></i> Ruby</a></li>
              <li><a href={"/"+ props.userId + "/mybookmark/frameworks"}><i className="fa fa-folder-o" aria-hidden="false"></i> Frameworks</a></li>
              <li><a href={"/"+ props.userId + "/mybookmark/misc"}><i className="fa fa-folder-o" aria-hidden="false"></i> Misc.</a></li>
              <li><a href={"/"+ props.userId + "/mybookmark/design"}><i className="fa fa-folder-o" aria-hidden="false"></i> Design</a></li>
              <li><a href={"/"+ props.userId + "/mybookmark/cpp"}><i className="fa fa-folder-o" aria-hidden="false"></i> C++</a></li>
              <li><a href={"/"+ props.userId + "/mybookmark/python"}><i className="fa fa-folder-o" aria-hidden="false"></i> Python</a></li>
              <li><a href={"/"+ props.userId + "/mybookmark/jobs"}><i className="fa fa-folder-o" aria-hidden="false"></i> Jobs</a></li>
              <li><a href={"/"+ props.userId + "/mybookmark/humor"}><i className="fa fa-folder-o" aria-hidden="false"></i> Humor</a></li>

            </ul>
        </li>



      </ul>

      <ul className="list-unstyled">
        <li><a href="#" id="logout" onClick={signOut}><i class="fa fa-sign-out" aria-hidden="true"></i> Logout</a></li>
      </ul>
      <ul className="list-unstyled CTAs">
        <li><a href="https://github.com/Eszypher58/codecompendium" target="_blank" id="github"><i class="fa fa-github" aria-hidden="true"></i> Github Repo</a></li>
      </ul>
    </nav>
 );
}


export default Aside;
