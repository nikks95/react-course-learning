import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      { name: "Nikhil", age: "26" },
      { name: "Sahil", age: "27" },
    ],
    count: 0
  };
  switchNameHandler = () =>{
    //Do not mutate state directly use setState
    // this.state.count+=1;
    this.setState({
      count: this.state.count+1
    });
    console.log(`Button was clicked ${this.state.count} times`);
    
  }
  render() {
    return (
      <div className="App">
        <h1>This is first page</h1>
        <button onClick={this.switchNameHandler} >Switch Name</button>
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
