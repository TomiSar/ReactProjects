import React ,{ useState} from 'react'
import TodoForm from './TodoForm';
import Todo from './ToDo';

function ToDoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if (!todo.text || /^\*$/.test(todo.text)) {
            return;
        }
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    }

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\*$/.test(newValue.text)) {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue: item))
        );
    }

    const removeTodo = id => {
        const removeArr = [...todos.filter(todo => todo.id !== id)]
        setTodos(removeArr);
    }

    const completeTodo = id => {
        let updatetdTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        })
        setTodos(updatetdTodos);
    }

    return (
        <div className="todo__list">
            <h1>⏱🚀 This is your To-Do-List 🖊️🌠</h1>    
            <TodoForm onSubmit={addTodo}/>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/> 
        </div>
    )
}

export default ToDoList;
