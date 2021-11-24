import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import NavBar from 'components/NavBar';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Cart from './pages/Cart';
import MainPage from './pages/Main';
import Pizza from './pages/Pizza';

const useStyles = makeStyles({
  root: {},

  navBar: {},

  main: {
    backgroundColor: '#FFF2F2',
    padding: '0 40px 40px',
  },

  cart: {},
});

export default function HomePage() {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container>
      <Grid className={classes.navBar} item xs={1}>
        <NavBar />
      </Grid>
      <Grid className={classes.main} item xs={7}>
        <MainPage />
        <Routes>
          <Route path="/" element={<Navigate to="/pizza" />} />
          <Route path="/pizza" element={<Pizza />} />
        </Routes>
      </Grid>
      <Grid className={classes.cart} item xs={4}>
        <Cart />
      </Grid>
    </Grid>
  );
}
