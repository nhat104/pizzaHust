import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Grid } from '@mui/material';
import NavBarLeft from 'components/NavBarLeft';
import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    backgroundColor: '#FFF2F2',
  },

  main: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
    marginLeft: '25px',
    backgroundColor: '#fff',
    borderRadius: '20px 0px 0px 0px',
  },

  img: {
    margin: '70px 0 15px',
  },

  button: {
    width: '311px',
    '& Button': {
      background:
        'linear-gradient(104.17deg, #FF8000 -203.98%, #FF8000 -203.95%, #FF0000 115.92%)',
    },
  },
});

export default function BuySuccess() {
  const classes = useStyles();
  const navigate = useNavigate();

  function handleReturnHome(event) {
    event.preventDefault();
    navigate('/', { replace: true });
  }

  function handleViewCart(event) {
    event.preventDefault();
    navigate('/personal', { replace: true });
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.main}>
        <Box className={classes.img}>
          <img srcSet={process.env.PUBLIC_URL + 'buySuccess.png 2x'} alt="" />
        </Box>
        <Box className={classes.button} onClick={handleReturnHome}>
          <Button name="Quay lại trang chủ" />
        </Box>
        <Box className={classes.button} onClick={handleViewCart}>
          <Button name="Xem đơn hàng" />
        </Box>
      </Box>
    </Box>
  );
}
