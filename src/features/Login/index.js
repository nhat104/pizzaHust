import React from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: '100vh',
  },

  left: {
    width: '50%',
  },

  form: {
    margin: '82px auto auto 102px',
  },

  image: {
    width: '50%',
  },
});

export default function Login() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.left}>
        <Box className={classes.form}>
          <Box className={classes.logo}>
            <img srcSet={process.env.PUBLIC_URL + 'pizzaLogo.png 2x'} alt="" />
          </Box>
          <Box className={classes.title}>Đăng nhập</Box>
          <Box>Mật khẩu</Box>
          <Box>Số điện thoại</Box>
          <Box>Quên mật khẩu</Box>
          <Box>
            Chưa có tài khoản? <span>Đăng ký</span>
          </Box>
        </Box>
      </Box>
      <Box className={classes.image}>
        <img src={process.env.PUBLIC_URL + 'auth.png'} alt="" />
      </Box>
    </Box>
  );
}
