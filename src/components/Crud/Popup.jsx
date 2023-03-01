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

const MyForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [dob, setDob] = useState("");
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const appendData = (e) => {
    e.preventDefault();
    const list =
    {
      name,
      contact,
      email,
      dob
    }

    props.addNewData(list)
    setName("");
    setEmail("");
    setContact("");
    setDob("");
    console.log("sajal ", list)

    handleClose();
  }

  return (
    <div>
      <Fab
        color="primary"
        aria-label="add"
        style={{ position: "fixed", bottom: "40px", right: "40px" }}
        onClick={handleOpen}
      >
        <AddIcon />
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
              label="Name"
              type="text"
              variant="outlined"
              name="name"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => { setName(e.target.value) }}
            />

            <TextField
              id="outlined-basic"
              label="Contact"
              type="text"
              variant="outlined"
              name="contact"
              placeholder="Enter Contact Number"
              value={contact}
              onChange={e => { setContact(e.target.value) }}
            />

            <TextField
              id="outlined-basic"
              label="Email"
              type="email"
              variant="outlined"
              name="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={e => { setEmail(e.target.value) }}
            />
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="Date Of Birth"
              type="text"
              name="dob"
              placeholder="dd/mm/yyyy"
              value={dob}
              onChange={e => { setDob(e.target.value) }}
            />

            <div>
              <Button variant="contained" type="submit">Add Data</Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default MyForm;