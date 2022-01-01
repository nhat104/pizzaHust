import { Grid } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import PayCard from './pages/PayCart';
import UserForm from './pages/UserForm';
import NavBar from 'components/NavBar';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    backgroundColor: '#FFF2F2',
  },
});

export default function Pay() {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container>
      <Grid className={classes.navBar} item xs={1}>
        <NavBar />
      </Grid>
      <Grid className={classes.main} item xs={7}>
        <PayCard />
      </Grid>
      <Grid className={classes.userForm} item xs={4}>
        <UserForm />
      </Grid>
    </Grid>
  );
}
