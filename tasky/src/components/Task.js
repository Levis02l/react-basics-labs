import React from "react";

const Task = (props) => {
    let priorityColor 
    switch (props.priority) {
        case 'High':
            priorityColor = '#b22222';
            break;
        case 'Medium':
            priorityColor = '#cd853f';
            break;
        default:
            priorityColor = '#2e8b57'; 
    }

    return(
        <div className="card" style={{background: props.done? 'lightgrey' : '#5bb4c4'}}>
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className="description">{props.description}</p>
            <p className="priority" style={{background: priorityColor}}>{props.priority}</p>
            <button onClick={props.markDone} className="doneButton">Done</button>
            <button onClick={props.deleteTask} className="deleteButton">Delete</button>
        </div>
    )
    


}
export default Task;