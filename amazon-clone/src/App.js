import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';

function App() {
  return (
    <div className="app">
      {/* <h1>🚀 Amazon clone 🚀</h1> */}
      <Header />
      <Home />
      {/* home */}
    </div>
  );
}

export default App;
