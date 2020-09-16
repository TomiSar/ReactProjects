// // Pass a Component's State
//Child.js component
import React from 'react';
import ReactDOM from 'react-dom';

export class Child extends React.Component {
   constructor(props) {
    super(props);
    this.state = { name: '' };
  }
  render() {
    return <h1> Hey my name is {this.props.name} </h1>;
  }
}

// // Build a stateless component Class
// //Child.js
// import React from 'react';
// import ReactDOM from 'react-dom';

// export class Child extends React.Component {
//    constructor(props) {
//     super(props);
//     this.state = { name: 'Frarthur' };
//   }
//   render() {
//     return <h1>Hey my name is {this.props.name}!</h1>;
//   }
// }