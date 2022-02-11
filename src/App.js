import { makeStyles } from '@mui/styles';
import Login from 'features/Authentication/pages/Login';
import Register from 'features/Authentication/pages/Register';
import BuySuccess from 'features/BuySuccess';
import HomePage from 'features/HomePage';
import Pay from 'features/PayMent';
import Personal from 'features/Personal';
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
