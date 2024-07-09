'use client';

import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { LineChart } from '@mui/x-charts/LineChart';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default function BottomTab () {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
      <Box sx={{ border: '1px solid grey' }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
        >
          <Tab label="Statistics" />
          <Tab label="Detail" />
        </Tabs>
        <TabPanel value={tabValue} index={0}>
          <Stack direction="row" spacing={1} padding={1}>
            <Card>
              <CardContent>
                <Typography gutterBottom>
                  Transactions
                </Typography>
                <LineChart
                  xAxis={[{ data: [1, 2, 3, 4, 5, 6]}]}
                  series={[
                    {
                      data: [2, 5.5, 2, 8.5, 1.5, 5],
                    },
                  ]}
                  width={300}
                  height={200}
                />
              </CardContent>
            </Card>
          </Stack>
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          Detail
        </TabPanel>
      </Box>
  );
}