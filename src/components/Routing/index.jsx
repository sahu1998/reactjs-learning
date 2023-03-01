import React from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import Counter from '../Counter/Counter';
import NavBar from '../UnitConverter/NavBar/NavBar';
import MyTable from '../Crud/Table';
import StudentData from '../Cruduseform/InSingleFile';
import ExpenseList from '../Expense-tracker/ExpenseList';
import FormDemo from '../MuiForm/FormDemo';

const Routing = () => {
    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'row', gap: '20px'}}>
                <div>
                    <NavLink
                        to="/"
                        style={
                            ({ isActive }) => (
                                {
                                    color: isActive ? 'lightgreen' : 'black'
                                }
                            )
                        }
                    >
                        Converter
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/counter" style={({ isActive }) => ({
                        color: isActive ? 'lightgreen' : 'black'
                    })}>Counter</NavLink>
                </div>
                <div>
                    <NavLink to="/mytable" style={({ isActive }) => ({
                        color: isActive ? 'lightgreen' : 'black'
                    })}>MyTable</NavLink>
                </div>
                <div>
                    <NavLink to="/studentdata" style={({ isActive }) => ({
                        color: isActive ? 'lightgreen' : 'black'
                    })}>Student Data</NavLink>
                </div>
                <div>
                    <NavLink to="/expensetracker" style={({ isActive }) => ({
                        color: isActive ? 'lightgreen' : 'black'
                    })}>Expense Tracker</NavLink>
                </div>
                <div>
                    <NavLink to="/formvalidate" style={({ isActive }) => ({
                        color: isActive ? 'lightgreen' : 'black'
                    })}>Form Demo</NavLink>
                </div>
            </div>
            <Routes>
                <Route path="/" element={<NavBar />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/mytable" element={<MyTable />} />
                <Route path="/studentdata" element={<StudentData />} />
                <Route path="/expensetracker" element={<ExpenseList />} />
                <Route path="/formvalidate" element={<FormDemo />} />
                <Route path="*" element={<StudentData />} />
            </Routes>

        </div>
    );
}

export default Routing;