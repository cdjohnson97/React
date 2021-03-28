import React from "react";
import './Todo.css'

const Todo = ({ todo }) => {
    
    return (
        <div className="todo">
            <li>{todo}</li>
        </div>
    )
};

export default Todo