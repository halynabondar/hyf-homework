import React from 'react';
import {TodoProvider} from "./TodoContext";
import TodoPage from './TodoPage';

function TodoList() {
    return (
        <TodoProvider>
            <TodoPage/>
        </TodoProvider>
    );
}

export default TodoList;
