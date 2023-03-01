import { Button, FormControl, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";

const NewCategory = () => {
  const [Users, fetchUsers] = useState([]);
  let { carid } = useParams();
  const history = useNavigate();
  console.log("Car id: ", carid);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      modelname: "",
      launchyear: "",
    },
  });

  useEffect(() => {
    if (carid) {
      fetch(
        `https://63621ce67521369cd064f91d.mockapi.io/carmanagement/${carid}`
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          throw res;
        })
        .then((json) => {
          console.log("json", json);
          const { modelname, launchyear } = json;
          setValue("modelname", modelname);
          setValue("launchyear", launchyear);
        })
        .catch((err) => {
          swal("Error!", "Something is wrong", "error");
          console.log("err > ", err);
        })
        .finally(() => {
          console.log("Data updated.....");
        });
    }
  }, [carid]);

  const onSubmit = (values) => {
    console.log(values, "jjjjjjjjjjjjjjjj");
    if (carid) {
      fetch(
        `https://63621ce67521369cd064f91d.mockapi.io/carmanagement/${carid}`,
        {
          method: "put",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(values),
        }
      )
        .then((res) => {
          console.log("res.ok => ", res.ok);
          if (res.ok) {
            swal("Success!", "Data Update Successfully!", "success").then(
              () => {
                history("/category/viewdata");
              }
            );
            return;
          }
          throw res;
        })
        .catch((err) => {
          swal("Error!", "Something went wrong! Try Again.", "error");
          console.log("error -> ", err);
        })
        .finally(() => {
          console.log("update successfully....");
        });
      reset();
    } else {
      fetch("https://63621ce67521369cd064f91d.mockapi.io/carmanagement", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((res) => {
          if (res.ok) {
            swal("Success!", "Data Added Successfully!", "success");
            console.log("Data added successfully....", res.json());
          }
          throw res;
        })
        .catch((err) => {
          console.log("Error:", err);
        });

      reset();
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          backgroundColor: "rgb(255 255 255 / 33%)",
          borderRadius: "8px",
          padding: "10px",
          borderStyle: "solid",
          borderColor: "#ff5959",
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          textAlign="center"
          sx={{
            color: "white",
            backgroundColor: " #00000030",
            borderRadius: "8px",
          }}
        >
          {carid ? "Update Category" : "Add New Category"}
        </Typography>
        <FormControl
          style={{
            width: "100%",
            margin: "12px 0",
            boxDecorationBreak: "inherit",
          }}
        >
          <TextField
            variant="outlined"
            id="outlined-basic"
            label="Model Name"
            name="modelname"
            type="text"
            {...register("modelname")}
          />
        </FormControl>
        <FormControl style={{ width: "100%", margin: "12px 0" }}>
          <TextField
            variant="outlined"
            id="outlined-basic"
            label="Launch Year"
            name="launchyear"
            type="date"
            {...register("launchyear")}
          />
        </FormControl>
        <Button variant="contained" type="submit">
          {carid ? "Update" : "Add"}
        </Button>
      </form>
    </div>
  );
};
export default NewCategory;
