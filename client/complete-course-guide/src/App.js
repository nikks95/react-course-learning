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
  switchNameHandler = (newName) =>{
    //Do not mutate state directly use setState
    // this.state.count+=1;
    this.setState({
      persons: [
        { name: "Nikhil Gola", age: "26" },
        { name: newName, age: "27" },
      ],
    });
    
  }
  render() {
    return (
      <div className="App">
        <h1>This is first page</h1>
        <button onClick={this.switchNameHandler.bind(this,"Sahil")} >Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[0].age}
          click = {()=>this.switchNameHandler("Sahil chaddha")}
        >
          <p>I am CSE Student</p>
        </Person>
      </div>
    );
  }
}

export default App;
