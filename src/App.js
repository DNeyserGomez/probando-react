import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import M from 'materialize-css';
import Home from './components/home/Home';


class App extends Component {
  render() {
    return (
      <div class="row">
        <div class="col m6">
          
          <Home />
        </div>
        <div class="col m6">
        </div>
      </div>
    );
  }
}

export default App;
