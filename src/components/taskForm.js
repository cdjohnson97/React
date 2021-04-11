import React, {useContext, useState} from 'react';
import {TaskListContext} from '../context/TaskListContext';
import HeaderMessage from './HeaderMessage';

const TaskForm = () => {

    const { addTask, tasks, setTasks } =  useContext(TaskListContext);

    const [title, setTitle] = useState('');

    const handleChange = e => {

        const inputTitle = e.target.value
        
        setTitle(inputTitle)

        console.log(title)
    }

    const handleSubmit = e => {
        e.preventDefault();

        addTask(title);
        
        setTitle('');
        
    }

    const resetInput = () => setTitle('')

    const clearAll = () => setTasks([])

    return <>
    {
        title ? <HeaderMessage title={title}/> : ''
    }
        
    <form className="form" onSubmit={handleSubmit}>
    <input
    value={title}
    onChange={handleChange}
    type="text" className="task-input"
    placeholder="Ajouter une tâche..." 
    required/>
    <div className="buttons">
        <button type="submit" className="btn add-task-btn">
            Ajouter
        </button>
        {
            tasks.length ? ( <button 
            type="reset"
            onClick={clearAll}
            className="btn add-task-btn">
            Tout effacer
        </button> ) : ''
        }
        <button
        onClick={resetInput}
        className="btn clear-btn" type="reset">Supprimer</button>
    </div>
    </form>
    </>
} 

export default TaskForm