import React from "react";

const Todo = (props) => {
    return (
        <div className="todo">
            <li>{props.todo}</li>
        </div>
    )
};

export default Todo