'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Breadcrumb from '../../../../component/breadcrumbs';

export default function Page() {

  return (
    <Box width={600}>
      
      <Box component="section" sx={{ p: 2 }}>
        <Breadcrumb breadcrumbs={[{
          label: "system1",
          href: "/system/system1",
          active: true
        }, {
          label: "form",
          href: "/system/system1/form",
          active: true
        }]}/>
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