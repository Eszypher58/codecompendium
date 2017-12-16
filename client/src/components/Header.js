import React, { Component } from "react";

const Header = (props) => {
  return ( 
    <nav className="navbar navbar-default">
      <div className="container-fluid">

        <div className="navbar-header">
          <button type="button" id="sidebarCollapse" className="navbar-btn">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
          
        </div>

      </div>
    </nav>
  );
}

export default Header;