import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import PinsContainer from './components/pins/pinsContainer';
// import RegisterForm from './components/auth/registerForm';
import RegisterContainer from "./components/auth/registerContainer";
import LoginForm from './components/auth/loginForm';
import UserContainer from '../src/components/user/userContainer';
import SinglePinContainer from '../src/components/pins/singlePinContainer';
import {Navbar} from "../src/components/menu/navbar";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path="/"component={PinsContainer} />
            <Route exact path="/signup"component={RegisterContainer} />
            <Route exact path="/login"component={LoginForm} />
            <Route exact path="/user"component={UserContainer} />
            <Route exact path="/pin/:id"component={SinglePinContainer} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
