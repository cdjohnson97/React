import React, {useContext} from 'react';
import {TaskListContext} from '../context/TaskListContext';


const Task = ({task}) => {

    const {tasks, deleteTask } = useContext(TaskListContext)

    return <>
        
    <li className="list-item"> 
    <span>{task.text}</span>
    <div>        
        <button
        onClick={() => deleteTask(task.id)} 
        className="btn-delete task-btn">
            <i className="fas fa-trash-alt"></i>
            delete
        </button>
        <button className="btn-edit task-btn">
            <i className="fas fa-pen"></i>
            edit
        </button>
    </div>
    </li>
    
    </> 
}


export default Task