import React from 'react';

import './app-header.css'

const AppHeader = ({liked, allPosts}) => {
    return (
        <div className = 'app-header d-flex'>
            <h1> Georg Laabe </h1>
            <h2>Всего записей: {allPosts}, понравилось: {liked}</h2>
        </div>
    )
}

export default AppHeader;