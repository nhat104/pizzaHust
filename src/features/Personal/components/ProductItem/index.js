import { Box } from '@mui/material';
import React from 'react';
import { useStyles } from 'features/PayMent/pages/PayCart/styles';

export default function ProductItem({ item }) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box
        className={classes.productItem}
        sx={{ height: '80px', borderRadius: '57px' }}
      >
        <img
          src={process.env.PUBLIC_URL + 'pizza.png'}
          style={{ marginLeft: '-10px' }}
          alt=""
        />
        <Box className={classes.itemInfo}>
          <p>{item.name}</p>

          <Box className={classes.quantity}>
            <span style={{ margin: '0 20px' }}>{item.quantity}</span>
          </Box>
          <p style={{ fontSize: '10px', lineHeight: 6 / 5 }}>
            {item.size}, {item.sole},{' '}
            {item.topping ? item.topping : 'Không topping'}
          </p>
        </Box>
        <Box className={classes.cost}>
          <span>
            {item.cost * item.quantity}
            <span style={{ color: '#ff8000' }}>đ</span>
          </span>
        </Box>
      </Box>
    </Box>
  );
}
