import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>This is first page</h1>
      </div>
      //Will give error in this version
      <h1>This is not supported</h1>
    );
  }
}

export default App;
