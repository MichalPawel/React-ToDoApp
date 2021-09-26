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
    // SPOSOB 1
    // const tasks = [...this.state.tasks]; //tworze kopie tasks
    // const index = tasks.findIndex(task => task.id === id); //znajduje index elementu
    // tasks.splice(index, 1) //wycinam element || metoda zmienia tasks, zwraca usuniete elementy (ale tego nie potrzebuje)
    // this.setState({
    //   tasks
    // })

    // SPOSOB 2
    let tasks = [...this.state.tasks] //kopia tablicy
    tasks = tasks.filter(task => task.id !== id) //do nowej tablicy przejda tylko te ktore maja inne id
    this.setState({
      tasks
    })
  }
  changeTaskStatus = (id) => {
    console.log(`changestatus id:${id}`)
    let tasks = Array.from(this.state.tasks) //kopia tablicy
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
    //sprawdzenie ostatniego id w tasks
    let lastID = 0;
    this.state.tasks.forEach(task => {
      if (task.id > lastID) {
        lastID = task.id
      }
    })
    //tworzenie nowego taska
    let task = {
      id: lastID + 1,
      text,
      date,
      important: checked,
      active: true,
      finishDate: null,
    }
    //sprawdenie czy nowy task poprawny
    if (task.text.length < 4) { return alert('wpisz przynajmniej 4 znaki') }
    //dodanie nowego taska
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
