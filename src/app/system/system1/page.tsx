'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import Transactions from '../../mockData/transactionData.json';
import { DataGrid, GridToolbar, GridRowSelectionModel } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
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

// await을 사용하기 위해서는 Server Component를 만들어야 함... 
// 그러기 위해서는 useState 사용하는 부분을 Client Component로 만들어야 함...
export default function Page() {
  const data = Transactions.transactions;
  const [selectedItem, setSelectedItem] = React.useState<GridRowSelectionModel>([]);
  const [disabledDeleteButton, setDisabledDeleteButton] = React.useState(true);
  const [disabledUpdateButton, setDisabledUpdateButton] = React.useState(true);
  const [tabValue, setTabValue] = React.useState(0);
  const router = useRouter();

  React.useEffect(() => {
    let div = document.getElementById("systemPage1");
    if (div != null) {
      div.style.height = window.screen.height * 0.75 + "px";
    }
  }, [])

  const addData = () => {
    router.push('/system/system1/form?action=create');
  };

  const updateData = () => {
    router.push('/system/system1/form?action=update&id='+selectedItem);
  };

  const deleteData = () => {
    if (window.confirm("Do you really want to delete?")) {
      
    }
  };

  const onRowSelectionModelChange = (newRowSelectionModel:GridRowSelectionModel) => {
    const length = newRowSelectionModel.length;
    if (length > 0) {
      setDisabledDeleteButton(false);
      setDisabledUpdateButton(true);
      setSelectedItem(newRowSelectionModel);
      if (length == 1) {
        setDisabledDeleteButton(false);
        setDisabledUpdateButton(false);
      }
    } else {
      setDisabledDeleteButton(true);
      setDisabledUpdateButton(true);
    }
  }

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <div id="systemPage1" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
      <div style={{ height: 400}}>
        <Typography variant="h4" gutterBottom>
          System1
        </Typography>
        <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
          <Button variant="contained" size="small" onClick={addData}>
            Add
          </Button>
          <Button variant="contained" disabled={disabledUpdateButton} size="small" onClick={updateData}>
            Update
          </Button>
          <Button variant="contained" disabled={disabledDeleteButton} size="small" onClick={deleteData}>
            Delete
          </Button>
        </Stack>
        <DataGrid
          columns={[
            { field: 'id', width: 80 }, 
            { field: 'productid', editable: true, width: 150 }, 
            { field: 'customerId', editable: true, width: 150 }, 
            { field: 'transactionDate', width: 300} 
          ]}
          rows={data}
          onRowSelectionModelChange={onRowSelectionModelChange}
          slots={{
            toolbar: GridToolbar,
          }}
          checkboxSelection
          disableRowSelectionOnClick
          initialState={{
            pagination: { paginationModel: { pageSize: 5 } },
          }}
          pageSizeOptions={[5, 10]}
        />
      </div>
      {!disabledUpdateButton && 
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
                    {data.length}
                  </Typography>
                </CardContent>
              </Card>
          </Stack>
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          Detail
        </TabPanel>
      </Box>}
    </div>

  );
}