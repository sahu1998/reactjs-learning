import { Button } from "@mui/material";
import React, { useState } from "react";
import OpenModal from "../Modal";

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';



const EmployeeData = ({ data, handleOpen, setCurrentId }) => {
    // const [data, setData] = useState(dumy_data);


    // const addData = (newData) => {
    //     dumy_data.push(newData);
    //     setData([...dumy_data]);
    // }
    console.log("emp data ", data);

    return (
        <div>
            <table border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Age</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        data?.map((row, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{row.name}</td>
                                    <td>{row.contact}</td>
                                    <td>{row.age}</td>
                                    <td>
                                        <Button
                                            variant="contained"
                                            startIcon={<EditIcon />}
                                            onClick={() => {setCurrentId(index); handleOpen(); }}
                                        >
                                            Update
                                        </Button>
                                    </td>
                                    <td>
                                        <Button
                                            variant="contained"
                                            color="success"
                                            startIcon={<DeleteIcon />}
                                        // onClick={deleteData}
                                        >
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
            {/* <OpenModal addNewData={addData}/> */}
        </div>
    );
}

export default EmployeeData;