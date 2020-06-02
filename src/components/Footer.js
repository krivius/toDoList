import React from "react";
import TodoItem from "./TodoItem";


class Footer extends React.Component {
    constructor() {
        super();
        this.state ={
            currId: 0,
            newTask: "",
            completed: false,
            taskList: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCheck = this.handleCheck.bind(this)
    }

    handleChange(event) {
        // console.log(event)
        const {name, value, type, checked} = event.target
        type === "checkbox" ?
            this.setState({ [name]: checked }) :
            this.setState({ [name]: value })
    }

    handleSubmit(event){
        event.preventDefault()

        const task = {
            id: this.state.currId +1,
            text: this.state.newTask,
            completed: this.state.completed
        }

        this.setState(prevState => ({currId: prevState.currId + 1}))
        this.state.taskList.push(task)
        // console.log(this.state.taskList)
    }

    handleCheck(id){
        this.setState(prevState =>{
            const updatedTasks = prevState.taskList.map(task => {
                if(task.id === id){
                    return {
                        ...task,
                        completed: !task.completed
                    }
                }
                return task
            })
            return{
                taskList: updatedTasks
            }
        });
    }

    render() {
        const listComponents = this.state.taskList.map(item => <TodoItem key={item.id} item={item} handleCheck={this.handleCheck}/>)
        return (

            <footer>
                <div className="todo-list">
                    {listComponents}
                </div>
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Add a new task</legend>
                        <textarea rows="2" cols="75" type="text"
                                  value={this.state.newTask}
                                  name="newTask" placeholder="New task"
                                  onChange={this.handleChange}
                        />
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="completed"
                                checked={this.state.completed}
                                onChange={this.handleChange}
                            /> Is complete
                        </label>
                        <br/>
                        <button>Submit</button>
                    </fieldset>
                </form>
            </footer>
        );
    }
}

export default Footer;