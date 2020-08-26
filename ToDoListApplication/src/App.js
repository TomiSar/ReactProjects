import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import { v4 as uuid } from "uuid";
import axios from "axios";

import "./App.css";

class App extends Component {
  state = {
    todos: [
      //#region Hardcoded values for todos
      // {
      //   id: uuid(), //id --> uuid() method generates random id for ToDo list
      //   title: 'Take out the trash',
      //   completed: false,
      // },
      // {
      //   id: uuid(),
      //   title: 'Dinner with friend',
      //   completed: false,
      // },
      // {
      //   id: uuid(),
      //   title: 'Meeting with a customer',
      //   completed: false,
      // },
      // {
      //   id: uuid(),
      //   title: 'Skateboarding, composing music, reading and free time',
      //   completed: false,
      // },
      //#endregion
    ]
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10') //limit todos list only ten tasks
    .then(res => this.setState({todos : res.data}));
  }

  //Toggle complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };
    
  //Delete Todo
  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter
      (todo => todo.id !== id)] }));
    // this.setState({
    //   todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    // });
  };

  //Add to new task (id)
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    }).then(res => { res.data.id = uuid(); this.setState({ todos: [...this.state.todos, res.data] })});
    //console.log(title)
    // const newTodo = {
    //   id: uuid(),
    //   title,
    //   completed: false,
    // };
    //this.setState({ todos: [...this.state.todos, newTodo] });
  }

  //exact path for Todo list http://localhost:3000 Link via router added in Header.js  
  //path for About http://localhost:3000/about Link via router added in Header.js
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
                </React.Fragment>
              )} />
              <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;