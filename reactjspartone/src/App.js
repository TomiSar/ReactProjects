import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

// Import result is the URL of your image
function Picture1() {
  return <img src={logo} alt="Logo" width="300" height="450"/>;
}

function Picture2() {
  return  <img src='https://www.cheatsheet.com/wp-content/uploads/2020/02/Steven-Seagal-1024x683.jpg' alt="StevenSeagal" width="450" height="600" />
}

function Picture3() {
  return  <img src='https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg' alt="Goose" width="450" height="450" />
}

// const Button = (props) => {

// }
  // console.log(this.state.clicks)
  // this.set.state({ clicks : this.state.clicks + 1})
  // console.log(`alarm button clicked ${this.state.clicks}`)
function activateAlert(parameter) {
  alert(`this is just a ${parameter}`)
}

//Lisätään listan jokaiselle Henklölle oma uniikki String key, jotta Avaimet ja arvot menevät oikein 
const people = ['Rowe', 'Prevost', 'Gare']; 
const peopleLis = people.map((person, i) => <li key={'person_' + i}>{person}</li>);

function App() {
  console.log(peopleLis)
  return (
    <div>
      <button onClick={() => activateAlert('false alarm')} >Activate alarm</button>
      <h1>React logo added in the app component</h1>
      <Picture1 />
      <h2>Hello React a choice of champions. I can assure you!!</h2> 
      <Picture2 />
      <h3>Picture of gooses</h3>
      <Picture3 />
      <div>
      </div>
    </div>
  );
}

export default App