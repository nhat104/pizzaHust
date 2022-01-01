import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AnProductCart from 'features/HomePage/pages/Cart/AnProductCart';
import EmptyCard from 'features/HomePage/pages/Cart/EmptyCard';
import ListProductCart from 'features/HomePage/pages/Cart/ListProductCart';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    zIndex: 2,
    width: '33.3333%',
    // boxSizing: 'border-box',
    // padding: '21px 28px 34px 32px',
    backgroundColor: '#fff',
    borderRadius: '20px 0 0 0',
  },
});

export default function Cart() {
  const classes = useStyles();
  const cart = useSelector((state) => state.cart.listProduct);
  const choose = useSelector((state) => state.cart.chooseProduct);
  
  useEffect(() => {
    console.log('cart:', cart);
  }, [cart]);

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
