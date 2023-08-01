
import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Paper } from '@mui/material';

import './App.css'

function App() {


  return (
    <>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Sales Dashboard</Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <Paper sx={{ p: 2, height: 200 }}>

                <Typography variant="h6">Sales</Typography>
                <Typography variant="h6">Sales Overview</Typography>
                <Typography>Total Sales: 431,225</Typography>
                <Typography color="green">Revenue: $59,342.32</Typography>
                <Typography></Typography>
              
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper sx={{ p: 2, height: 200 }}>
              {/* Add content for the second dashboard card */}
              <Typography variant="h6">New Clients</Typography>
              <Typography>32,441</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper sx={{ p: 2, height: 200 }}>
              {/* Add content for the third dashboard card */}
              <Typography variant="h6">Traffic Received</Typography>
              <Typography>1,325,134</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div >


    </>
  )
}

export default App
