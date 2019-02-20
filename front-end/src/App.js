import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import PinsContainer from './components/pinsContainer';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/"component={PinsContainer} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
