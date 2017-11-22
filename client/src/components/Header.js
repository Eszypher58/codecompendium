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
            <div class="input-group col-sm-12">
                <input type="text" class="form-control" placeholder="Search bookmark" />
                <span class="input-group-btn">
                    <button class="btn" type="button">
                        <i class="glyphicon glyphicon-search"></i>
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