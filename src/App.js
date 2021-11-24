import { makeStyles } from '@mui/styles';
import HomePage from 'features/HomePage';
import React from 'react';

const useStyles = makeStyles({
  root: {},
});

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home/*" element={<HomePage />} />
        <Route path="/pay" element={<Pay />} />
      </Routes> */}
      <HomePage />
    </div>
  );
}
