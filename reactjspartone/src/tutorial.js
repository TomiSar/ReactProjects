//* Learn React.js: Part I *//
//JSX Recap

// //Use an Event Listener in a Component
// import React from 'react';
// import ReactDOM from 'react-dom';

// class Button extends React.Component {
//   scream() {
//     alert('AAAAAAAAHHH!!!!!');
//   }

//   render() {
//     return <button onClick={this.scream}></button>;
//   }
// }

// ReactDOM.render(<Button />, document.getElementById('app'));

// // //Use this in a component
// import React from 'react';
// import ReactDOM from 'react-dom';

// class MyName extends React.Component {
// 	// name property goes here:
//   get name() {
//     return 'Tommy Boy';
//   }

//   render() {
//     return <h1>My name is {this.name}.</h1>;
//   }
// }

// ReactDOM.render(<MyName />, document.getElementById('app'));

//Use a conditional render function
// //TonightPlan.js
// import React from 'react';
// import ReactDOM from 'react-dom';

// const fiftyFifty = Math.random() < 0.5;

// // New component class starts here:
// class TonightsPlan extends React.Component {
//   render() {
//     let task;
//      if (fiftyFifty ? task = 'out' : task = 'to bed')
//     return <h1>Tonight I'm going {task} WOOO</h1>
//   }
// }

//ReactDOM.render(<TonightsPlan />, document.getElementById('app'));

//export default TonightsPlan

// //TodaysPlan.js
// import React from 'react';
// import ReactDOM from 'react-dom';

// class TodaysPlan extends React.Component {
//   render() {
    
//     let task;
//     if (!apocalypse) {
//       task = 'learn React.js'
//     } else {
//       task = 'run around'
//     }

//     return <h1>Today I am going to {task}!</h1>;
//   }
// }

// ReactDOM.render(<TodaysPlan />, document.getElementById('app'));

// //Put logic in render function
// import React from 'react';
// import ReactDOM from 'react-dom';

// const friends = [
//   {
//     title: "Yummmmmmm",
//     src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyweirdo.jpg"
//   },
//   {
//     title: "Hey Guys!  Wait Up!",
//     src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-earnestfrog.jpg"
//   },
//   {
//     title: "Yikes",
//     src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-alpaca.jpg"
//   }
// ];

// // New component class starts here:
// class Friend extends React.Component {
//     render() {
//       const friend = friends[1];
//     return (
//       <div>
//         <h1>{friend.title}</h1>
//           <img src={friends[1].src} src={friends[1].src}/>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Friend />,  document.getElementById('app'));

// //Use a Variable Attribute in a Component
// //app.js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import redPanda from './RedPanda';

// const owl = {
//   title: 'Excellent Owl',
//   src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-owl.jpg'
// };

// // Component class starts here:
// class Owl extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{owl.title}</h1>
//         <img src={owl.src} 
//              alt={owl.title}/>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Owl />, document.getElementById('app'));

// //RedPanda.js
// import React from 'react';
// import ReactDOM from 'react-dom';

// const redPanda = {
//   src: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Endangered_Red_Panda.jpg',
//   alt: 'Red Panda',
//   width:  '200px'
// };

// class RedPanda extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Cute Red Panda</h1>
//         <img 
//           src={redPanda.src}
//           alt={redPanda.alt}
//           width={redPanda.width} />
//       </div>
//     );
//   }
// }

// ReactDOM.render(<RedPanda />, document.getElementById('app'));
// export default RedPanda


// //Use Multiline JSX in a Component
// import React from 'react';
// import ReactDOM from 'react-dom';

// class QuoteMaker extends React.Component {
//   render() {
//     return (
//       <blockquote>
//         <p>
//           The god has mercy Chuck does not
//         </p>
//         <cite>
//           <a target="_blank" href="https://en.wikipedia.org/wiki/Chuck_Norris">Chuck Norris</a>
//         </cite>
//       </blockquote>
//     )
//   }
// };

// ReactDOM.render(<blockquote/>, document.getElementById('app'));

////Event Listeners in JSX
/*import React from 'react';
import ReactDOM from 'react-dom';

function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

const kitty = (
	<img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg" 
		alt="kitty" onClick={makeDoggy} />
);

ReactDOM.render(kitty, document.getElementById('app'));*/

// // //Event Listeners in JSX
// import React from 'react';
// import ReactDOM from 'react-dom';

// // Call this extremely useful function on an <img>.
//   // The <img> will become a picture of a doggy.
// function makeDoggy(e) {
//   e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg');
//   e.target.setAttribute('alt', 'doggy');
// }

// const kitty = (
// 	<img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg" 
// 		alt="kitty" onClick={makeDoggy} />
// );

// ReactDOM.render(kitty, document.getElementById('app'));

