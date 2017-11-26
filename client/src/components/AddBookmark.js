import React, { Component } from "react";
import PropTypes from 'prop-types';

class AddBookmark extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.6)',
      padding: 50
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      width: 600,
      height: 550,
      margin: '0 auto',
      padding: 30,
      top: 180,
      display: 'block'
    };

    const closeButton= {
      left:10
    }

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
          {this.props.children}
        
        <a onClick={this.props.onClose} href="#" class="btn-close">
          <i class="fa fa-times" aria-hidden="true"></i>
        </a>

        <button type="button" class="btn btn-primary">
          Add
        </button>
         
        </div>
      </div>
    );
  }
}

AddBookmark.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default AddBookmark;