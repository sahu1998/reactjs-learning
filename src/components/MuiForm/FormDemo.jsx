import React, { useState } from "react";
import Box from '@mui/material/Box';
import { autocompleteClasses } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const FormDemo = () => {

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const pattern = {
    name_ptrn : /^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$/,
    email_ptrn : /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    contact_ptrn : /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
  }
  let isValid = true
  const [contact, setContact] = useState("");
  const [contactError, setContactError] = useState(false);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const checkInputs = (e) => {
    e.preventDefault();
    if (!name){
      setNameError("*Name is Required");
      isValid = false;
    }
    else if(!name.match(pattern.name_ptrn)){
      setNameError("*Name can only have alphabets");
      isValid = false;
    }
    else{
      setNameError("");
      isValid = true;
    }

    if (!contact){
      setContactError("*Contact is Required");
      isValid = false;
    }
    else{
      setContactError("");
      isValid = true;
    }

    if (!email){
      setEmailError("*Email is Required");
      isValid = false;
    }
    else{
      setEmailError("");
      isValid = true;
    }
    
    if (!password)
      setPasswordError("*Password is Required");
    else{
      setPasswordError("");
      isValid = false;
    }


    console.log("Name: ",name,"\nEmail: ", email,"\nContact: ", contact, "\nPassowrd: ",password)
  }

  return (
    <Box sx={{ bgcolor: 'white', height: '100vh', width:'60vh' }}>
      <form className="form" onSubmit={checkInputs}>
        <TextField
          id="outlined-basic"
          label="Name"
          type="text"
          variant="outlined"
          name="name"
          placeholder="Enter Your Name"
          value={name}
          onChange = {(e)=>{setName(e.target.value)}}
          error={nameError ? true : false}
          helperText={nameError}

        />

        <TextField
          id="outlined-basic"
          label="Contact"
          type="text"
          variant="outlined"
          name="contact"
          value={contact}
          onChange= {e => {setContact(e.target.value)}}
          placeholder="Enter Contact Number"
          error={contactError ? true : false}
          helperText={contactError}
        />

        <TextField
          id="outlined-basic"
          label="Email"
          type="email"
          variant="outlined"
          name="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={e=>{setEmail(e.target.value)}}
          error={emailError ? true : false}
          helperText={emailError}
        />
        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Password"
          type="password"
          name="password"
          placeholder="Enter Password"
          value={password}
          onChange={e=>{setPassword(e.target.value)}}
          error={passwordError ? true : false}
          helperText={passwordError}
        />
        <div>
          <Button variant="contained" type="submit">Validate</Button>
          <Button variant="contained" type="reset">Reset</Button>
        </div>
      </form>
    </Box>
  );
}
export default FormDemo;