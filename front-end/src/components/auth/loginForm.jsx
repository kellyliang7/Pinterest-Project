import React from 'react';

class LoginForm extends React.Component {
  state = {
    email: "",
    password: "",
    submitted: false
  };

  handleChange = e => {
    this.setState({
      [e.target.id] : e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ submitted: true })
  }

  render(){
    const { email, password } = this.state 
    return (
      <div className="Form">
        <h1>Log In</h1>
          <form onSubmit>
            <input 
              type="text" 
              value={email} 
              placeholder="email" 
              onChange={this.handleChange}
              id="email"
            />
            <input 
              type="text"
              value={password}
              placeholder="password"
              onChange={this.handleChange}
              id="password"
            />
            <button type="submit">Login</button>
          </form>
      </div>
    );
  }
}

export default LoginForm;