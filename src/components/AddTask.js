import React, { Component } from 'react';
import './AddTask.css'

class AddTask extends Component {
    state = {
        text: '',
        checked: false,
        date: new Date().toISOString().slice(0, 10)
    }
    handlePriority = (e) => {
        this.setState({
            checked: e.target.checked
        })
    }
    handleText = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    handleDate = (e) => {
        this.setState({
            date: e.target.value
        })
    }
    handleClick = () => {
        console.log('xd')
        const addTask = this.props.add(this.state.text, this.state.date, this.state.checked)
        if (addTask) {
            this.setState({
                text: '',
                checked: false,
                date: new Date().toISOString().slice(0, 10)
            })
        }
    }
    render() {
        const minDate = new Date().toISOString().slice(0, 10)
        let maxDate = minDate.slice(0, 4) * 1 + 1;
        maxDate = maxDate + "-12-31";
        return (
            <div className='form'>
                <input type="text" placeholder='add task' value={this.state.text} onChange={this.handleText} />
                <input type="checkbox" checked={this.state.checked} id='important' onChange={this.handlePriority} />
                <label htmlFor="important">High Priority</label>
                <br />
                <label htmlFor="deadline">Deadline:</label>
                <input type="date" value={this.state.date} min={minDate} max={maxDate} onChange={this.handleDate} />
                <br />
                <button onClick={this.handleClick}>Add task</button>
                <hr />
            </div>
        );
    }
}

export default AddTask;