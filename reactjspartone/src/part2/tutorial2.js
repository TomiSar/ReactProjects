/* Learn React.js: Part II */
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


//Child.js component
import React from 'react';
import ReactDOM from 'react-dom';

export class Child extends React.Component {
   constructor(props) {
    super(props);
    this.state = { name: '' };
  }
  render() {
    return <h1> Name is {this.props.name} </h1>;
  }
}

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
