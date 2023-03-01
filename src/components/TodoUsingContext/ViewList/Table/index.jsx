import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import { useContext } from 'react';
import { userContext } from '../../TodoApp';
import { useEffect } from 'react';



export default function TodoList({ show }) {

  const getContext = useContext(userContext);
  const { data, getData, addToCompleted } = getContext;
  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 70,
      renderCell: params => params.api.getRowIndex(params.row.id)+1
    },
    { field: 'title', headerName: 'Title', width: 130 },
    { field: 'discription', headerName: 'Description', width: 130 },
    {
      field: 'action',
      headerName: 'Action',
      renderCell: (params) => {
        return (
          params.row.isCompleted ? "Completed" :
            <div>
              <Button onClick={() => {
                addToCompleted(params.id)
              }}>
                Done
              </Button>
              <NavLink >
                <EditIcon />
              </NavLink>
            </div>
        )
      },
    },
  ];

  useEffect(() => {
    if (show === "todo") {
      getData("/todolist")
    }
    else {
      getData("/completedtask")
    }
  }, [show]);

  return (
    <Box sx={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        getRowId={(row) => row.id}
      // checkboxSelection
      // disableSelectionOnClick
      // experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}