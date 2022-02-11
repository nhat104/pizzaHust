import { Grid, useMediaQuery } from '@mui/material';
import { makeStyles, useTheme } from '@mui/styles';
import NavBarBottom from 'components/NavBarBottom';
import NavBarLeft from 'components/NavBarLeft';
import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import Cart from './pages/Cart';
import Main from './pages/Main';
import Search from './pages/Search';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#FFF2F2',
    width: (props) => (props.tablet ? 'calc(100vw - 16px) !important' : '100%'),
  },
  main: {
    padding: '0 40px 40px',
  },
});

export default function HomePage() {
  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.up('tablet'));
  const classes = useStyles({ tablet });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  return (
    <>
      {!tablet && <NavBarBottom />}
      <Grid className={classes.root} container>
        <Grid item xs={1} display={tablet ? 'block' : 'none'}>
          <NavBarLeft />
        </Grid>
        <Grid className={classes.main} item xs={tablet ? 7 : 12}>
          <Routes>
            <Route path="" element={<Navigate to="home" />} />
            <Route path="home" element={<Main />} />
            <Route path=":search" element={<Search />} />
          </Routes>
        </Grid>
        <Grid item xs={4} display={tablet ? 'block' : 'none'}>
          <Cart />
        </Grid>
      </Grid>
    </>
  );
}
