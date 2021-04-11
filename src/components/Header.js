import React, {useContext} from 'react';
import {TaskListContext} from '../context/TaskListContext'
import HeaderMessage from './HeaderMessage';


const Header = () => {
    const {tasks} = useContext(TaskListContext)

    return <>
    <div className="header">
    <h1>Task Manager {tasks.length ? (
        tasks.length
    ): ''}</h1>
    <HeaderMessage />
    </div>
    </>
}


export default Header