// //JSX Conditionals: If Statements That Do Work
// //JSX Conditionals: The Ternary Operator
// import React from 'react';
// import ReactDOM from 'react-dom';

// // Randomly return either 'heads' or 'tails'.
// function coinToss () {
//   return Math.random() < 0.5 ? 'heads' : 'tails';
// }

// const pics = {
//   kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
//   doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
// };

// //const img = <img src={pics[heads ? kitty : z]} />;
// //x ? y : z       --> x = coinToss return heads   ? true    :  false       
// const img = <img src={pics[coinToss() === 'heads' ? 'kitty' : 'doggy']} />;

// ReactDOM.render(img, document.getElementById('app'));

//JSX Conditionals: &&
//Here’s an example:

// const tasty = (
//   <ul>
//     <li>Applesauce</li>
//     { !baby && <li>Pizza</li> }
//     { age > 15 && <li>Brussels Sprouts</li> }
//     { age > 20 && <li>Oysters</li> }
//     { age > 25 && <li>Grappa</li> }
//   </ul>
// );
// If the expression on the left of the 
// && evaluates as true, then the JSX on the right of the && will be rendered. 
// If the first expression is false, however, then the JSX to the right of the && will be ignored and not rendered.

/*import React from 'react';
import ReactDOM from 'react-dom';

// judgmental will be true half the time.
//Will be on the list 50/50 change
const judgmental = Math.random() < 0.5;

const favoriteFoods = (
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
    { !judgmental && <li>Sushi Burrito</li> }
      <li>Rhubarb Pie</li>
    { !judgmental &&  <li>Nacho Cheez Straight Out The Jar</li> }
      <li>Broiled Grapefruit</li>
    </ul>
  </div>
);

ReactDOM.render(favoriteFoods, document.getElementById('app'));*/

////Variable Attributes in JSX
// import React from 'react';
// import ReactDOM from 'react-dom';

// const goose = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg';

// // Declare new variable here:
// const gooseImg = ( <img src={goose} />)

// ReactDOM.render(gooseImg, document.getElementById('app'));


// //Object properties are also often used to set attributes:
// // Use a variable to set the `height` and `width` attributes:

// const sideLength = "200px";

// const panda = (
//   <img 
//     src="images/panda.jpg" 
//     alt="panda" 
//     height={sideLength} 
//     width={sideLength} />
// );

// //Object properties are also often used to set attributes:
// const pics = {
//   panda: "http://bit.ly/1Tqltv5",
//   owl: "http://bit.ly/1XGtkM3",
//   owlCat: "http://bit.ly/1Upbczi"
// }; 

// const panda = (
//   <img 
//     src={pics.panda} 
//     alt="Lazy Panda" />
// );

// const owl = (
//   <img 
//     src={pics.owl} 
//     alt="Unimpressed Owl" />
// );

// const owlCat = (
//   <img 
//     src={pics.owlCat} 
//     alt="Ghastly Abomination" />
// ); 


// //.map in JSX
// // The array method .map() comes up often in React. It’s good to get in the habit of using it alongside JSX.
// // If you want to create a list of JSX elements, then .map() is often your best bet. It can look odd at first:
// const strings = ['Home', 'Shop', 'About Me'];
// const listItems = strings.map(string => <li>{string}</li>);
// <ul>{listItems}</ul>

/*import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];
const peopleLis = people.map(person => <li>{person}</li>);

// ReactDOM.render goes here:
ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app'));*/

//Keys
// A key is a JSX attribute. The attribute’s name is key. The attribute’s value should be something unique, similar to an id attribute.
// keys don’t do anything that you can see! React uses them internally to keep track of lists. If you don’t use keys when you’re supposed 
//to, React might accidentally scramble your list-items into the wrong order.
// Not all lists need to have keys. A list needs keys if either of the following are true:
// The list-items have memory from one render to the next. For instance, when a to-do list renders, each item must “remember” 
//whether it was checked off. The items shouldn’t get amnesia when they render.

// A list’s order might be shuffled. For instance, a list of search results might be shuffled from one render to the next.
/*Each key must be a unique string that React can use to correctly pair each rendered element with its corresponding item in the array.
So, for each element in people, we must generate a unique value. How can you get .map() to produce unique keys?
First, add an i parameter to .map()‘s inner function, so that you can access each person’s unique index:*/
// import React from 'react';
// import ReactDOM from 'react-dom';

// const people = ['Rowe', 'Prevost', 'Gare'];
// //Lisätään listan jokaiselle Henklölle oma uniikki String key, jotta Avaimet ja arvot menevät oikein  
// const peopleLis = people.map((person, i) => <li key={'person_' + i}>{person}</li>);

// console.log(peopleLis)

// //const listItems = numbers.map((number) => <li key={number.toString()}> {number} </li> );
// // ReactDOM.render goes here:
// ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app'));