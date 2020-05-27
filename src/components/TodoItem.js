import React from "react";

function TodoItem(props) {
    const completedStyle = {
        // fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    // console.log(this.props)
    return (
        <div className="todo-item">
            <input
                type="checkbox"
                value={props.item.id}
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
            />
            <p style={props.item.completed ? completedStyle : null}>{props.item.text}</p>
        </div>
    );

}

export default TodoItem