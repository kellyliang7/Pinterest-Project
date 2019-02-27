import React from 'react';
import registerForm from '../../css/registerForm.css';


class RegisterForm extends React.Component {
  state = {
    email: "",
    password: "",
    age: "",
    // submitted: false
  };

  handleChange = e => {
    this.setState({
      [e.target.id] : e.target.value
    });
  };

  handleSubmit = e => {
    console.log("clicked")
    e.preventDefault();
    // this.setState({ submitted: true })
    let registerUser = {
      email: this.state.email,
      password: this.state.password,
      age: this.state.age
    }
    this.props.loginUser(registerUser)
  }

  render(){
    console.log(this.props)
    const { email, password, age } = this.state 
    return (
      <React.Fragment>
        <h1>
          Sign up to see more
        </h1>
          <p>
            Access Pinterest's best ideas with a free account
          </p>
            <div className="form">
              <form onSubmit={this.handleSubmit}>
                <div>
                  <input className="input-fields"
                    type="text" 
                    value={email} 
                    placeholder="Email" 
                    onChange={this.handleChange}
                    id="email"
                  />
                </div>
                <div>
                  <input className="input-fields" 
                    type="text"
                    value={password}
                    placeholder="Create a password"
                    onChange={this.handleChange}
                    id="password"
                  />
                </div>
                <div>
                  <input className="input-fields"
                    type="text" 
                    value={age} 
                    placeholder="Age" 
                    onChange={this.handleChange}
                    id="age"
                  />
                </div>
                <button className="submit-button" type="submit">
                  Continue
                </button>
              </form>
            </div>
      </React.Fragment>
    );
  }
};

export default RegisterForm;