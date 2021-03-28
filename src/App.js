import React, { useState } from "react";
import "./styles.css";
import Todo from  "./components/Todo.js";
import Input from  "./components/Input.js";


export default function App() {

  const [people, setPeople] = useState([]);

  const [input, setInput ] = useState('');


  const addItems = (e) => {

    e.preventDefault();

    if(input) {

      setPeople([

      ...people,
      {
      name: input,

      id: Math.random() * 1000
      }
      
      ])

    setInput('')

    }

    return   
                                
  }

  const delItem = id => {

    const newList = people.filter(person => {
      return person.id !== id
    })

    setPeople(newList)

  }

  const delAll = () => setPeople([])

  
  return <>
  <center>
  <h2>List of people</h2>

  <Input 
  setInput={setInput} 
  input={input}
  addItems={addItems}
  /> 


  {
    people.map(({id, name}) => {

      return <div key={id}>
        <Todo todo={name} />
        <button onClick={() => delItem(id)}>X</button>
      </div>
    }
    )
  }
  {
    people.length ? <button onClick={delAll}>Vider la liste</button> :
    <p>Votre liste est vide commencer à ajouter des elements</p>
  }
  
  </center>
  </>
  
} 