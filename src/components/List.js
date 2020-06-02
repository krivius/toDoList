import React from "react";

import TodoItem from "./TodoItem";
// import ListData from "./ListData";

class List extends React.Component{
    constructor() {
        super();
        this.state ={
            todos: []
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(id){
        // console.log(id)
        this.setState(prevState =>{
            const updatedTodos = prevState.todos.map(todo => {
                if(todo.id === id){
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
            return{
                todos: updatedTodos
            }
        });
    }
    render() {

        const listComponents = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)

        return (
            <div className="todo-list">
                {listComponents}
            </div>
        );
    }
}

export default List;