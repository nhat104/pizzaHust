import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AnProductCart from 'features/HomePage/pages/AnProductCart';
import EmptyCard from 'features/HomePage/pages/EmptyCard';
import ListProductCart from 'features/HomePage/pages/ListProductCart';
import React from 'react';

const useStyles = makeStyles({
  root: {},
});

export default function Cart() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <EmptyCard />
      {/* <AnProductCart /> */}
      {/* <ListProductCart /> */}
    </Box>
  );
}
