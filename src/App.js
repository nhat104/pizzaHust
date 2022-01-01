import { makeStyles } from '@mui/styles';
import BuySuccess from 'features/BuySuccess';
import HomePage from 'features/HomePage';
import Login from 'features/Login';
import Pay from 'features/PayMent';
import Personal from 'features/Personal';
import Register from 'features/Register/index';
import React from 'react';
import { Route, Routes } from 'react-router';

const useStyles = makeStyles({
  root: {
    width: 'calc(100vw - 17px)',
  },
});

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/success" element={<BuySuccess />} />
      </Routes>
    </div>
  );
}
