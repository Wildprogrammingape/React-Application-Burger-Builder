import React from 'react';
// do not need to import {component} because we are using function  
// (component in React is function acturally)

import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I am a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}/>
        </div>
    )
}

export default person;