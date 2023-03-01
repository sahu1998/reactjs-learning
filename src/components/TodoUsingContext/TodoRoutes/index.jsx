import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getApiHandler } from '../apiHandler';
import { userContext } from '../TodoApp';
import TodoList from '../ViewList/Table';

const TodoRoutes = () => {
    const getContext = useContext((userContext));

    

    return (
        <Routes>
            <Route path="/" element={<TodoList show="todo" />} />
            <Route path="/completedtask" element={<TodoList show="completed"/>} />
        </Routes>
    );
}

export default TodoRoutes;