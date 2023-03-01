import React from "react";
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
const Title = ({title}) => {
    return (
        <Box
            sx={
                {
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    gap: '20px',
                    backgroundColor: '#1976d2'
                }
            }
        >
            <Typography variant="h3" color='white'>{title} Converter</Typography>

        </Box>
    )
}

export default Title;