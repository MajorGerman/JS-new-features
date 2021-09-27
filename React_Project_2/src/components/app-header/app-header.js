import React from 'react';

import './app-header.css'

const AppHeader = ({done, allTasks}) => {
    return (
        <div className = 'app-header d-flex'>
            <h1> Georg Laabe </h1>
            <h2> Всего задач: {allTasks}, выполнено: {done}</h2>
        </div>
    )
}

export default AppHeader;