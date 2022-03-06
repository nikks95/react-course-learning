import React from "react";
const randomAge = () => Math.floor(Math.random()*30);
const person = () => {
    return <p>I am a Person and I am {randomAge()} years old.</p>;
}

export default person;