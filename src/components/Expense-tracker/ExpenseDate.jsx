import React from 'react';
import './ExpenseDate.css'
const ExpenseDate = (props)=>{
    let month = props.date.toLocaleString('en-US', { month: 'long' });
    let day = props.date.toLocaleString('en-us', { day: '2-digit' });
    let year = props.date.getFullYear();

        return(
            <div className="date-part">
                <div>{month}</div>
                <div id='day'>{day}</div>
                <div>{year}</div>
            </div>
        );
}
export default  ExpenseDate;