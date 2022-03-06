import React from "react";
// const randomAge = () => Math.floor(Math.random()*30);
const person = (props) => {
  return (
    <div>
      <p>
        I am {props.name} and I am {props.age} years old.
      </p>
      {props.children}
    </div>
  );
};

export default person;
