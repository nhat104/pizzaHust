import { Alert, Grid, Snackbar } from '@mui/material';
import React, { useState } from 'react';
import AddressForm from './components/AddressForm';

export default function Addresses({ data }) {
  const [openSuccess, setOpenSuccess] = useState(false);

  const handleChangeData = (values) => {
    var url_post = data.url;
    fetch(url_post, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (response.ok) {
          setOpenSuccess(true);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSuccess(false);
  };

  return (
    <Grid container className="addresses">
      <Grid item xs={8}>
        <h2 className="add-address__text">Chỉnh sửa thông tin </h2>
        <AddressForm onSubmit={handleChangeData} initialValues={data} />
      </Grid>
      <Snackbar
        open={openSuccess}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Alert onClose={handleClose} severity="success">
          Chỉnh sửa thông tin thành công!
        </Alert>
      </Snackbar>
    </Grid>
  );
}
