import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>This is first page</h1>
        <Person />
      </div>
    );
  }
}

export default App;
