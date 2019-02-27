import React from 'react';
// import "../App.css";

const PinsListItem = (props) => {
  return (
    <React.Fragment>
      <div className="pins-images"> 
         <img src={props.image_url}/> 
      </div>
    </React.Fragment>
  )
};

export default PinsListItem;


/* <div> {props.id} </div>
<div> {props.users_id} </div>
<div> {props.boards_id} </div>
<div> {props.description} </div> */