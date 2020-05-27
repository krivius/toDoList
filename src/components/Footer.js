import React from "react";


class Footer extends React.Component {
    constructor() {
        super();
        this.state ={
            newTask: "",
            completed: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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
        console.log(this.state)
    }

    render() {
        return (
            <footer>
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