import React from "react";
import { useState } from "react";
import OpenModal from "../Modal";
import EmployeeData from "../Table";
 
const CrudMain = () => {
    const [data, setData] = useState([])
    const [currentId, setCurrentId] = useState('');

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const addData = (value) => {
        setData([...data, value]);
    }
    return (
        <div>
            <EmployeeData
                data={data}
                handleOpen={handleOpen}
                setCurrentId={setCurrentId}
            />
            <OpenModal
                addNewData={addData}
                handleOpen={handleOpen}
                handleClose={handleClose}
                currentId={currentId}
                open={open}
            />
        </div>
    );
}

export default CrudMain;