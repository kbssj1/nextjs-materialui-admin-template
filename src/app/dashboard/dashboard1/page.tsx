"use client";

import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function Page() {
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