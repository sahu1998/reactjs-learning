import React, { createContext, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AddTask from '../AddTask';
import { deleteApiHandler, getApiHandler, postApiHandler } from '../apiHandler';
import TodoRoutes from '../TodoRoutes';
import ViewTask from '../ViewList/ViewTask';

export const userContext = createContext();

const TodoApp = () => {
    const { Provider } = userContext;
    const [data, setData] = useState([]);
    const getData = async (path) => {
        const res = await getApiHandler(path)
        console.log(path, ": ", res.data);
        setData(res.data)
    }

    const addToCompleted = async (id) => {
        const deleteData = await deleteApiHandler(`/todolist/${id}`);
        let temp = deleteData.data;
        temp = {...temp, isCompleted: true}
        const insertIntoCompleted = await postApiHandler('/completedtask', temp);
        getData("/todolist")
    }

    return (
        <Provider value={{ data, setData, getData, addToCompleted }}>
            <AddTask />
            <BrowserRouter>
                <ViewTask />
                <TodoRoutes />
            </BrowserRouter>
        </Provider>

    );
}

export default TodoApp;