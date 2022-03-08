import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      {id: 'nik' ,name: "Nikhil", age: "26" },
      {id: 'sah', name: "Sahil", age: "27" },
    ],
    count: 0,
    dataShow: false,
  };
  changeNameHandler = (event) => {
    this.setState({
      persons: [
        { name: "Nikhil Gola", age: "26" },
        { name: event.target.value, age: "27" },
      ],
    });
  };
  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons; // Copy by reference
    const persons = [...this.state.persons]
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  };
  toggleDataHandler = () => {
    const flag = this.state.dataShow;
    this.setState({ dataShow: !flag });
  };
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {  name: "Nikhil Gola", age: "26" },
        {  name: newName, age: "27" },
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
      margin: "2px 2px 4px 4px"
    };
    let persons = null;

    if (this.state.dataShow) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
              return  <Person
              key={person.id}
              name={person.name} 
              age={person.age} 
              click={ () => this.deletePersonHandler(index)}></Person>
           })}
        </div>
       );
    }
    return (
      <div className="App">
        <h1>This is first page</h1>
        <button style={style} onClick={this.toggleDataHandler}>
          Toggle
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
