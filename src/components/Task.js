import React from 'react';

const Task = props => {
    const { text, date, id, active, finishDate, important } = props.task;
    const finish = new Date(finishDate).toLocaleString()

    if (active) {
        return (
            <div>
                <p>
                    <strong style={important ? { color: 'red' } : null}>{text}</strong> | {<span>Deadline: {date} </span>}
                    <button onClick={() => props.changeTaskStatus(id)}>Mark as done</button>
                    <button onClick={() => props.delete(id)}>X</button>
                </p>
            </div>
        );
    } else {
        return (
            <div>
                <p>
                    <strong>{text}</strong> <span>(Deadline: {date})</span>
                    <br />
                    <em>Done {finish}</em>
                    <button onClick={() => props.delete(id)}>X</button>
                </p>
            </div>
        )
    }
}

export default Task;