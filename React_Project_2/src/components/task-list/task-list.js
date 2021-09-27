import React from "react";

import TaskListItem from '../task-list-item';
import './task-list.css';

const TaskList = ({posts, onDelete, onToggleImportant, onToggleDone}) => {
    
    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key = {id} className = 'list-group-item'>
                <TaskListItem
                    {...itemProps}
                    onDelete = {() => onDelete(id)}
                    onToggleImportant = {() => onToggleImportant(id)}
                    onToggleDone = {() => onToggleDone(id)}/>
            </li>
        )
    });

    return (
        <ul className = 'app-list list-group'>
            {elements}
        </ul>
    )
}

export default TaskList;