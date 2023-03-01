import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from "react";
import { useEffect } from "react";
import Title from "../Title/Title";

const chooseArea = [
    { label: 'Square Meter' },
    { label: 'Square Kilometer' },
    { label: 'Square Centimeter' },
    { label: 'Square Millimeter' },
    { label: 'Square Micrometer' },
    { label: 'Hectare' },
    { label: 'Square Mile' },
    { label: 'Square Yard' },
    { label: 'Square Foot' },
    { label: 'Square Inch' },
    { label: 'Acre' }    
];

const style = {
    bgcolor: '#cfe8fc',
    height: '90vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '20px',
}

const Area = () => {
    const [areaFrom, setAreaFrom] = useState(0);
    const [areaTo, setAreaTo] = useState(0);
    const [unitFrom, setUnitFrom] = useState({ label: 'Square Meter' });
    const [unitTo, setUnitTo] = useState({ label: 'Square Meter' });

    return (
        <Container fixed>
            
            <Box sx={style}>
                <Title title='Area'/>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '20px' }}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={chooseArea}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="From" />}
                        onChange={(e, enteredUnit) => {
                            setUnitFrom(enteredUnit);
                            console.log('Unit From', enteredUnit)
                        }
                        }
                    />
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={chooseArea}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="To" />}
                        onChange={(e, enteredUnit) => {
                            setUnitTo(enteredUnit);
                            console.log('unit to', enteredUnit)
                        }
                        }
                    />
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '20px' }}>
                    <TextField
                        placeholder='0'
                        id="outlined-start-adornment"
                        sx={{ width: 300 }}
                        type="number"
                        name="areaFrom"
                        onChange={(e) => { setAreaFrom(e.target.value) }}
                        InputProps={{
                            endAdornment: <InputAdornment position="start">{unitFrom?.label}</InputAdornment>,
                        }}
                    />
                    <TextField
                        disabled
                        id="outlined-start-adornment"
                        value={areaTo}
                        sx={{ width: 300 }}
                        InputProps={{
                            endAdornment: <InputAdornment position="start">{unitTo?.label}</InputAdornment>,
                        }}
                    />
                </Box>

            </Box>
        </Container>
    );
}

export default Area;