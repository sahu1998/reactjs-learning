import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import MainLayout from '../../../MainLayout';
import { useForm } from 'react-hook-form';
// import { putApiHandler } from '../../../apiHandler';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { postApiHandler, getApiHandler, putApiHandler } from '../../../apiHandler/axiosdemo';
import { useState } from 'react';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { CircularProgress } from '@mui/material';
import swal from 'sweetalert';

const schema = yup.object({
    modelname: yup
        .string()
        .required("*Name is required")
        .matches(/^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$/, "*Use only alphabats"),
    // launchyear: yup
    //     .date()
    //     .required("*Date is required"),
    // .typeError("*Enter date"),
    // .matches(/^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/,"*not a date format")
    discription: yup
        .string()
        .required("*Discription is required")
})

export default function AddCategory() {

    const [loading, setLoading] = useState(false);
    const [loadingPage, setLoadingPage] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors }
    } = useForm(
        { resolver: yupResolver(schema) }
    );
    const history = useNavigate();
    const [updateOn] = useSearchParams();
    const id = updateOn.get("carid");
    const prefilledForm = async () => {
        setLoadingPage(true);
        const getDataRes = await getApiHandler(`/carmanagement/${id}`);
        if (getDataRes.status === 200) {
            const { modelname, launchyear, discription } = getDataRes.data;
            const day = new Date(launchyear).getDate()
            const year = new Date(launchyear).getFullYear()
            const month = new Date(launchyear).getMonth() + 1
            const launchDate = [day, month, year].join("-")
            console.log("huhuhu ", launchDate);
            setValue("modelname", modelname);
            setValue("launchyear", launchyear);
            setValue("discription", discription);
        } else {
            setValue("modelname", "");
            setValue("launchyear", "");
            setValue("discription", "");
        }
        setLoadingPage(false);
    }

    useEffect(() => {
        if (id) {
            prefilledForm();
        }
        else {
            setValue("modelname", "");
            setValue("launchyear", "");
            setValue("discription", "");
        }
    }, [id]);

    const onSubmit = async (values) => {
        setLoading(true);
        const response = id
            ?
            await putApiHandler(`/carmanagement/${id}`, values)
            :
            await postApiHandler("/carmanagement", values)
        if (response.status !== 200 && response.status !== 201) {
            await swal("Error", "Something went wrong!!!", "error");
        }
        else{
            reset();
            history("/category/view");
        }
        setLoading(false);
    }

    return (
        <MainLayout>
            {loadingPage
                ?
                <CircularProgress />
                :
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: "center",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            {id ? <EditIcon /> : <AddIcon />}
                        </Avatar>
                        <Typography component="h1" variant="h5" align='center' color='blue'>
                            {id ? "Update Category" : "Add Category"}
                        </Typography>
                        <TextField
                            margin="normal"
                            // sx={{ width: "50%", input: { color: 'white' } }} 
                            style={{ width: "50%" }}
                            label="Model Name"
                            name="modelname"
                            {...register("modelname")}
                            error={!!errors?.modelname}
                            helperText={errors?.modelname?.message}
                        />
                        <TextField
                            margin="normal"
                            // sx={{ width: "50%", input: { color: 'white' } }} 
                            style={{ width: "50%" }}
                            name="launchyear"
                            label="Launch Date"
                            type="date"
                            focused
                            {...register("launchyear")}
                            error={!!errors?.launchyear}
                            helperText={errors?.launchyear?.message}
                        />
                        <TextField
                            margin="normal"
                            // sx={{ width: "50%", input: { color: 'white' },  }} 
                            style={{ width: "50%" }}
                            name="discription"
                            label="Discription"
                            {...register("discription")}
                            error={!!errors?.discription}
                            helperText={errors?.discription?.message}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            endIcon={loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : null}
                        >
                            {id ? "Update Category" : "Add Category"}
                        </Button>
                    </Box>
                </form>
            }
        </MainLayout>
    );
}