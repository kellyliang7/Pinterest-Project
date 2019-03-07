import React from 'react';

class SinglePin extends React.Component {
  componentDidMount(){
    this.props.fetchSinglePin(this.props.match.params.id)
  }

  render(){
    const { 
    id, 
    users_id,
    boards_id,
    description,
    image_url,
  } = this.props.currentPin 

    return(
      <div>
        <img className="currentImage" alt="" src={image_url}/>
        {description}
      </div>
    )
  }
}

export default SinglePin;

