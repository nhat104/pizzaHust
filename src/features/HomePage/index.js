import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import NavBar from 'components/NavBar';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import Header from './pages/Header';
import Pizza from './pages/Category/Pizza';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#FFF2F2',
  },

  navBar: {},

  main: {
    padding: '0 40px 40px',
  },

  cart: {},
});

export default function HomePage() {
  const classes = useStyles();

  return (
    <>
      <Grid className={classes.root} container>
        <Grid item xs={1} className={classes.nav}>
          <NavBar className={classes.navBar} />
        </Grid>
        <Grid className={classes.main} item xs={7}>
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/pizza" />} />
            <Route path="/pizza" element={<Pizza />} />
          </Routes>
        </Grid>
        <Grid className={classes.cart} item xs={4}>
          <Cart />
        </Grid>
      </Grid>
    </>
  );
}
