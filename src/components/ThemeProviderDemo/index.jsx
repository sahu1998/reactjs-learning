import React from 'react';
import { Typography, useTheme } from "@mui/material";

const ThemeDemo = () => {

    const theme = useTheme();
    console.log("Theme Provider: ", theme);

    return ( 
        <Typography color="primary">
            hello
        </Typography>
     );
}
 
export default ThemeDemo;