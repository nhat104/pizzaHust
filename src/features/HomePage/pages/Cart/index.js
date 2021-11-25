import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AnProductCart from 'features/HomePage/pages/AnProductCart';
import EmptyCard from 'features/HomePage/pages/EmptyCard';
import ListProductCart from 'features/HomePage/pages/ListProductCart';
import React from 'react';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    width: '33.3333%',
  },
});

export default function Cart() {
  const classes = useStyles();
  const cart = useSelector((state) => state.cart.listProduct);
  const choose = useSelector((state) => state.cart.chooseProduct);
  console.log(cart);

  return (
    <Box className={classes.root}>
      {cart.length === 0 && Object.values(choose).length === 0 && <EmptyCard />}

      {Object.values(choose).length !== 0 && (
        <AnProductCart chooseProduct={choose} />
      )}

      {cart.length && Object.values(choose).length === 0 && (
        <ListProductCart cart={cart} />
      )}
    </Box>
  );
}
