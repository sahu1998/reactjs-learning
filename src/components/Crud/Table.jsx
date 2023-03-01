import React, { useState } from "react";
import MyForm from "./Popup";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './table.css'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
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
const MyTable = () => {

    let a;
    const [open, setOpen] = React.useState(false);
    const handleOpen = (index) => {
        a = index;
        setOpen(true);
    };
    const handleClose = () => setOpen(false);

    let [name, setName] = useState('')
    let [newName, setNewName] = useState(name)


    const [userData, setUserData] = useState([])
    const addNewData = (data) => {
        const tempData = [...userData];
        tempData.push(data);
        setUserData(tempData);
    }

    const deleteData = (i) => {
        const tempData = userData;
        tempData.splice(i, 1);
        setUserData([...tempData]);
    }

    const updateData = () => {
        // handleOpen();
        console.log(userData, " ", a);
        userData[a].name = newName;
        console.log(userData[a].name);
    }

    const setUpdatedData = () => {

    }
    return (
        <div>
            <table>
                <thead>
                    <tr className="heading">
                        <th>S.no.</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>D.O.B</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((list, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{list.name}</td>
                                <td>{list.contact}</td>
                                <td>{list.email}</td>
                                <td>{list.dob}</td>
                                <td>
                                    <Button variant="contained" startIcon={<EditIcon />}>
                                        Update
                                    </Button>
                                </td>
                                <td>
                                    <Button
                                        variant="contained"
                                        color="success"
                                        startIcon={<DeleteIcon />}
                                        onClick={deleteData}
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>

            </table>
            <MyForm addNewData={addNewData} />

            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                onClose={handleClose}
            >
                <Box sx={style}>
                    <form className="form">
                        <TextField
                            id="standard-basic"
                            label="Name"
                            variant="standard"
                            value={newName}
                            name="title"
                            type="text"
                            onChange={e => { setNewName(e.target.value) }}
                        />
                        {/* <TextField
                        id="standard-basic"
                        label="Contact"
                        variant="standard"
                        value={newContact}
                        name="contact"
                        type="text"
                        onChange={updateContact}
                    />
                    <TextField
                        id="standard-basic"
                        label="Email"
                        variant="standard"
                        value={newEmail}
                        name="email"
                        type="email"
                        onChange={updateEmail}
                    />
                    <TextField
                        id="standard-basic"
                        label="DOB"
                        variant="standard"
                        value={newDob}
                        name="dob"
                        type="date"
                        onChange={updateDob}
                    /> */}
                        <ButtonGroup
                            disableElevation
                            variant="contained"
                            aria-label="Disabled elevation buttons"
                        >
                            <Button variant="outlined" onClick={updateData}>Update</Button>
                            <Button variant="outlined" onClick={handleClose}>Cancel</Button>
                        </ButtonGroup>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}

export default MyTable;