import React from 'react';

const Task = props => {
    const { text, date, id, active, finishDate, important } = props.task;
    const finish = new Date(finishDate).toLocaleString()

    if (active) {
        return (
            <div>
                <p>
                    <strong style={important ? { color: 'red' } : null}>{text}</strong> | {<span>do: {date} </span>}
                    <button onClick={() => props.changeTaskStatus(id)}>Zostało zrobione</button>
                    <button onClick={() => props.delete(id)}>X</button>
                </p>
            </div>
        );
    } else {
        return (
            <div>
                <p>
                    <strong>{text}</strong> <span>(Zrobić do: {date})</span>
                    <br />
                    <em>Zrobiono {finish}</em>
                    <button onClick={() => props.delete(id)}>X</button>
                </p>
            </div>
        )
    }
}

export default Task;