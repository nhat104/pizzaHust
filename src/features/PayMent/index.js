import { Grid, useMediaQuery } from '@mui/material';
import { makeStyles, useTheme } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PayCard from './pages/PayCart';
import UserForm from './pages/UserForm';

const useStyles = makeStyles({
  root: {
    height: (props) => (props.tablet ? '100vh' : 'none'),
    backgroundColor: '#FFF2F2',
    width: (props) => (props.tablet ? 'calc(100vw - 16px) !important' : '100%'),
    paddingLeft: '25px',
  },
});

export default function Pay() {
  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.up('tablet'));
  const classes = useStyles({ tablet });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  const user = useSelector((state) => state.auth.username);

  // API
  const [data, setData] = useState([]);
  const api = `http://127.0.0.1:8000/profile/?user__username=${user}`;
  useEffect(() => {
    if (user) {
      async function getData() {
        const response = await fetch(api);
        const responseJSON = await response.json();
        if (responseJSON.length === 1) {
          setData(responseJSON[0]);
        } else {
          setData({});
        }
      }
      getData();
    }
  }, [api, user]);

  return (
    <Grid className={classes.root} container>
      {/* <Grid className={classes.navBar} item xs={1}>
        <NavBar />
      </Grid> */}
      <Grid item xs={tablet ? 8 : 12}>
        <PayCard />
      </Grid>
      <Grid item xs={tablet ? 4 : 12}>
        {!user ? (
          <UserForm />
        ) : (
          data.hasOwnProperty('name') && <UserForm data={data} />
        )}
      </Grid>
    </Grid>
  );
}
