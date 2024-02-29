/*
MUI

Move faster with intuitive React UI tools
MUI offers a comprehensive suite of free UI tools to help you ship 
new features faster. Start with Material UI, our fully-loaded component library, 
or bring your own design system to our production-ready components.

npm install @mui/material @emotion/react @emotion/styled @mui/icons-material 
*/

import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';
import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function MUI() {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));


    return (
        <div className='container mt-5'>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>

            <hr />

            <Button variant="outlined" startIcon={<DeleteIcon />}>
                Delete
            </Button>
            <Button variant="contained" endIcon={<SendIcon />}>
                Send
            </Button>

            <hr />
            {
                ["success", "info", "warning", "error"].map((value) => {
                    return (
                        <Alert severity={value}>This is a success Alert.</Alert>
                    )
                })
            }


            <hr />

            <Alert variant="filled" severity="success">
                This is a filled success Alert.
            </Alert>
            <Alert variant="filled" severity="info">
                This is a filled info Alert.
            </Alert>
            <Alert variant="filled" severity="warning">
                This is a filled warning Alert.
            </Alert>
            <Alert variant="filled" severity="error">
                This is a filled
            </Alert>
            <hr />


            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={8}>
                        <Item>xs=6 md=8</Item>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Item>xs=6 md=4</Item>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Item>xs=6 md=4</Item>
                    </Grid>
                    <Grid item xs={6} md={8}>
                        <Item>xs=6 md=8</Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default MUI