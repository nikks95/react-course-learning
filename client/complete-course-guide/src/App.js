import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";
import Radium, {StyleRoot} from "radium";

class App extends Component {
  state = {
    persons: [
      {id: 'nik' ,name: "Nikhil", age: "26" },
      {id: 'sah', name: "Sahil", age: "27" },
      {id: 'sah1', name: "Ish", age: "27" },
    ],
    count: 0,
    dataShow: false,
  };
  changeNameHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex( p=> p.id===id);
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
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
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid #eee",
      padding: "8px",
      cursor: "pointer",
      margin: "2px 2px 4px 4px",
      ':hover': {
        backgroundColor : 'lightgreen',
        color : 'black'
      }
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
              click={ () => this.deletePersonHandler(index)}
              changed={(evt) => this.changeNameHandler(evt,person.id)}></Person>
           })}
        </div>
       );
       style.backgroundColor = 'red';
       style[':hover'] = {
         backgroundColor : 'pink',
         color : 'black'
       };
    }
    let classes = [];
    if(this.state.persons.length<=2){
      classes.push("red");
    }
    if(this.state.persons.length <=1){
      classes.push('bold');
    }
    return (
      <StyleRoot>
      <div className="App">
        <h1>I am React App</h1>
        <p className={classes.join(' ')}>This is first page</p>
        <button style={style} onClick={this.toggleDataHandler}>
          Toggle
        </button>
        {persons}
      </div>
      </StyleRoot>
    );
  }
}
export default Radium(App);
