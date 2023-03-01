import React, { useState } from 'react';
import ExpenseFunction, { ExpenseClass } from './Expense';
import './ExpenseList.css'
import NewExpense from './NewExpense/NewExpense';

let dummy_expense = [
  {
    id: 'e1',
    title: "Car Insurance",
    amount: 250,
    date: new Date(2021, 3, 1)  // (year,month,date)
  },
  {
    id: 'e2',
    title: "Medicines",
    amount: 200,
    date: new Date(2021, 3, 20)  // (year,month,date)
  },
  {
    id: 'e3',
    title: "Food",
    amount: 170,
    date: new Date(2021, 3, 15)  // (year,month,date)
  },
  {
    id: 'e4',
    title: "Cloths",
    amount: 20,
    date: new Date(2021, 4, 22)  // (year,month,date)
  }
]

export default function ExpenseList(props) {
  const [expenses, setExpenses] = useState(dummy_expense);

  const setNewExpense = (data) => {
    console.log("data successfull transfer", data);
    const updateExpense = [...expenses];
    updateExpense.push(data);
    setExpenses(updateExpense);
  }

  console.log("this is current data ",expenses);

  return (
    <div className='expense-app'>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <div><h1>YOUR EXPENSES</h1></div>
        <div style={{padding: '15px'}}><NewExpense onSetNewExpense={setNewExpense} /></div>
      </div>

      {
        expenses.map(((expense,index) => <ExpenseFunction key={index} item={expense} />))
      }


      {/* {expenses.map(expense => {
        return (
          <ExpenseFunction item={expense} />
        );
      })} */}

      {/*

      <ExpenseFunction item={expenses[0]} />
      <ExpenseFunction item={expenses[1]} />
      <ExpenseFunction item={expenses[2]} />
      <ExpenseFunction item={expenses[3]} /> 
      
      */}

    </div>
  );
} 