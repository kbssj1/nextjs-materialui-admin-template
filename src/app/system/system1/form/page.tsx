'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Breadcrumb from '../../../../component/breadcrumbs';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import { createTransactionData } from '@/app/service/service';

export default function Page({ searchParams }: { searchParams: { action: string; id: string; };})  
{
  const router = useRouter();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = async (data:any) => {
    await createTransactionData(data);
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
      <form onSubmit={handleSubmit(onSubmit)}>
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
              {...register("id")}
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
              {...register("productid")}
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
              {...register("customerId")}
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
              {...register("transactionDate")}
            />
          </Grid>

        </Grid>
        <Stack sx={{ pt: 2 }} spacing={2} direction="row">
          <Button variant="contained" onClick={cancel}>Cancel</Button>
          <Button variant="contained" type="submit">Ok</Button>
        </Stack>
      </form>
    </Box>

  );
}