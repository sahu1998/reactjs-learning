import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DataTable from '../View';
import NewCategory from '../Form';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import { Link, Route, Routes } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import SpeedIcon from '@mui/icons-material/Speed';
const drawerWidth = 240;
const menues = ['Category', 'Starred', 'Send email', 'Drafts'];
export default function Panel() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed"

                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    backgroundColor: '#ff5959'
                    // backgroundImage: () =>{ linear-gradient('-45deg', '#ff5959', '#ff4040', '#ff0d6e', '#ff8033','#d74177')}
                }}

            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        <img src="https://images.vexels.com/media/users/3/127695/isolated/preview/d2b7e551a595f8f61a6bb3ea89c49cec-flat-retro-car-icon-by-vexels.png"
                            width='70px'
                        />
                        Car Management
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', backgroundColor: '#d9e4d6' },


                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        <div>
                            <ListItem disablePadding>
                                <TreeView
                                    aria-label="file system navigator"
                                    // defaultCollapseIcon={<ExpandMoreIcon />}
                                    // defaultExpandIcon={<ChevronRightIcon />}
                                    sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
                                >
                                    <Link to='/' style={{ textDecoration: 'inherit', color: 'black' }}>
                                        <TreeItem nodeId="0" label="Home" className='treelabel'/>
                                    </Link>
                                    <Divider />
                                    <TreeItem nodeId="1" label="Category" className='treelabel'>
                                        <Link to="category/viewdata" style={{ textDecoration: 'inherit', color: 'black' }}>
                                            <Typography style={{fontSize: '20px', marginLeft: '30px'}}>View</Typography>
                                        </Link>
                                        <Link to="category/add" style={{ textDecoration: 'inherit', color: 'black' }}>
                                            <Typography style={{fontSize: '20px', marginLeft: '30px'}}>Add</Typography>
                                        </Link>
                                    </TreeItem>
                                        <Divider />
                                </TreeView>

                            </ListItem>
                            {/* <Divider /> */}
                        </div>
                    </List>
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Routes>
                    <Route path="/" element={<div>hello</div>} />
                    <Route path="category/viewdata" element={<DataTable />} />
                    <Route path="category/add" element={<NewCategory />} />
                    <Route path="/edit/:carid" element={<NewCategory/>} />
                </Routes>
            </Box>
        </Box>
    );
}
