import { Alert, Box, Snackbar } from '@mui/material';
import axios from 'axios';
import { saveDataLogin } from 'features/Authentication/slice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import useStyles from './styles';

export default function Login() {
  const classes = useStyles();
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (values) => {
    // console.log('values', values);
    setError('');
    axios
      .post('http://127.0.0.1:8000/api/login/', {
        username: values.username,
        password: values.password,
      })
      .then((respond) => {
        console.log(respond.data);
        const dataLogin = {
          username: values.username,
          token: respond.data.token,
        };
        dispatch(saveDataLogin(dataLogin));
        navigate('/', { replace: true });
      })
      .catch((error) => {
        setError('Sai tên đăng nhập hoặc mật khẩu');
      });
  };

  function handleClose() {
    setError('');
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.left}>
        <Box className={classes.form}>
          <Box className={classes.logo}>
            <img srcSet={process.env.PUBLIC_URL + 'pizzaLogo.png 2x'} alt="" />
          </Box>
          <Box className={classes.title}>Đăng nhập</Box>
          <Box sx={{ ml: 2 }}>
            <LoginForm onSubmit={handleLogin} />
          </Box>
          <Box>
            Chưa có tài khoản?{' '}
            <Box
              onClick={() => navigate('/register', { replace: true })}
              className={classes.auth}
            >
              Đăng ký
            </Box>
          </Box>
        </Box>
        <Snackbar
          open={error ? true : false}
          autoHideDuration={3000}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Alert onClose={handleClose} severity="error">
            {error}
          </Alert>
        </Snackbar>
      </Box>
      <Box className={classes.image}>
        <Box className={classes.wrap}>
          <img src={process.env.PUBLIC_URL + 'auth.png'} alt="" />
        </Box>
      </Box>
    </Box>
  );
}
