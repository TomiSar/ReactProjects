import React, { useState, useEffect, useRef} from "react";

function TodoForm(props) {
  const [input, setInput] = useState('');

  const inputRef = useRef(null);

  useEffect(()=> {
    inputRef.current.focus()
  })

  //to change the input type text
  const handleChange = event => {
    setInput(event.target.value);
  }

  //if form is submitted  
  const handleSubmit = event => {
    event.preventDefault();
    
    props.onSubmit({
      id: Math.floor(Math.random() * 1000000),
      text: input
    })
    setInput('');
  }

  return (
    <form className="todo__form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Add To do task" value={input}
      name="text" className="todo__input" onChange={handleChange} ref={inputRef}/>
      <button className="todo__button">Add To do task</button>
    </form>
  );
}

export default TodoForm;