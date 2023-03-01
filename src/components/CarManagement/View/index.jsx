import React, { useEffect } from "react";
import { Button, ButtonGroup, Typography } from "@mui/material";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import swal from "sweetalert";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "S.no.", width: 70 },
  { field: "modelname", headerName: "Model Name", width: 130 },
  { field: "launchyear", headerName: "Launch Year", width: 130 },
];

const rows = [
  { id: 1, launchyear: "21/11/2000", modelname: "Jon" },
  { id: 2, launchyear: "21/11/2001", modelname: "Cersei" },
  { id: 3, launchyear: "21/11/2002", modelname: "Jaime" },
  { id: 4, launchyear: "21/11/2003", modelname: "Arya" },
  { id: 5, launchyear: "21/11/2004", modelname: "Daenerys" },
  { id: 6, launchyear: "21/11/2005", modelname: null },
  { id: 7, launchyear: "21/11/2006", modelname: "Ferrara" },
  { id: 8, launchyear: "21/11/2007", modelname: "Rossini" },
  { id: 9, launchyear: "21/11/2008", modelname: "Harvey" },
];

export default function DataTable() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch(`https://63621ce67521369cd064f91d.mockapi.io/carmanagement`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((json) => {
        console.log("json", json);
        setData(json);
      })
      .catch((err) => {
        console.log("err > ", err);
      })
      .finally(() => {
        console.log("finally block");
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteData = (id) => {
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to delete this data?",
      icon: "warning",
      dangerMode: true,
      buttons: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(
          `https://63621ce67521369cd064f91d.mockapi.io/carmanagement/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => {
            if (res.ok) {
              swal("Deleted!", "Data Deleted Successfully...", "success");
              getData();
              return;
            }
            throw res;
          })
          .catch((err) => {
            swal("Error!", "Something is wrong...", "warning");
            console.log("error => ", err);
          })
          .finally(() => {
            console.log("finally block of delete");
          });
      }
    });
  };
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "rgb(255 255 255 / 33%)",
        borderColor: "#ff5959",
        borderStyle: "solid",
        borderRadius: "8px",
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        textAlign="center"
        sx={{
          margin: "10px",
          color: "white",
          backgroundColor: " #00000030",
          borderRadius: "8px",
        }}
      >
        Categories List
      </Typography>
      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: "rgb(255 255 255 / 33%)",
          // borderColor: '#ff5959',
          // borderStyle: 'solid'
        }}
      >
        <Table sx={{ minWidth: 200 }} aria-label="simple table">
          <TableHead>
            <TableRow
              sx={{ borderBottomStyle: "solid", borderBottomColor: "#ff5959" }}
            >
              <TableCell sx={{ fontSize: 16 }}>ID</TableCell>
              <TableCell sx={{ fontSize: 16 }}>Model Name</TableCell>
              <TableCell sx={{ fontSize: 16 }}>Launch Year</TableCell>
              <TableCell sx={{ fontSize: 16 }} align="right">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.modelname}
                </TableCell>
                <TableCell>
                  {new Date(row.launchyear).toLocaleDateString()}
                </TableCell>
                <TableCell align="right">
                  <ButtonGroup>
                    <Button
                      variant="contained"
                      startIcon={<DeleteOutlineIcon />}
                      onClick={() => {
                        deleteData(row.id);
                      }}
                    >
                      Delete
                    </Button>
                    <Link
                      to={`/edit/${row.id}`}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <Button variant="contained" startIcon={<EditIcon />}>
                        Update
                      </Button>
                    </Link>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
