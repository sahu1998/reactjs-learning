import './Expense.css'
import React from 'react';
import ExpenseDate from './ExpenseDate';
import { useState } from 'react';
import ExpenseItem from "S:/frontend/react_learning/todo-list/src/ExpenseItem.json";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import ButtonGroup from '@mui/material/ButtonGroup';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ExpenseFunction = (props) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // let date = props.date.toISOString();
    let [title, setTitle] = useState(props.item.title)
    let [newTitle, setNewTitle] = useState(title)
    // let title = props.item.title;
    let amount = props.item.amount;
console.log("props => ",props)
    const setUpdatedTitle = () => {
        setTitle(newTitle);
        console.log("hello", title);
        handleClose();
    }

    const updateTitle = (e) => {
        setNewTitle(e.target.value)
    }
// const {item:{title:myTitle}}=props
    return (
       // <div>{myTitle}</div>
        <div className="expense-row">

            <ExpenseDate date={props.item.date} />
            <div>{title}</div>
            <div className ='amount'>${amount}</div>
            {/* <button onClick={handleOpen}>Edit</button> */}

            <Fab color="secondary" aria-label="edit" onClick={handleOpen}>
                <EditIcon />
            </Fab>

            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                onClose={handleClose}
            >
                <Box sx={style}>
                    <TextField
                        id="standard-basic"
                        label="Expense"
                        variant="standard"
                        value={newTitle}
                        name="title"
                        type="text"
                        onChange={updateTitle}
                    />
                    <ButtonGroup
                        // disableElevation
                        variant="contained"
                        aria-label="Disabled elevation buttons"
                    >
                        <Button variant="outlined" onClick={setUpdatedTitle}>Update</Button>
                        <Button variant="outlined" onClick={handleClose}>Cancel</Button>
                    </ButtonGroup>
                </Box>
            </Modal>

        </div>
    );
}


// export class ExpenseClass extends React.Component {
//     render() {
//         let title = this.props.item.title;
//         let amount = this.props.item.amount;
//         console.log(this.props.item);
//         return (
//             <div className="expense-row">
//                 <ExpenseDate date={this.props.item.date} />
//                 <div id='item'>{title}</div>
//                 <div id='amount'>${amount}</div>
//                 <div>{this.props.children}</div>
//             </div>
//         );
//     }
// }

export default ExpenseFunction;