import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      { name: "Nikhil", age: "26" },
      { name: "Sahil", age: "27" },
    ],
    count: 0,
  };
  changeNameHandler = (event) => {
    this.setState({
      persons: [
        { name: "Nikhil Gola", age: "26" },
        { name: event.target.value, age: "27" },
      ],
    });
  };
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: "Nikhil Gola", age: "26" },
        { name: newName, age: "27" },
      ],
    });
  };
  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid #eee",
      padding: "8px",
      cursor: "pointer",
    };
    return (
      <div className="App">
        <h1>This is first page</h1>
        <button
          style={style}  
          onClick={this.switchNameHandler.bind(this, "Sahil")}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[0].age}
          click={() => this.switchNameHandler("Sahil chaddha")}
          changed={this.changeNameHandler}
        >
          <p>I am CSE Student</p>
        </Person>
      </div>
    );
  }
}

export default App;
