"use client"

import React, { useState } from 'react';
import { useTodo } from './TodoContext';
import clsx from 'clsx';

export default function TodoPage() {
    const { state, dispatch } = useTodo();
    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = () => {
        if (newTodo.trim()) {
            dispatch({
                type: 'add_todo',
                todo: { id: Date.now(), text: newTodo, completed: false }
            });
            setNewTodo('');  // Clear the input field
        }
    };

    return (
        <div className={'todo-page'}>
            <h1 className={'text-4xl text-center m-5'}>Todo List</h1>
            <div>
                <input className={'m-5 border rounded w-1/4 pb-2 pt-2 pl-5'}
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Enter new todo..."
                />
                <button className={'bg-blue-700 pb-2 pt-2 pl-4 pr-4 text-white font-bold text-1xl rounded'} onClick={handleAddTodo}>Add Todo</button>
            </div>
            <ul className={'w-1/3'}>
                {state.todos.map((todo) => (
                    <li className={'m-5 pb-2 border-b flex items-center justify-between'} key={todo.id}>
                        <span
                            onClick={() => dispatch({ type: 'toggle_todo', id: todo.id })}
                            className={clsx({ 'line-through': todo.completed })}
                        >
                            {todo.text}
                        </span>
                        <button className={'bg-blue-500 pb-1 pt-1 pl-2 pr-2 text-white font-bold text-1xl rounded'} onClick={() => dispatch({ type: 'remove_todo', id: todo.id })}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}