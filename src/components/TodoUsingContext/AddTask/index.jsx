import { Box, Button, TextField } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { userContext } from "../TodoApp";
import { postApiHandler } from "../apiHandler";

const AddTask = () => {
  const getContext = useContext(userContext);
  const [id, setId] = useState(1);
  const { getData } = getContext;

  const { register, handleSubmit } = useForm();
  const onSubmit = async (values) => {
    console.log(values);
    const res = await postApiHandler("/todolist", values);
    console.log(res.data);
    getData("/todolist");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            id="filled-basic"
            label="Title"
            name="title"
            variant="filled"
            {...register("title")}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="filled-basic"
            label="Discription"
            name="description"
            variant="filled"
            {...register("discription")}
          />
        </Grid>
        <Grid item xs={4}>
          <Button variant="outlined" type="submit">
            Add
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddTask;
