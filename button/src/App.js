import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';

//Initial state
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    } 
  }

  // IncrementItem() we change our state clicks by adding 1.
  IncrementItem = () => this.setState({ clicks : this.state.clicks + 1});

  // DecreaseItem() we change our state clicks by removing 1.
  DecreaseItem = () => this.setState({ clicks: this.state.clicks - 1});

  SetToZero = () => this.setState({ clicks: 0})

  // ToggleClick() we flip our state show for opposite every time we click.
  ToggleClick = () => this.setState({ show: !this.state.show });

  
  render() {
    return (
      <div>
        <button className="plus" onClick={this.IncrementItem}>Click to + 1</button>
        <button className="reset" onClick={this.SetToZero}>Reset value 0</button>
        <button className="minus" onClick={this.DecreaseItem}>Click to -1</button>
        <button onClick={this.ToggleClick}>{ this.state.show ? 'Hide number' : 'Show number' } </button>
        { this.state.show ? <h2>total clicks : {this.state.clicks}</h2>  : '' }
      </div>
    )
  }
}

export default App;