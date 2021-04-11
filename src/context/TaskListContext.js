import React, { createContext, useState } from 'react';

export const TaskListContext = createContext();

const TaskListContextProvider = props => {

    const [tasks, setTasks] = useState([])

    const addTask = text => {
        setTasks([...tasks, {
            text,
            id: Math.floor(Math.random() * 1000)
        }])

        console.table(tasks)
    }

    const deleteTask = id => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    return (
        <TaskListContext.Provider
            value={{
                tasks,
                addTask,
                setTasks,
                deleteTask
            }}>
            {props.children}
        </TaskListContext.Provider>
    )
}


export default TaskListContextProvider; 