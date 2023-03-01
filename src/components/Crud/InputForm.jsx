import React, { useState } from "react";
// import Box from '@mui/material/Box';
import { autocompleteClasses } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const InputForm = (props) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [dob, setDob] = useState("");


  const appendData = () => {
    // e.preventDefault();
    const list =
    {
      name: name,
      contact: contact,
      email: email,
      dob: dob
    }
    props.addNewData(list)
    setName("");
    setEmail("");
    setContact("");
    setDob("");

    console.log("sajal ", list);

    props.handleClose();
  }

  return (
    // <div>
    <form className="form" onSubmit={appendData}>
      <TextField
        id="outlined-basic"
        label="Name"
        type="text"
        variant="outlined"
        name="name"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => { setName(e.target.value) }}
      />

      <TextField
        id="outlined-basic"
        label="Contact"
        type="text"
        variant="outlined"
        name="contact"
        placeholder="Enter Contact Number"
        value={contact}
        onChange={e => { setContact(e.target.value) }}
      />

      <TextField
        id="outlined-basic"
        label="Email"
        type="email"
        variant="outlined"
        name="email"
        placeholder="Enter Your Email"
        value={email}
        onChange={e => { setEmail(e.target.value) }}
      />
      <TextField
        id="outlined-basic"
        variant="outlined"
        label="Date Of Birth"
        type="text"
        name="dob"
        placeholder="dd/mm/yyyy"
        value={dob}
        onChange={e => { setDob(e.target.value) }}
      />

      <div>
        <Button variant="contained" type="submit">Add Data</Button>
        {/* <Button variant="contained" type="reset">Reset</Button> */}
      </div>
    </form>

    // </div>
  )
}
export default InputForm;