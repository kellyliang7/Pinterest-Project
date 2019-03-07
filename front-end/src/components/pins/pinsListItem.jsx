import React from 'react';
import { Link } from 'react-router-dom';
// import "../App.css";

const PinsListItem = (props) => {
  return (
    <div className="pins-images">
      <Link className='pinLink' to={ `/pin/${props.id}` }>
        <div> 
          <img className="image" alt="" src={props.image_url}/> 
        </div>
      </Link>
    </div>
  )
};

export default PinsListItem;


/* <div> {props.id} </div>
<div> {props.users_id} </div>
<div> {props.boards_id} </div>
<div> {props.description} </div> */