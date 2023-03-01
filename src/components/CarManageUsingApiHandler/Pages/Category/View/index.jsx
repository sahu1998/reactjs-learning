import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import MainLayout from '../../../MainLayout';
import { useEffect } from 'react';
// import { deleteApiHandler } from '../../../apiHandler';
import { useState } from 'react';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PreviewIcon from '@mui/icons-material/Preview';
import { NavLink, useNavigate } from 'react-router-dom';
import { getApiHandler, deleteApiHandler } from '../../../apiHandler/axiosdemo';
import { CircularProgress, TextField } from '@mui/material';
import swal from 'sweetalert';

export default function ViewCategory() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(false);
    const history = useNavigate();
    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 80,
            renderCell: params => params.api.getRowIndex(params.row.id) + 1

        },
        { field: 'modelname', headerName: 'Model name', width: 200 },
        {
            field: 'launchyear',
            headerName: 'Launch Year',
            width: 200,
            renderCell: params => params.row.launchyear
                ? new Date(params.row.launchyear).toDateString() : "No Date"
        },
        {
            field: 'update',
            headerName: 'Update',
            renderCell: (params) => (
                <NavLink to={`/category/add/?carid=${params.id}`}>
                    <EditIcon />
                </NavLink>
            ),
        },
        {
            field: 'delete',
            headerName: 'Delete',
            renderCell: (params) => (
                <DeleteIcon sx={{ cursor: "pointer" }}
                    onClick={() => { deleteData(params.id) }} />
            ),
        },
        {
            field: 'view',
            headerName: 'View',
            renderCell: (params) => (
                // <NavLink to={`/category/view/:${params.id}`}>
                <PreviewIcon sx={{ cursor: "pointer" }}
                    onClick={() => { history(`/category/view/${params.id}`) }}
                />
                // </NavLink>
            ),
        },
    ];
    const deleteData = async (id) => {
        await deleteApiHandler(`/carmanagement/${id}`)
        getData();
    }
    
    const getData = async () => {
        const getRes = await getApiHandler('/carmanagement');
        if (getRes.status === 200) {
            setData(getRes.data);
            setFilteredData(getRes.data)
        }
        else {
            await swal("Error!", "Something went wrong!!!", "error")
        }
        setLoading(false);
    }
    const searchData = (e) => {
        const inputValue = e.target.value;
        setData(filteredData.filter((row) => {
            if (row.modelname.includes(inputValue)) {
                return row
            }
        }))
    }

    useEffect(() => {
        setLoading(true);
        getData();
    }, [])
    
    return (
        <MainLayout>
            <Box sx={{ height: 550, width: '100%' }}>
                {
                    loading
                        ?
                        <CircularProgress />
                        :
                        <>
                            {/* <input
                                label="Search"
                                onInput={searchData}
                            /> */}
                            <TextField
                                label="Search..."
                                onChange={searchData}
                            />
                            <DataGrid
                                rows={data}
                                columns={columns}
                                pageSize={10}
                                rowsPerPageOptions={[10]}
                                // checkboxSelection
                                // disableSelectionOnClick
                                experimentalFeatures={{ newEditingApi: true }}
                            // sx={{color: 'white'}}
                            />
                        </>
                }
            </Box>
        </MainLayout>
    );
}