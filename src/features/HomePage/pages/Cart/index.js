import { Box, useMediaQuery } from '@mui/material';
import { makeStyles, useTheme } from '@mui/styles';
import AnProductCart from 'features/HomePage/pages/Cart/AnProductCart';
import EmptyCard from 'features/HomePage/pages/Cart/EmptyCard';
import ListProductCart from 'features/HomePage/pages/Cart/ListProductCart';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  root: {
    position: (props) => (props.tablet ? 'fixed' : 'block'),
    // position: 'fixed',
    zIndex: 2,
    width: (props) => (props.tablet ? '33.3333%' : '100%'),
    // width: '100%',
    // maxWidth: '420px',
    margin: '0 auto',
    backgroundColor: '#fff',
    borderRadius: '20px 0 0 0',
  },
});

export default function Cart() {
  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.up('tablet'));
  const classes = useStyles({ tablet });
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

      {cart.length !== 0 && Object.values(choose).length === 0 && (
        <ListProductCart cart={cart} />
      )}
    </Box>
  );
}
