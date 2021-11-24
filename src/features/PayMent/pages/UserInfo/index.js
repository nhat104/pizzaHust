import React from 'react';
import { Box, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Button from 'components/Button';

const useStyles = makeStyles({
  root: {
    padding: '12px 28px 34px 32px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: '#fff',
  },

  userInfo: {
    flex: 1,

    '& span': {
      fontSize: '18px',
      lineHeight: 22 / 18,
      fontWeight: 700,
    },
  },

  userForm: {
    margin: '30px 20px 0 0',
  },
});

export default function UserInfo() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.logo}>
        <img
          srcSet={process.env.PUBLIC_URL + 'pizzaLogo.png 2x'}
          alt=""
          style={{ marginLeft: 'auto', display: 'block' }}
        />
      </Box>
      <Box className={classes.userInfo}>
        <span>Thông tin thanh toán</span>
        <Box className={classes.userForm}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Họ và tên"
            name="Name"
            sx={{ mt: 2, mb: 2 }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Số điện thoại"
            name="Phone"
            sx={{ mt: 2, mb: 2 }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="Email"
            sx={{ mt: 2, mb: 2 }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="address"
            label="Địa chỉ"
            name="Address"
            sx={{ mt: 2, mb: 2 }}
          />
        </Box>
      </Box>
      {/* <Box className={classes.root}></Box> */}
      <Button name={'Mua hàng'} />
    </Box>
  );
}
