import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import * as M from 'materialize-css';
import Home from './components/home/Home';
import Form from './components/form/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="hide-on-med-and-down">
          <div class="nav-wrapper light-green">
          </div>
        </nav>
        
        <div class="row">
          <div class="col s12 m6 hide-on-small-only">
            <Home />
          </div>
          <div class="col s12 m6">
            <Form />
          </div>
          <div class="col s12 m6 hide-on-med-and-up">
            <Home />
          </div>
        </div>
      </div>

    );
  }
}

export default App;
