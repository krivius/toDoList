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
                id={props.item.id}
                onChange={() => props.handleCheck(props.item.id)}
            />
            <p style={props.item.completed ? completedStyle : null}>
                {props.item.text}
                <button className="btnRemove" onClick={() => props.handleRemove(props.item.id)}>Remove</button>
            </p>
        </div>
    );

}

export default TodoItem