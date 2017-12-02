import React, { Component } from "react";
import PropTypes from 'prop-types';

class DeleteBookmark extends React.Component {

  

  render() {

    console.log("props passed to deletebookmark:", this.props);
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
      width: 400,
      height: 250,
      margin: '0 auto',
      padding: 30,
      top: 180,
      display: 'block'
    };

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
          {this.props.children}
        
        <a onClick={this.props.onClose} href="#" class="btn-close">
          <i class="fa fa-times" aria-hidden="true"></i>
        </a>

        <button id={this.props.bookmarkId + "&" + this.props.userId} type="button" class="btn btn-primary" onClick={this.props.onDelete}>
          Delete Bookmark
        </button>
         
        </div>
      </div>
    );
  }
}

DeleteBookmark.propTypes = {
  onClose: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  bookmarkId: PropTypes.string,
  userId: PropTypes.string,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default DeleteBookmark;