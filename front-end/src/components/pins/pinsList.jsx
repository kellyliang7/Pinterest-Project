import React from 'react'; 
import PinsListItem from './pinsListItem';
import '../../css/pins.css';

class PinsList extends React.Component {
  componentDidMount = () => {
    // debugger
    this.props.fetchAllPins()
  }

  render(){
    // debugger 
    const { pins } = this.props; 
    let displayPins = pins.map(pin => {
      return <PinsListItem key={pin.id} id={pin.id} users_id={pin.users_id} boards_id={pin.boards_id} description={pin.description} image_url={pin.image_url}/>

    })
    // console.log(this.props)
    // debugger
    return(
      <div className="pins-grid">
        <div className="display-pins">
          {displayPins}
        </div>
      </div>
    )
  }
};

export default PinsList;