import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from "react";
import { useEffect } from "react";
import { Button, Typography } from "@mui/material";
import Title from "../Title/Title";
const chooseTemperature = [
    { label: 'Celsius' },
    { label: 'Kelvin' },
    { label: 'Fahrenheit' }
];

const style = {
    bgcolor: '#cfe8fc',
    height: '90vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '20px',
}

const Temperature = () => {
    const [tempFrom, setTempFrom] = useState(0);
    const [tempTo, setTempTo] = useState(0);
    const [unitFrom, setUnitFrom] = useState({ label: 'Celsius' });
    const [unitTo, setUnitTo] = useState({ label: 'Celsius' });

    useEffect(() => {
        switch (unitFrom?.label) {
            case 'Celsius':
                switch (unitTo?.label) {
                    case 'Celsius':
                        console.log("Celsius->Celsius")
                        setTempTo(tempFrom)
                        break;

                    case 'Kelvin':
                        console.log("Celsius->Kelvin")
                        console.log("You entered->", tempFrom)
                        setTempTo(tempFrom + 273.15)
                        console.log("converted->", tempTo)
                        break;

                    case 'Fahrenheit':
                        console.log("Celsius->Fahrenheit")
                        console.log("You entered->", tempFrom)
                        setTempTo(tempFrom * 9 / 5 + 32)
                        console.log("converted->", tempTo)
                        break;

                }
                break;

            case 'Kelvin':
                switch (unitTo?.label) {
                    case 'Celsius':
                        console.log("Kelvin->Celsius")
                        console.log("You entered->", tempFrom)
                        setTempTo(tempFrom - 273.15)
                        console.log("converted->", tempTo)
                        break;

                    case 'Kelvin':
                        console.log("Kelvin->Kelvin")
                        console.log("You entered->", tempFrom)
                        setTempTo(tempFrom)
                        console.log("converted->", tempTo)
                        break;

                    case 'Fahrenheit':
                        console.log("Kelvin->Fahrenheit")
                        console.log("You entered->", tempFrom)
                        setTempTo(tempFrom * 9 / 5 - 459.67)
                        console.log("converted->", tempTo)
                        break;

                }
                break;

            case 'Fahrenheit':
                switch (unitTo?.label) {
                    case 'Celsius':
                        console.log("Fahrenheit->Celsius")
                        console.log("You entered->", tempFrom)
                        setTempTo((tempFrom - 32) * 5 / 9)
                        console.log("converted->", tempTo)
                        break;

                    case 'Kelvin':
                        console.log("Fahrenheit->Kelvin")
                        console.log("You entered->", tempFrom)
                        setTempTo((tempFrom + 459.67) * 5 / 9)
                        console.log("converted->", tempTo)
                        break;

                    case 'Fahrenheit':
                        console.log("Fahrenheit->Fahrenheit")
                        console.log("You entered->", tempFrom)
                        setTempTo(tempFrom)
                        console.log("converted->", tempTo)
                        break;

                }
                break;
        }
    }, [tempFrom, unitFrom, unitTo])

    return (
        <Container fixed>

            <Box sx={style}>
                <Title title='Temperature'/>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '20px' }}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={chooseTemperature}
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
                        options={chooseTemperature}
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
                        name="tempFrom"
                        onChange={(e) => { setTempFrom(e.target.value) }}
                        InputProps={{
                            endAdornment: <InputAdornment position="start">{unitFrom?.label}</InputAdornment>,
                        }}
                    />
                    <TextField
                        disabled
                        id="outlined-start-adornment"
                        value={tempTo}
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

export default Temperature;