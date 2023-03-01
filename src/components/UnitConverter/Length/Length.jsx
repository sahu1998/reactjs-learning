import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
// import EastIcon from '@mui/icons-material/East';
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import { Typography } from "@mui/material";
import Title from "../Title/Title";

const chooseLength = [
  { label: "Meter" },
  { label: "Kilometer" },
  { label: "Centimeter" },
  { label: "Millimeter" },
  { label: "Micrometer" },
  { label: "Nanometer" },
  { label: "Mile" },
  { label: "Yard" },
  { label: "Foot" },
  { label: "Inch" },
  // { label: 'Light Year' },
];

const style = {
  bgcolor: "#cfe8fc",
  height: "90vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "20px",
};

const Length = () => {
  const [lengthFrom, setLengthFrom] = useState(0);
  const [lengthTo, setLengthTo] = useState(0);
  const [unitFrom, setUnitFrom] = useState({ label: "Meter" });
  const [unitTo, setUnitTo] = useState({ label: "Meter" });

  useEffect(() => {
    switch (unitFrom?.label) {
      case "Meter":
        switch (unitTo?.label) {
          case "Meter":
            console.log("Meter->Meter");
            setLengthTo(lengthFrom);
            break;

          case "Kilometer":
            console.log("Meter->Kilometer");
            console.log("You entered->", lengthFrom);
            setLengthTo(lengthFrom / 1000);
            console.log("converted->", lengthTo);
            break;

          case "Centimeter":
            console.log("Meter->Centimeter");
            console.log("You entered->", lengthFrom);
            setLengthTo(lengthFrom * 100);
            console.log("converted->", lengthTo);
            break;
          case "Millimeter":
            console.log("Meter->Millimeter");
            console.log("You entered->", lengthFrom);
            setLengthTo(lengthFrom * 1000);
            console.log("converted->", lengthTo);
            break;

          case "Micrometer":
            console.log("Meter->Micrometer");
            console.log("You entered->", lengthFrom);
            setLengthTo(lengthFrom * 1000000);
            console.log("converted->", lengthTo);
            break;
          case "Nanometer":
            console.log("Meter->Nanometer");
            console.log("You entered->", lengthFrom);
            setLengthTo(lengthFrom * 1000000000);
            console.log("converted->", lengthTo);
            break;
          case "Mile":
            console.log("Meter->Mile");
            console.log("You entered->", lengthFrom);
            setLengthTo(lengthFrom * 0.0006213689);
            console.log("converted->", lengthTo);
            break;
          case "Yard":
            console.log("Meter->Yard");
            console.log("You entered->", lengthFrom);
            setLengthTo(lengthFrom * 1.0936132983);
            console.log("converted->", lengthTo);
            break;
          case "Foot":
            console.log("Meter->Foot");
            console.log("You entered->", lengthFrom);
            setLengthTo(lengthFrom * 3.280839895);
            console.log("converted->", lengthTo);
            break;

          case "Inch":
            console.log("Meter->Inch");
            console.log("You entered->", lengthFrom);
            setLengthTo(lengthFrom * 39.37007874);
            console.log("converted->", lengthTo);
            break;

          // case 'Light Year':
          //     console.log("Meter->Light Year")
          //     console.log("You entered->", lengthFrom)
          //     setLengthTo(lengthFrom * 1000000000)
          //     console.log("converted->", lengthTo)
          //     break;
        }
        break;

      case "Kilometer":
        switch (unitTo?.label) {
          case "Meter":
            console.log("Kilometer->Meter");
            console.log("You entered->", lengthFrom);
            setLengthTo(lengthFrom * 1000);
            console.log("converted->", lengthTo);
            break;

          case "Kilometer":
            console.log("Kilometer->Kilometer");
            console.log("You entered->", lengthFrom);
            setLengthTo(lengthFrom);
            console.log("converted->", lengthTo);
            break;

          case "Centimeter":
            console.log("Kilometer->Centimeter");
            console.log("You entered->", lengthFrom);
            setLengthTo(lengthFrom * 100000);
            console.log("converted->", lengthTo);
            break;
          case "Millimeter":
            console.log("Kilometer->Millimeter");
            console.log("You entered->", lengthFrom);
            setLengthTo(lengthFrom * 1000000);
            console.log("converted->", lengthTo);
            break;

          case "Micrometer":
            console.log("Kilometer->Micrometer");
            console.log("You entered->", lengthFrom);
            setLengthTo(lengthFrom * 1000000000);
            console.log("converted->", lengthTo);
            break;
          case "Nanometer":
            console.log("Kilometer->Nanometer");
            console.log("You entered->", lengthFrom);
            setLengthTo(lengthFrom * 1000000000000);
            console.log("converted->", lengthTo);
            break;
          case "Mile":
            console.log("Kilometer->Mile");
            console.log("You entered->", lengthFrom);
            setLengthTo(lengthFrom * 0.6213688756);
            console.log("converted->", lengthTo);
            break;
          case "Yard":
            console.log("Kilometer->Yard");
            console.log("You entered->", lengthFrom);
            setLengthTo(lengthFrom * 1093.6132983);
            console.log("converted->", lengthTo);
            break;
          case "Foot":
            console.log("Kilometer->Foot");
            console.log("You entered->", lengthFrom);
            setLengthTo(lengthFrom * 3280.839895);
            console.log("converted->", lengthTo);
            break;
          case "Inch":
            console.log("Kilometer->Inch");
            console.log("You entered->", lengthFrom);
            setLengthTo(lengthFrom * 39370.07874);
            console.log("converted->", lengthTo);
            break;
        }
        break;
      case "Centimeter":
        switch (unitTo?.label) {
          case "Meter":
            console.log("Centimeter->Meter");
            console.log("You entered->", lengthFrom);
            setLengthTo(lengthFrom / 100);
            console.log("converted->", lengthTo);
            break;

          case "Kilometer":
            console.log("Centimeter->Kilometer");
            console.log("You entered->", lengthFrom);
            setLengthTo(lengthFrom / 100000);
            console.log("converted->", lengthTo);
            break;

          case "Centimeter":
            console.log("Centimeter->Centimeter");
            console.log("You entered->", lengthFrom);
            setLengthTo(lengthFrom);
            console.log("converted->", lengthTo);
            break;
          case "Millimeter":
            console.log("Centimeter->Millimeter");
            console.log("You entered->", lengthFrom);
            setLengthTo(lengthFrom * 10);
            console.log("converted->", lengthTo);
            break;

          case "Micrometer":
            console.log("Centimeter->Micrometer");
            console.log("You entered->", lengthFrom);
            setLengthTo(lengthFrom * 10000);
            console.log("converted->", lengthTo);
            break;
          case "Nanometer":
            console.log("Centimeter->Nanometer");
            console.log("You entered->", lengthFrom);
            setLengthTo(lengthFrom * 10000000);
            console.log("converted->", lengthTo);
            break;
          case "Mile":
            console.log("Centimeter->Mile");
            console.log("You entered->", lengthFrom);
            setLengthTo(lengthFrom / 160935);
            console.log("converted->", lengthTo);
            break;
          case "Yard":
            console.log("Centimeter->Yard");
            console.log("You entered->", lengthFrom);
            setLengthTo(lengthFrom / 91.44);
            console.log("converted->", lengthTo);
            break;
          case "Foot":
            console.log("Centimeter->Foot");
            console.log("You entered->", lengthFrom);
            setLengthTo(lengthFrom / 30.48);
            console.log("converted->", lengthTo);
            break;
          case "Inch":
            console.log("Centimeter->Inch");
            console.log("You entered->", lengthFrom);
            setLengthTo(lengthFrom / 2.54);
            console.log("converted->", lengthTo);
            break;
        }
        break;
    }
  }, [lengthFrom, unitFrom, unitTo, lengthTo]);

  return (
    <Container fixed maxWidth="xl" className="w-100">
      <Box sx={style}>
        <Title title="Length" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={chooseLength}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="From" />}
            onChange={(e, enteredUnit) => {
              setUnitFrom(enteredUnit);
              console.log("Unit From", enteredUnit);
            }}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={chooseLength}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="To" />}
            onChange={(e, enteredUnit) => {
              setUnitTo(enteredUnit);
              console.log("unit to", enteredUnit);
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <TextField
            placeholder="0"
            id="outlined-start-adornment"
            sx={{ width: 300 }}
            type="number"
            name="lengthFrom"
            onChange={(e) => {
              setLengthFrom(e.target.value);
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  {unitFrom?.label}
                </InputAdornment>
              ),
            }}
          />
          <TextField
            disabled
            id="outlined-start-adornment"
            value={lengthTo}
            sx={{ width: 300 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  {unitTo?.label}
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Length;
