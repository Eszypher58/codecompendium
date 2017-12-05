import React, { Component } from "react";
//import PropTypes from 'prop-types';

const AddBookmark = (props) => {

  console.log("props passed to add bookmark:", props)

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
/*
    const closeButton= {
      left:10
    }
*/

    console.log(props);

    // Render nothing if the "show" prop is false
    if(!props.show) {
      return null;
    } else {

      return (

      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
          {props.children}
        
        <a onClick={props.onClose} href="#" class="btn-close">
          <i class="fa fa-times" aria-hidden="true"></i>
        </a>
        
        <button id={props.userId} type="button" class="btn-add" onClick={props.onAdd}>
          Add Bookmark
        </button>
        <button type="button" class="btn-cancel" onClick={props.onClose}>
          Cancel
        </button>
         
        </div>
      </div>
      )
    }
  }

{/*
AddBookmark.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};
*/}
export default AddBookmark;
