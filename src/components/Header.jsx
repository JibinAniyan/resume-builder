import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { Tooltip } from '@mui/material';
Tooltip
function Header() {
    const projecttInfo = "The Resume Builder App is a web-based application designed to help users easily create professional and attractive resumes without needing advanced design skills. The app allows users to enter their personal information, educational details, work experience, skills, and other relevant data through a simple and user-friendly interface. Once the data is filled in, the app automatically formats it into a well-structured resume that can be previewed, downloaded, or printed in PDF format."

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: 'purple' }} >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <img width={'30px'} src="https://cdn-icons-png.flaticon.com/512/2936/2936767.png" alt="logo" />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to={'/'} className='text-light text-decoration-none' >RBuilder</Link>
                    </Typography>
                    <Tooltip title={projecttInfo}>
                        <Button color="inherit">Login</Button>
                    </Tooltip>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header