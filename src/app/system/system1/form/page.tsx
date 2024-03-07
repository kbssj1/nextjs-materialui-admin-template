'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Breadcrumb from '../../../../component/breadcrumbs';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Page({ searchParams }: { searchParams: { action: string; id: string; };})  
{
  const router = useRouter();

  const ok = () => {
    router.push('/system/system1');
  };

  const cancel = () => {
    router.push('/system/system1');
  };

  return (
    <Box width={600}>
      
      <Box component="section" sx={{ p: 2 }}>
        <Breadcrumb breadcrumbs={[{
          label: "system1",
          href: "/system/system1",
          active: true
        }, {
          label: searchParams.action === "create" ? "create" : searchParams.id,
          href: "/system/system1/form",
          active: false
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
            defaultValue={searchParams.id}
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
      <Stack sx={{ pt: 2 }} spacing={2} direction="row">
        <Button variant="contained" onClick={cancel}>Cancel</Button>
        <Button variant="contained" onClick={ok}>Ok</Button>
      </Stack>
    </Box>

  );
}