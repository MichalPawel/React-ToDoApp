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
    if (active.length >= 2) {               //tylko jak sa przynajmniej 2 elementy
        active.sort((a, b) => {
            a = a.text.toLowerCase()        //sprawdzamy elementy zmienione na lower case zeby nie dalo duzych na poczatek
            b = b.text.toLowerCase()
            if (a < b) { return -1 };       //porownujemy a i b bo tak je zadeklarowalismy z to lower case
            if (a > b) { return 1 };
            return 0;
        })
    }
    //wyswietlanie
    const tasksActive = active.map(task => <Task key={task.id} task={task} delete={props.delete} changeTaskStatus={props.changeTaskStatus} />)
    const tasksDone = done.map(task => <Task key={task.id} task={task} delete={props.delete} changeTaskStatus={props.changeTaskStatus} />)
    return (
        <>
            <div className='activeTasks'>
                <h1>Zadania do zrobienia</h1>
                {tasksActive.length > 0 ? tasksActive : <span>Brak zadań do zrobienia</span>}
            </div>
            <hr />
            <div className='finishedTasks'>
                <h2>Zadania zrobione <em>({tasksDone.length})</em></h2>
                {done.length > 5 ? <span style={{ fontSize: 10 }}>Wyświetlane jest ostatnie 5 zrobionych zadań</span> : null}
                {tasksDone.slice(0, 5)}
            </div >
        </>
    );
}

export default TaskList;