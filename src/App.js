import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppComponent from './components/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppComponent />
      </div>
    );
  }
}

export default App;
