import React, { Component } from 'react';
import AddTask from './AddTask'
import TaskList from './TaskList'
import './App.css';

class App extends Component {
  state = {
    tasks: [],
  }
  deleteTask = (id) => {
    console.log(`delete id:${id}`);
    
    let tasks = [...this.state.tasks] 
    tasks = tasks.filter(task => task.id !== id) 
    this.setState({
      tasks
    })
  }
  changeTaskStatus = (id) => {
    console.log(`changestatus id:${id}`)
    let tasks = Array.from(this.state.tasks) 
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = !task.active
        task.finishDate = new Date()
      }
    })
    this.setState({
      tasks
    })
  }
  addTask = (text, date, checked) => {
  
    let lastID = 0;
    this.state.tasks.forEach(task => {
      if (task.id > lastID) {
        lastID = task.id
      }
    })
    
    let task = {
      id: lastID + 1,
      text,
      date,
      important: checked,
      active: true,
      finishDate: null,
    }
    
    if (task.text.length < 4) { return alert('type at least 4 characters') }
    
    let currentTasks = [...this.state.tasks];
    currentTasks.push(task);
    this.setState({
      tasks: currentTasks
    })
    return true
  }
  render() {
    return (
      <div className="App">
        <h1>TODO APP</h1>
        <AddTask add={this.addTask} />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} changeTaskStatus={this.changeTaskStatus} />
      </div>
    );
  }
}

export default App;
