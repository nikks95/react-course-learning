import React, { useState } from "react";
import Person from "./Person/Person";
import "./App.css";

const app = props => {
  const [personState,setPersonState] = useState({
    persons: [
      { name: "Nikhil", age: "26" },
      { name: "Sahil", age: "27" },
    ],
    count: 0
  });
  const switchNameHandler = () =>{
    //Do not mutate state directly use setState
    // personState.count+=1;
    setPersonState({
      persons: [
        { name: "Nikhil Gola", age: "26" },
        { name: "Sahil Chadha", age: "27" },
      ],
      //count information will be lost in this way, but not in setState way
    });
    
  }
  return (
    <div className="App">
         <h1>This is first page</h1>
         <button onClick={switchNameHandler} >Switch Name</button>
         <Person
           name={personState.persons[0].name}
           age={personState.persons[0].age}
         />
         <Person
           name={personState.persons[1].name}
           age={personState.persons[0].age}
         >
           <p>I am CSE Student</p>
         </Person>
       </div>
  );
}
// class App extends Component {
  // state = {
  //   persons: [
  //     { name: "Nikhil", age: "26" },
  //     { name: "Sahil", age: "27" },
  //   ],
  //   count: 0
  // };
  // switchNameHandler = () =>{
  //   //Do not mutate state directly use setState
  //   // personState.count+=1;
  //   this.setState({
  //     persons: [
  //       { name: "Nikhil Gola", age: "26" },
  //       { name: "Sahil Chadha", age: "27" },
  //     ],
  //   });
    
  // }
//   render() {
//     return (
//       <div className="App">
//         <h1>This is first page</h1>
//         <button onClick={this.switchNameHandler} >Switch Name</button>
//         <Person
//           name={personState.persons[0].name}
//           age={personState.persons[0].age}
//         />
//         <Person
//           name={personState.persons[1].name}
//           age={personState.persons[0].age}
//         >
//           <p>I am CSE Student</p>
//         </Person>
//       </div>
//     );
//   }
// }

export default app;
