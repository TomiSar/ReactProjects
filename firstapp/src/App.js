import React, { Component } from 'react';
import "./App.css";
import MyComponent from "./MyComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: true,   //State is an object and YOU can give it initial values in the constructor, e.g
    };
  }

  //toggle function
  toggle = () => this.setState({ isOn: !this.state.isOn });

  render() {
    return (
      <div>
        <div>
          <h2>Welcome to React</h2>
          <MyComponent name="SantaClaus" />
        </div>
        {/* You can access state in the render method using this.state, for example 
        if we want to use the isOn property we get it from this.state.isOn */}
        <button onClick={this.toggle}>{this.state.isOn ? "On" : "Off"}</button>
      </div>
    );
  }
}

export default App;
