import { Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

const UseFormDemo = () => {
  const {
    register,
    handleSubmit,
    getValues,
    setError,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
    },
  });
  console.log(" errors", errors);
  const setEmail = () => {
    const name = watch("name");
    console.log("name => ", name);
    setValue("email", `${name}@gmail.com`);
  };
  const onSubmit = (values) => {
    console.log("values => ", values);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h3">Form demo</Typography>
      <TextField
        className="text"
        variant="outlined"
        name="name"
        type="text"
        placeholder="Enter your name"
        label="Name"
        {...register("name", {
          required: {
            value: true,
            message: "name is required",
          },
          min: {
            value: 8,
            message: "min value is 8",
          },
        })}
        error={!!errors?.name}
        helperText={errors?.name?.message}
      />
      <TextField
        className="text"
        variant="outlined"
        name="email"
        type="email"
        placeholder="Enter your email"
        // label="Email"
        {...register("email")}
        disabled
      />
      <Button onClick={setEmail} variant="outlined">
        Set Email
      </Button>
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default UseFormDemo;
