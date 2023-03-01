import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";


import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';

import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

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
const StudentData = () => {
    const [data, setData] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [currentId, setCurrentId] = useState('');

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false)
        setCurrentId('');
        reset();
    };
 
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors }
    } = useForm(
        {
            defaultValues:
            {
                name: "",
                email: "",
                age: ""
            }
        }
    );

    // const updateData = (index) => {
    //     const { name, email, age } = data[index];
    //     setCurrentId(index);
    //     console.log("Id -> ", currentId)
    //     console.log(name, "+", email, "+", age);
    //     setValue("name", name);
    //     setValue("email", email);
    //     setValue("age", age);
    // }

    useEffect(() => {
        if (currentId !== "") {
            const { name, email, age } = data[currentId];

            console.log("Id -> ", currentId)
            console.log(name, "+", email, "+", age);
            setValue("name", name);
            setValue("email", email);
            setValue("age", age);
        }
    }, [currentId])
    const onSubmit = (values) => {

        if (currentId !== "") {
            let temp = data;
            console.log("onSubmit if ->", currentId)
            temp.splice(currentId, 1, values);
        } else {
            console.log("values => ", values);
            setData([...data, values]);
        }
        handleClose()
    }

    const deleteData = (i) => {
        const tempData = data;
        tempData.splice(i, 1);
        setData([...tempData]);
    }

    return (

        <React.Fragment>
            <CssBaseline />
            <Container >
                <Box sx={{ bgcolor: '#cfe8fc' }}>
                    <Fab color="primary" aria-label="add" onClick={handleOpen}>
                        <AddIcon />
                    </Fab>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                                <TextField
                                    id="outlined-basic"
                                    label="Name"
                                    variant="outlined"
                                    name="name"
                                    placeholder="Enter Your Name"
                                    type="text"
                                    {...register("name")}
                                />
                                <TextField
                                    id="outlined-basic"
                                    label="Email"
                                    variant="outlined"
                                    name="email"
                                    placeholder="Enter Your Email"
                                    type="email"
                                    {...register("email")}
                                />
                                <TextField
                                    id="outlined-basic"
                                    label="Age"
                                    variant="outlined"
                                    name="age"
                                    placeholder="Enter Your Age"
                                    type="text"
                                    {...register("age")}
                                /><div>
                                    <Button
                                        variant="contained"
                                        type="submit"
                                        startIcon={<DoneIcon />}
                                    >
                                        Submit
                                    </Button>
                                    <Button
                                        variant="contained"
                                        startIcon={<CloseIcon />}
                                        onClick={handleClose}
                                    >
                                        Close</Button>
                                </div>
                            </form>
                        </Box>
                    </Modal>

                    <table border={1} cellPadding={10} cellSpacing={0} style={{ width: '100%' }}>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Age</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((list, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{list.name}</td>
                                        <td>{list.email}</td>
                                        <td>{list.age}</td>
                                        <td align='center'>
                                            <Button
                                                variant="contained"
                                                startIcon={<EditIcon />}
                                                onClick={() => {
                                                    // updateData(index)
                                                    setCurrentId(index);
                                                    handleOpen();
                                                }
                                                } 
                                            >
                                                Update
                                            </Button>
                                        </td>
                                        <td align='center'>
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
                </Box>
            </Container >
        </React.Fragment >
    );
}
export default StudentData;