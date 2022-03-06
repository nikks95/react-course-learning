import React from "react";
import '../Person/Person.css';
// const randomAge = () => Math.floor(Math.random()*30);
const person = (props) => {
  return (
    <div className="Person" onClick={props.click}>
      <p>
        I am {props.name} and I am {props.age} years old.
      </p>
      <input type="text" onChange={props.changed} value={props.name} />
      {props.children}
    </div>
  );
};

export default person;
