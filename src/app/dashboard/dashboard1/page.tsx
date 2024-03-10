"use client";

import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Transactions from '../../mockData/transactionData.json';

export default function Page() {

   function calculateCount(arr:any[], standard:string) {
      let result:any[] = arr.reduce((prev, curr) => (prev[curr[standard]] = ++prev[curr[standard]] || 1, prev), {});
      return Object.values(result);
   }

   const data = Transactions.transactions;
   const xAxis = Array.from(new Set(data.map((d) => d.productid)));
   const series = calculateCount(data, "productid");
   
   return (
      <Box
         width={1000}
         display="flex"
         alignItems="center"
         gap={4}
         p={2}
      >
         <Grid container spacing={2}>
            <Grid item xs={6}>
               <Typography variant="h5">
                  Dashboard1
               </Typography>
               <BarChart
                  xAxis={[
                     {
                        id: 'barCategories',
                        data: xAxis,
                        scaleType: 'band',
                     },
                  ]}
                  series={[
                     {
                        data: series,
                     },
                  ]}
                  width={500}
                  height={300}
               />
            </Grid>
            <Grid item xs={6}>
               <Typography variant="h5">
                  Dashboard1
               </Typography>
               <BarChart
                  xAxis={[
                     {
                        id: 'barCategories',
                        data: ['bar A', 'bar B', 'bar C'],
                        scaleType: 'band',
                     },
                  ]}
                  series={[
                     {
                        data: [2, 5, 3],
                     },
                  ]}
                  width={500}
                  height={300}
               />
            </Grid>
            <Grid item xs={6}>
               <Typography variant="h5">
                  Dashboard1
               </Typography>
               <BarChart
                  xAxis={[
                     {
                        id: 'barCategories',
                        data: ['bar A', 'bar B', 'bar C'],
                        scaleType: 'band',
                     },
                  ]}
                  series={[
                     {
                        data: [2, 5, 3],
                     },
                  ]}
                  width={500}
                  height={300}
               />
            </Grid>
            <Grid item xs={6}>
               <Typography variant="h5">
                  Dashboard1
               </Typography>
               <BarChart
                  xAxis={[
                     {
                        id: 'barCategories',
                        data: ['bar A', 'bar B', 'bar C'],
                        scaleType: 'band',
                     },
                  ]}
                  series={[
                     {
                        data: [2, 5, 3],
                     },
                  ]}
                  width={500}
                  height={300}
               />
            </Grid>
         </Grid>
      </Box>
    );
}