import React from 'react';
import Task from './Task'

const TaskList = (props) => {
    //filtrowanie
    const active = props.tasks.filter(task => task.active)
    const done = props.tasks.filter(task => !task.active)
    //sortowanie
    done.sort((a, b) => {
        return b.finishDate - a.finishDate
    })
    if (active.length >= 2) {               
        active.sort((a, b) => {
            a = a.text.toLowerCase()       
            b = b.text.toLowerCase()
            if (a < b) { return -1 };      
            if (a > b) { return 1 };
            return 0;
        })
    }
    
    const tasksActive = active.map(task => <Task key={task.id} task={task} delete={props.delete} changeTaskStatus={props.changeTaskStatus} />)
    const tasksDone = done.map(task => <Task key={task.id} task={task} delete={props.delete} changeTaskStatus={props.changeTaskStatus} />)
    return (
        <>
            <div className='activeTasks'>
                <h1>Active Tasks</h1>
                {tasksActive.length > 0 ? tasksActive : <span>Great! No tasks to do</span>}
            </div>
            <hr />
            <div className='finishedTasks'>
                <h2>Tasks done <em>({tasksDone.length})</em></h2>
                {done.length > 5 ? <span style={{ fontSize: 10 }}>Only last 5 tasks are displayed</span> : null}
                {tasksDone.slice(0, 5)}
            </div >
        </>
    );
}

export default TaskList;