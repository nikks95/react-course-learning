import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      { name: "Nikhil", age: "26" },
      { name: "Sahil", age: "27" },
    ],
  };
  render() {
    return (
      <div className="App">
        <h1>This is first page</h1>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[0].age}
        >
          <p>I am CSE Student</p>
        </Person>
      </div>
    );
  }
}

export default App;
