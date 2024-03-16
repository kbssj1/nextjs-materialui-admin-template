"use client";

import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Transactions from '../../mockData/transactionData.json';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function Page() {

   function calculateCount(arr:any[], standard:string) {
      let result:any[] = arr.reduce((prev, curr) => (prev[curr[standard]] = ++prev[curr[standard]] || 1, prev), {});
      return Object.values(result);
   }

   function insertKey(arr:any[]) {
      let result:any[] = [];
      for (let i=0;i<arr.length;++i) {
         result.push({value: arr[i]});
      }
      return result;
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
            <Grid item xs={12}>
            <Stack direction="row" spacing={2}>
               <Card raised={true}>
                  <CardContent>
                     <Typography gutterBottom>
                        Transactions
                     </Typography>
                     <Typography variant="h5">
                        {data.length}
                     </Typography>
                  </CardContent>
               </Card>
               <Card raised={true}>
                  <CardContent>
                     <Typography gutterBottom>
                        Products
                     </Typography>
                     <Typography variant="h5">
                        {xAxis.length}
                     </Typography>
                  </CardContent>
               </Card>
            </Stack>
            </Grid>
            <Grid item xs={6}>
               <Card raised={true}>
                  <CardContent>
                     <Typography variant="h5">
                        Chart1
                     </Typography>
                     <BarChart
                        xAxis={[
                           {
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
                  </CardContent>
               </Card>
            </Grid>
            <Grid item xs={6}>
               <Card raised={true}>
                  <CardContent>
                     <Typography variant="h5">
                        Chart2
                     </Typography>
                     <LineChart
                        xAxis={[{ scaleType: 'point', data: xAxis }]}
                        series={[
                           {
                              data: series,
                           },
                        ]}
                        width={500}
                        height={300}
                     />
                  </CardContent>
               </Card>
            </Grid>
            <Grid item xs={6}>
               <Card raised={true}>
                  <CardContent>
                     <Typography variant="h5">
                        Chart3
                     </Typography>
                     <PieChart
                        series={[
                           { data: insertKey(series) },
                        ]}
                        width={500}
                        height={300}
                     />
                  </CardContent>
               </Card>
            </Grid>
            <Grid item xs={6}>
               <Card raised={true}>
                  <CardContent>
                     <Typography variant="h5">
                        Chart4
                     </Typography>
                     <BarChart
                        xAxis={[
                           {
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
                  </CardContent>
               </Card>
            </Grid>
         </Grid>
      </Box>
    );
}