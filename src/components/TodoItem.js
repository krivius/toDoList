import React from "react";

function TodoItem(props) {

    // console.log(this.props)
    return (
        <div className="todo-item">
            <input
                type="checkbox"
                value={props.item.id}
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
            />
            <p>{props.item.text}</p>
        </div>
    );

}

export default TodoItem