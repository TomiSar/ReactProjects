import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(
    props.edit ? props.edit.value : ''
  );
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  //to change the input type text
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  //if form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();

    // generate randomId for toDo item
    props.onSubmit({
      id: Math.floor(Math.random() * 1000000),
      text: input,
    });
    setInput('');
  };

  return (
    <form className="todo__form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input className="todo__input" type="text" placeholder="Update your task"
            value={input} name="text" onChange={handleChange} ref={inputRef} />
          <button className="todo__button">Update</button>
        </>
      ) : (
        <>
          <input
            className="todo__input" type="text" placeholder="Add To do task"
            value={input} name="text" onChange={handleChange}ref={inputRef}/>
          <button className="todo__button">Add To do</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
