import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Juan Ocasio", age: 47 },
      { name: "James Paggett", age: 33 },
      { name: "John Jones", age: 46 }
    ]
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [{ name: newName, age: 48 }, { name: "James Paggett", age: 37 }]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "James", age: 48 },
        { name: event.target.value, age: 37 }
      ]
    });
  };
  render() {
    const style = {
      backgroundColor: "white",
      borderRadius: "5px",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };
    return (
      <div className="App">
        <h1>Change name</h1>
        <button
          style={style}
          onClick={this.switchNameHandler.bind(this, "George")}
        >
          Swich Name
        </button>
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={this.switchNameHandler.bind(this, "Hannah")}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={() => this.switchNameHandler("Wyllie")}
            changed={this.nameChangedHandler}
          >
            My Hobby
          </Person>
        </div>
      </div>
    );
  }
}

export default App;
