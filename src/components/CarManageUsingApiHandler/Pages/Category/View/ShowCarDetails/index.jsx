import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import MainLayout from '../../../../MainLayout';
import { useNavigate, useParams } from 'react-router-dom';
import { getApiHandler } from '../../../../apiHandler/axiosdemo';
import { useEffect } from 'react';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { CircularProgress } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import swal from 'sweetalert';
import Skeleton from '@mui/material/Skeleton';
const style = {
    display: 'flex',
    // justifyContent: 'space-between',
    // position: 'absolute',
    // top: '50%',
    // left: '50%',
    // borderRadius: '8px',
    // transform: 'translate(-50%, -50%)',
    width: "100%",
    // bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 5,
};

export default function ShowCarDetails() {
    const { car_id } = useParams();
    const [carDetails, setCarDetails] = useState({});
    const [loading, setLoading] = useState(false);
    const [imageLoading, setImageLoading] = useState(true);

    const history = useNavigate();

    const getData = async () => {
        const response = await getApiHandler(`/carmanagement/${car_id}`);
        if (response.status === 200) {
            setCarDetails(response.data)
        }
        else {
            swal("Error!", "Something went wrong!", "error")
            history("/category/view")
        }
        // setTimeout(() => {
        setLoading(false);
        // }, [2000])

        setTimeout(() => {
            setImageLoading(false);
        }, [3000])

    }

    useEffect(() => {
        setLoading(true);
        getData();
    }, []);

    return (
        <MainLayout>

            <div>
                <CloseIcon
                    onClick={() => history("/category/view")}
                    sx={{ cursor: 'pointer', float: 'right' }}
                />
            </div>
            <Box
                sx={style}
            >
                {
                    loading
                        ?
                        <Box sx={{ width: '100%' }}>
                            <LinearProgress />
                        </Box>
                        :
                        <>
                            <div >
                                <Skeleton
                                    variant="rectangular"
                                    // width={500}
                                    // height={350}
                                    sx={{
                                        maxWidth: '500px'   ,
                                        display: imageLoading ? "block" : "none",
                                        width: 500,
                                        height:350
                                    }}
                                />
                                <img
                                    src={carDetails.image}
                                    style={{
                                        maxWidth: '500px',
                                        width: '100%',
                                        display: imageLoading ? "none" : "block"
                                    }}
                                />
                            </div>
                            <div style={{ padding: "0 10px" }}>
                                {/* <div style={{ display: 'flex', justifyContent: 'space-between' }} > */}
                                <Typography  >
                                    <b>Name: </b> {carDetails.modelname}
                                </Typography>
                                <Typography sx={{ mt: 2 }}>
                                    <b>Launch Year: </b>{new Date(carDetails.launchyear).toDateString()}
                                </Typography>
                                {/* </div> */}
                                <Typography sx={{ mt: 2 }}>
                                    <b>Discription: </b>{carDetails.discription}
                                </Typography>
                            </div>
                        </>
                }
            </Box>
        </MainLayout>
    );
}