import React from 'react';
// import "../App.css";

const PinsListItem = (props) => {
  return (
    <div className="pins-images">
      <div className="image-home"> 
         <img src={props.image_url}/> 
      </div>
    </div>
  )
};

export default PinsListItem;


/* <div> {props.id} </div>
<div> {props.users_id} </div>
<div> {props.boards_id} </div>
<div> {props.description} </div> */