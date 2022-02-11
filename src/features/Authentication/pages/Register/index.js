import { Alert, Box, Snackbar } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useStyles from '../Login/styles';
import InformationForm from './components/InformationForm';
import RegisterForm from './components/RegisterForm';
import { saveDataLogin } from 'features/Authentication/slice';

export default function Register() {
  const classes = useStyles();
  const [openInfoForm, setOpenInfoForm] = useState(false);
  const [error, setError] = useState('');
  const [dataRegister, setDataRegister] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (values) => {
    console.log(values);
    if (!openInfoForm) {
      const userApi = 'http://127.0.0.1:8000/api/register/';
      const postApi = (userInfo) => {
        var e = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userInfo),
        };
        fetch(userApi, e)
          .then((res) => {
            if (res.ok) {
              console.log(res);
              setOpenInfoForm(true);
            } else {
              setError('Tên đăng nhập đã tồn tại.');
            }
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      };
      const userInfo = {
        username: values.username,
        email: values.email,
        password: values.password,
      };
      setDataRegister({ ...userInfo });
      postApi(userInfo);
    } else {
      const newValues = {
        user: dataRegister.username,
        email: dataRegister.email,
        name: values.fullname,
        number_phone: values.phone,
        address: values.address,
        pub_date: values.dateOfBirth,
        image: null,
      };
      console.log(newValues);
      const url_post = 'http://127.0.0.1:8000/profile/';
      const postApi2 = (userInfo) => {
        var e = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userInfo),
        };
        fetch(url_post, e)
          .then((res) => {
            if (res.ok) {
              dispatch(
                saveDataLogin({
                  username: newValues.user,
                  token: newValues.username,
                })
              );
              navigate('/', { replace: true });
              res.json();
            } else {
              setError('Không thành công!');
            }
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      };
      postApi2(newValues);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setError('');
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.left}>
        <Box className={classes.form}>
          <Box className={classes.logo}>
            <img srcSet={process.env.PUBLIC_URL + 'pizzaLogo.png 2x'} alt="" />
          </Box>
          <Box className={classes.title}>Đăng ký</Box>
          <Box sx={{ ml: 2 }}>
            {openInfoForm ? (
              <InformationForm onSubmit={handleRegister} />
            ) : (
              <Box>
                <RegisterForm onSubmit={handleRegister} />
                Đã có tài khoản?{' '}
                <Box
                  onClick={() => navigate('/login', { replace: true })}
                  className={classes.auth}
                >
                  Đăng nhập
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
      <Box className={classes.image}>
        <Box className={classes.wrap}>
          <img src={process.env.PUBLIC_URL + 'auth.png'} alt="" />
        </Box>
      </Box>
      <Snackbar
        open={error}
        autoHideDuration={3000}
        onClose={handleClose}
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
  );
}
