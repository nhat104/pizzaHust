import React, { useState } from 'react';
import { Box } from '@mui/material';
import RegisterForm from './components/RegisterForm';
import useStyles from '../Login/styles';
import { useNavigate } from 'react-router-dom';
import InformationForm from './components/InformationForm';

export default function Register() {
  const classes = useStyles();
  const [openInfoForm, setOpenInfoForm] = useState(false);
  const navigate = useNavigate();
  const [dataRegister, setDataRegister] = useState({});

  const handleRegister = (values) => {
    console.log('values', values);
    if (!openInfoForm) {
      setDataRegister({
        username: values.username,
        phone: values.phone,
        password: values.password,
      });
      setOpenInfoForm(true);
      // api register lan 1
    } else {
      const newValues = {
        ...dataRegister,
        ...values,
      };
      console.log('newValues', newValues);

      // api register lan 2

      navigate('/', { replace: true });
    }
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
        <img src={process.env.PUBLIC_URL + 'auth.png'} alt="" />
      </Box>
    </Box>
  );
}
