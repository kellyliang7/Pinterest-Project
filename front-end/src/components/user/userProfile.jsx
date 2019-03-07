import React from 'react';

class UserProfile extends React.Component {
  componentDidMount(){
    // this.props.fetchAllPins()
  }
  render() {
    console.log(this.props)
    return(
      <h1>user profile</h1>
    )
  }
}

export default UserProfile;