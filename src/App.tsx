import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = 'all' | 'active' | 'completed';

export type TodolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}

function App() {
    // BLL:

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},
            {id: v1(), title: 'Rest API', isDone: false},
            {id: v1(), title: 'GraphQL', isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: 'HTML&CSS2', isDone: true},
            {id: v1(), title: 'JS2', isDone: true},
            {id: v1(), title: 'ReactJS2', isDone: false},
            {id: v1(), title: 'Rest API2', isDone: false},
            {id: v1(), title: 'GraphQL2', isDone: false},
        ]
    });


    function removeTask(todolistID: string, id: string) {
        setTasks({
            ...tasks,
            [todolistID]: tasks[todolistID].filter(t => t.id != id)
        })
    }

    function addTask(todolistID: string, title: string) {
        setTasks({
            [todolistID]: [
                {
                    id: v1(),
                    title: title,
                    isDone: false
                },
                ...tasks[todolistID]
            ],
            ...tasks
        })
    }

    function changeStatus(todolistID: string, taskId: string, isDone: boolean) {
        setTasks({
            ...tasks,
            [todolistID]: tasks[todolistID].map(t => t.id === taskId ? {...t, isDone} : t)
        })
    }

    // UI:

    const todolistsForRender = todolists.map(tl => {
        let tasksForTodolist = tasks[tl.id];

        if (tl.filter === 'active') {
            tasksForTodolist = tasks[tl.id].filter(t => t.isDone === false);
        }
        if (tl.filter === 'completed') {
            tasksForTodolist = tasks[tl.id].filter(t => t.isDone === true);
        }

        return (
            <Todolist
                key={tl.id}
                todolistID={tl.id}
                title={tl.title}
                tasks={tasksForTodolist}
                filter={tl.filter}
                removeTask={removeTask}
                addTask={addTask}
                changeTaskStatus={changeStatus}
                changeFilter={changeFilter}
            />
        )
    })

    function changeFilter(todolistID: string, value: FilterValuesType) {
        setTodolists(todolists.map(tl => tl.id === todolistID ? {...tl, filter: value} : tl))
    }


    return (
        <div className="App">
            {todolistsForRender}
        </div>
    );
}

export default App;
