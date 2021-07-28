import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './ToDo';

function ToDoList() {
    const [todos, setTodos] = useState([]);
    
    const addTodo = (todo) => {
    // regex for handling whitespaces
    if (!todo.text || /^\*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };
  
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item )));
  };

  const removeTodo = id => {
    const removeArr = [...todos.filter(todo => todo.id !== id)];
    setTodos(removeArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };


  return (
    <div className="todo__list">
      <h1>⏱🚀 To-Do-List 🖊️🌠</h1>
      { todos.length === 0 ? <h4>ToDo list has no items</h4> : 
        <h4>ToDo list has {todos.length} {todos.length <= 1 ? 'item' : 'items'}</h4> }
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
    </div>
  );
}

export default ToDoList;