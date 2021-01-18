import React, {Component} from "react";
//import logo from './logo.svg';
import List from './List'
import "./App.css";

//As we can see our state is a object with two properties term and items term to store
//what we passing as a value to our input items to store every value which we passing to our todo list
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      items: [],
    };
  }

  //onChange event
  onChange = (event) => {
    this.setState({ term: event.target.value });
  };

  //onSubmit event
  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.term)
    this.setState({
      term: "",
      items: [...this.state.items, this.state.term],
    });
  };

  render() {
    return (
    <div>
      <form className="App" onSubmit={this.onSubmit}>
      <input className="value" value={this.state.term} onChange={this.onChange} />
      <button className="btn">Submit</button>
      </form>
      <List items={this.state.items} />
    </div>
    )
  }
}