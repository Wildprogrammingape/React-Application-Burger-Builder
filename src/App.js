import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
 
  state = {
    persons: [
      {name : 'Long',  age : 24},
      {name : "Barry", age : 25},
      {name : "Max",   age : 28}
    ]
  }

  switchNameHandler = (newName) => {
    //console.log("was clicked!");
    // dont do : this.state.persons[0].name = "Long Chen";
    this.setState({persons: [
      {name : newName,  age : 24},
      {name : "Barry", age : 25},
      {name : "Max",   age : 30}
    ]})
  }

  nameChangedHandler = (event) =>{ // .target is the input which we typed,  .value is the value in the text
    this.setState({persons: [
      {name : 'LongChen',  age : 24},
      {name : event.target.value, age : 25},
      {name : "Max",   age : 32}
    ]})
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working!!!</p> 
        <button 
        style={style}
        onClick={this.switchNameHandler.bind(this,'Long!!')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this,'Long!')}
                changed={this.nameChangedHandler}>My Hobbies: Basketball</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Hi, I am a React App' ));
    // React.createElement('container', 'configuration', 'element')
    // * return  "JavaScript code"
  }
}

export default App;
