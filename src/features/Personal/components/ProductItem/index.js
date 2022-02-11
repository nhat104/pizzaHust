import { Box } from '@mui/material';
import { useStyles } from 'features/PayMent/pages/PayCart/styles';
import React from 'react';

export default function ProductItem({ item }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box
        className={classes.productItem}
        sx={{ height: '80px', borderRadius: '57px' }}
      >
        <img
          src={item.pizzaa ? item.pizzaa.image : item.sidedis.image}
          style={{ marginLeft: '-10px' }}
          alt=""
        />
        <Box className={classes.itemInfo}>
          <p>
            {item.pizzaa ? item.pizzaa.name : item.sidedis.name}{' '}
            {item.pecent !== 0 ? '(' + -item.pecent + '%)' : ''}
          </p>

          <Box className={classes.quantity}>
            {/* Đánh giá */}
            <span style={{ margin: '0 20px' }}>
              <span style={{ color: '#ff8000' }}>x</span>
              {item.amount}
            </span>
          </Box>
          <p style={{ fontSize: '10px', lineHeight: 6 / 5 }}>
            {item.size
              ? `${item.size}, ${item.soles}, ${
                  item.topping ? item.topping : 'Khong topping'
                }`
              : undefined}
          </p>
        </Box>
        <Box className={classes.cost}>
          <span>
            {item.pizzaa
              ? item.size === 'S'
                ? (((item.pizzaa.cost + (item.topping ? 10000 : 0)) *
                    (100 - item.pecent)) /
                    100) *
                  item.amount
                : item.size === 'M'
                ? (((item.pizzaa.costm + (item.topping ? 10000 : 0)) *
                    (100 - item.pecent)) /
                    100) *
                  item.amount
                : (((item.pizzaa.costl + (item.topping ? 10000 : 0)) *
                    (100 - item.pecent)) /
                    100) *
                  item.amount
              : ((item.sidedis.cost * (100 - item.pecent)) / 100) * item.amount}
            <span style={{ color: '#ff8000' }}>đ</span>
          </span>
        </Box>
      </Box>
    </Box>
  );
}
