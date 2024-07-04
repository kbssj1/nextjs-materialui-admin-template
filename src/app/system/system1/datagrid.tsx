'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Transaction } from '../../service/definitions';
import BottomTab from './bottomTab';

const columns = [
  { key: 'id', name: 'ID' },
  { key: 'title', name: 'Title' }
];

const rows = [
  { id: 0, title: 'Example' },
  { id: 1, title: 'Demo' }
];

export default function MuiDataGrid( {data}: {data: Transaction[]}) {
  const [selectedItem, setSelectedItem] = React.useState<any>([]);
  const [disabledDeleteButton, setDisabledDeleteButton] = React.useState(true);
  const [disabledUpdateButton, setDisabledUpdateButton] = React.useState(true);
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

  const onRowSelectionModelChange = (newRowSelectionModel:any) => {
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

  return (
    <div id="systemPage1" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
      <div style={{ height: '40%'}}>
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
        <DataGrid className='rdg-light' columns={columns} rows={rows} />
      </div>
      <div style={{ height: '30%'}}> </div>
      {!disabledUpdateButton && <div style={{ height: '30%'}}> <BottomTab /> </div>}
    </div>

  );
}