import React from 'react';
import ProductItem from '../ProductItem';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#fff',
    boxSizing: 'border-box',
    padding: '20px 10px',
    borderRadius: '40px',
  },

  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
  },

  fee: {
    textAlign: 'end',
    marginTop: '20px',
    '& > span:first-child': {
      fontSize: '18px',
      paddingRight: '60px',
      fontWeight: 700,
    },
    '& > span:last-child': {
      fontSize: '16px',
      fontWeight: 700,
      '& span': {
        color: '#ff8000',
        margin: '0 28px 0 4px',
      },
    },
  },
});

export default function ProductList({ list, fee }) {
  const classes = useStyles();
  // console.log(list);
  return (
    <Box className={classes.root}>
      <Box className={classes.list}>
        {list.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </Box>
      <Box className={classes.fee}>
        <span>Tổng thanh toán</span>
        <span>
          {fee}
          <span>đ</span>
        </span>
      </Box>
    </Box>
  );
}
