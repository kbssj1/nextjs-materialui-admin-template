'use client';

import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

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
          <Typography>{children}</Typography>
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
          <Stack direction="row" spacing={2} padding={2}>
              <Card>
                <CardContent>
                  <Typography gutterBottom>
                    Transactions
                  </Typography>
                  <Typography variant="h5">
                    10
                  </Typography>
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