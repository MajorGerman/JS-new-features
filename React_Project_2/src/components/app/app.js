import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TaskStatusFilter from '../task-status-filter';
import TaskList from '../task-list';
import TaskAddForm from '../task-add-form';

import './app.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: 'Сходить в магазин', important: false, done: false, id: 1},
                {label: 'Поиграть в Майнкрафт', important: false, done: false, id: 2}
            ],
            term: '',
            filter: 'all'
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleDone = this.onToggleDone.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
        this.maxId = 4;
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

            return {
                data: newArr
            }
        });
    }

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            
            return {
                data: newArr
            }
        })
    }

    onToggleImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, important: !old.important};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            
            return {
                data: newArr
            }
        });
    }

    onToggleDone(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index]; 
            const newItem = {...old, done: !old.done};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        });
    }

    searchPost(items, term) {
        if (term.length === 0) {
            return items
        }

        return items.filter((item) => {
            return item.label.indexOf(term) > -1
        });
    }

    filterPost(items, filter) {
        if (filter === 'done') {
            return items.filter(item => item.done)
        } else if (filter === 'active') {
            return items.filter(item => !item.done)
        } else {
            return items
        }
    }

    onUpdateSearch(term) {
        this.setState({term})
    }

    onFilterSelect(filter) {
        this.setState({filter})
    }

    render() {
        const {data, term, filter} = this.state;
        
        const done = data.filter((item) => item.done).length;
        const allTasks = data.length;
        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);
        
        return (
            <div className = 'app'>
                <AppHeader done = {done} allTasks = {allTasks}/>
                <div className = 'search-panel d-flex'>
                    <SearchPanel
                        onUpdateSearch = {this.onUpdateSearch}/>
                    <TaskStatusFilter
                        filter = {filter}
                        onFilterSelect = {this.onFilterSelect}/>
                </div>

                <hr/>

                <TaskList 
                    posts = {visiblePosts}
                    onDelete = {this.deleteItem}
                    onToggleImportant = {this.onToggleImportant}
                    onToggleDone = {this.onToggleDone}/>
                    <hr/>
                    <TaskAddForm   
                        onAdd = {this.addItem}/>
            </div>
        )    
    
    }
    
}