import React, { useState } from "react";
import "./styles.css";
import Todo from './components/Todo'

export default function App() {
  const [todos, setTodos] = useState([]);

  const [input, setInput] = useState('');


  const handleChange = (e) => {

    let currentInput = e.target.value;

    setInput(currentInput)

  }

  const addTodo = (e) => {

    e.preventDefault();

    setTodos([...todos, input])

    console.log(input)

    setInput('')    
  }

  return (
    <div className="App">
      <h2 className='heading'>ToDo</h2>
      <div className="form">
        <input value={input} onChange={handleChange} />
        <button onClick={addTodo}>+</button>
      </div>
      <ul>
        {todos.map(todo => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}
