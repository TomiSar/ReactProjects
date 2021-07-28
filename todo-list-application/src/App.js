import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='todo__app'>
      <div className="todo__appbody">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
