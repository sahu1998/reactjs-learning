import { Box, Button, Grid, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import swal from 'sweetalert';
import InputMask from 'react-input-mask';
const YupValidation = () => {
    const schema = yup.object().shape({
        username: yup
            .string()
            .required("*User name is required")
            .matches(/^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$/, "*Use only alphabats"),
        email: yup
            .string()
            .matches(/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/, "*Incorrect Email")
            .required("*email is required"),
        adharcard: yup
            .string()
            .required("*Adhar card is required")
            .matches(/^[0-9]+$/, "Must be only digits")
            .min(12, 'Must be exactly 12 digits')
            .max(12, 'Must be exactly 12 digits'),
        contact: yup
            .string()
            .required("*Contact is required")
            .matches(/^[0-9]+$/, "Must be only digits")
            .min(10, 'Must be exactly 10 digits')
            .max(10, 'Must be exactly 10 digits'),
        password: yup
            .string()
            .required("*Password is required")
            .min(8, '*Minimum 8 characters ')
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm(
        {
            resolver: yupResolver(schema),
            defaultValues: { username: '', email: '', adharcard: '', contact: '', password: '' }
        }
    );

    const onSubmit = (values) => {
        console.log(values)
        // console.log(errors);
        if (!!errors) {
            swal("Success", "All fields are correct", "success")
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ m: '12px', flexGrow: 1 }}>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <TextField
                            id="outlined-basic"
                            label="User Name"
                            variant="outlined"
                            placeholder='Enter Username'
                            {...register("username")}
                            error={!!errors?.username}
                            helperText={errors?.username?.message}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            placeholder='Enter Email'
                            {...register("email")}
                            error={!!errors?.email}
                            helperText={errors?.email?.message}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="outlined-basic"
                            label="Adhar Card"
                            variant="outlined"
                            placeholder='Enter Adhar card'
                            {...register("adharcard")}
                            error={!!errors?.adharcard}
                            helperText={errors?.adharcard?.message}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="outlined-basic"
                            label="Contact"
                            variant="outlined"
                            placeholder='Enter Contact no.'
                            {...register("contact")}
                            error={!!errors?.contact}
                            helperText={errors?.contact?.message}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="outlined-basic"
                            label="Password"
                            variant="outlined"
                            placeholder='Enter Password'
                            {...register("password")}
                            error={!!errors?.password}
                            helperText={errors?.password?.message}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant='contained' type='submit'>Validate</Button>
                    </Grid>
                    <Grid item xs={12}>
                    <InputMask mask="99/99/9999" />
                    </Grid>
                </Grid>
            </Box>
        </form>
    );
}

export default YupValidation;