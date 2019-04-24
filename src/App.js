import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 26 },
      { name: 'stephanie', age: 29 }
    ],
    otherState: 'Some other value',
    showPersons: false
  }
  togglePersonHandler = () => {
    console.log("toogle");
    const doesShow =this.state.showPersons;
    this.setState({showPersons:!doesShow});
  }

  switchNameHandler = () => {
    // Do Not Use == this.state.persons[0].name="Arup";
    this.setState({
      persons: [
        { name: 'Maximu', age: 28 },
        { name: 'Manu', age: 26 },
        { name: 'stephanie', age: 29 }
      ]
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 26 },
        { name: 'stephanie', age: 29 }
      ]
    });
  }


  render() {
    return (
      <div className="App">
        <h1>Hi, I'm  a React App</h1>
        <p>This is realy works!</p>
        <button onClick={this.togglePersonHandler}>Switch Name</button>
        {this.state.showPersons ?
          <div>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangeHandler} > my habbies: racing </Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
          </div>:null
        }


      </div>
    );
  }
}

export default App;
