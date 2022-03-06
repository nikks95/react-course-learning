import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      //<h1>This is first element</h1>
      React.createElement('div',{className: 'App'},React.createElement('h1',null,"This is first element"))
    );
  }
}

export default App;
