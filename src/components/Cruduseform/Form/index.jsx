import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Form = ({ onAddNewData, handleClose, handleOpen, currentId }) => {
    const {
        register,
        reset,
        setValue,
        handleSubmit,
    } = useForm(
        {
            defaultValues: {
                name: "",
                contact: "",
                age: ''
            }
        }
    );

    const onSubmit = (values) => {
        console.log('Employee -> ',values)
        onAddNewData(values)
        handleClose();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    variant="outlined"
                    label="Name"
                    type='text'
                    name='name'
                    {...register('name')}
                />
                <TextField
                    variant="outlined"
                    label="Contact"
                    type='text'
                    name='contact'
                    {...register('contact')}
                />
                <TextField
                    variant="outlined"
                    label="Age"
                    type='number'
                    name='age'
                    {...register('age')}
                />
                <Button variant="contained" type="submit">Submit</Button>
                <Button variant="contained" onClick={handleClose}>Close</Button>

            </form>
        </div>
    );

}

export default Form;