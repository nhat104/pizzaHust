import React from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Button from 'components/Button';

const useStyles = makeStyles({
  root: {
    padding: '77px 28px 34px 32px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',

    '& > span': {
      fontSize: '18px',
      fontWeight: 700,
      lineHeight: 22 / 18,
    },
  },

  body: {
    flex: 1,
    marginTop: '85px',
    alignSelf: 'center',
  },
});

export default function EmptyCard() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <span>Giỏ hàng</span>
      <Box className={classes.body}>
        <img srcSet={process.env.PUBLIC_URL + 'empty.png 2x'} alt="" />
        <p>Giỏ hàng trống, vui lòng chọn sản phẩm</p>
      </Box>
      <Button name={'Mua hàng'} disable />
    </Box>
  );
}
