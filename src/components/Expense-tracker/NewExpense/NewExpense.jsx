import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';

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

const NewExpense = (props) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const appendData = (e) => {
    e.preventDefault();
    const list =
    {id:amount,
      title: title,
      date: new Date(date),
      amount: amount
    }
    console.log("sajal........ ", list)

    props.onSetNewExpense(list)
    setTitle("");
    setDate("");
    setAmount("");

    handleClose();
  }

  return (
    <div>
      <Fab
        color="primary"
        aria-label="add"
        onClick={handleOpen}
      >
        <AddIcon/>
      </Fab>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onClose={handleClose}
      >
        <Box sx={style}>
          <form className="form" onSubmit={appendData}>
            <TextField
              id="outlined-basic"
              label="Expense"
              type="text"
              variant="outlined"
              name="title"
              placeholder="Enter Expense Name"
              value={title}
              onChange={(e) => { setTitle(e.target.value) }}
            />

            <TextField
              id="outlined-basic"
              // label="Date"
              type="date"
              variant="outlined"
              name="date"
              placeholder="Enter Expense Date"
              value={date}
              onChange={e => { setDate(e.target.value) }}
            />

            <TextField
              id="outlined-basic"
              label="Expense Amount"
              variant="outlined"
              type="number"
              name="amount"
              placeholder="Enter Expense Amount"
              value={amount}
              onChange={e => { setAmount(e.target.value) }}
            />
            <div>
              <Button variant="contained" type="submit">Add Expense</Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default NewExpense;