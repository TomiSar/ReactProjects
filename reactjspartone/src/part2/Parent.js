// // Pass a Component's State
// Parent.js component
import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child'

class Parent extends React.Component {
 constructor(props) {
   super(props);
    this.state = { name: 'Frarthur' };
  }

  render() {
    return <Child name={this.state.name} />;
  }
}

ReactDOM.render(<Parent />, document.getElementById('app'));


// //Build a Stateless Component Class
// //Parent.js
// import React from 'react';
// import ReactDOM from 'react-dom';

// class Parent extends React.Component {
//  constructor(props) {
//     super(props);
//     this.state = { name: 'Frarthur' };
//   }

//   render() {
//   return <div></div>;
//   }
// }