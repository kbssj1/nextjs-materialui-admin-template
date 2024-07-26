'use client';

import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useForm } from "react-hook-form";
import { login } from '../service/service';

export default function Page() {
   const { register, handleSubmit, watch, formState: { errors } } = useForm();

   const onLogin = async (data:any) => {
      await login(data.id, data.passwrod);
    };

  return (
   <Container component="main" maxWidth="xs" sx={{marginTop: '100px'}}>
      <Box onSubmit={handleSubmit(onLogin)} component="form" noValidate sx={{ mt: 1 }}>
         <TextField
            margin="normal"
            required
            fullWidth
            id="id"
            label="id"
            defaultValue={'admin'}
            autoFocus
            {...register("id")}
         />
         <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            id="password"
            defaultValue={'admin'}
            autoComplete="current-password"
            {...register("password")}
         />
         <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
         >
         Sign In
         </Button>
      </Box>
   </Container>

  );
}