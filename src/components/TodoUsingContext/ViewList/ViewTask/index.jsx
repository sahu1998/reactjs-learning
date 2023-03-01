import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
const ViewTask = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Link to="/">
                        <Button variant="text">Pending</Button>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Link to="/completedtask">
                        <Button variant="text">Completed</Button>
                    </Link>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ViewTask;