import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; 
import './App.css';
import Header from './app/components/Header';

function App() {
  return (
    <div className="App">
      <Router>
      <>
        <Switch>
          <Route path="/" exact>
            <Header />
          </Route>
        </Switch>
      </>
    </Router>
    </div>
  );
}

export default App;