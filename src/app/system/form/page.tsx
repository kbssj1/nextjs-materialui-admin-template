'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

export default function Page() {

  return (
    <Box width={600}>
      
      <Box component="section" sx={{ p: 2 }}>

        <Breadcrumbs aria-label="breadcrumb">
          <Link 
            underline="hover" 
            color="inherit" 
            href="/system">
            System1
          </Link>
          <Typography color="text.primary">Create</Typography>
        </Breadcrumbs>

      </Box>


      <Grid container spacing={2}>
        <Grid item >
          <TextField
            id="id"
            label="id"
            type="String"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        <Grid item >
          <TextField
            id="productid"
            label="productId"
            type="String"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        <Grid item >
          <TextField
            id="customerId"
            label="customerId"
            type="String"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        <Grid item >
          <TextField
            id="transactionDate"
            label="transactionDate"
            type="Date"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

      </Grid>
    </Box>

  );
}