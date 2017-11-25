import React, { Component } from "react";

const Header = (props) => {
  return ( 
    <nav className="navbar navbar-default">
      <div className="container-fluid">

        <div className="navbar-header">
          <button type="button" id="sidebarCollapse" className="navbar-btn">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>

          <div id="search-input">
            <div className="input-group col-sm-12">
                <input type="text" className="form-control" placeholder="Search bookmark" />
                <span className="input-group-btn">
                    <button className="btn" type="button">
                        <i className="glyphicon glyphicon-search"></i>
                    </button>
                </span>
            </div>
          </div>

          <div className="login">
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Header;