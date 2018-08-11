import React, { Component } from 'react';
import PhoneDiv from './PhoneDiv.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">实时公交</h1>
          <p className="App-label">实时公交，让出行变得简单!</p>
        </header>
        <PhoneDiv/>
      </div>
    );
  }
}

export default App;
