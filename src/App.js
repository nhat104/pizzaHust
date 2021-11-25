import { makeStyles } from '@mui/styles';
import HomePage from 'features/HomePage';
import Pay from 'features/PayMent';
import React from 'react';
import { Route, Routes } from 'react-router';

const useStyles = makeStyles({
  root: {},
});

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/home" />} /> */}
        <Route path="/*" element={<HomePage />} />
        <Route path="/pay" element={<Pay />} />
      </Routes>
    </div>
  );
}
