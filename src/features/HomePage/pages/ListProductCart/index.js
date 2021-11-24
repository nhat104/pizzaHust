import React from 'react';
import { Box, Divider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Button from 'components/Button';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const useStyles = makeStyles({
  root: {
    padding: '12px 28px 34px 32px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },

  product: {
    flex: 1,
    marginTop: '18px',
    overflow: 'auto',
    marginBottom: '40px',
  },

  productList: {
    margin: '30px 0',
  },

  text: {
    '& span:last-child': {
      float: 'right',
    },
  },

  productItem: {
    height: '60px',
    backgroundColor: '#FFECD1',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '24px',
    borderRadius: '57px',

    '& img': {
      width: '84px',
      marginLeft: '-5px',
    },

    '& p': {
      margin: 0,
    },
  },

  itemInfo: {
    flex: 1,

    '& p': {
      fontWeight: 500,
    },

    '& span:last-child': {
      float: 'right',
      marginRight: '30px',
      fontWeight: 700,
    },
  },

  quantity: {
    display: 'inline-flex',
    alignItems: 'center',

    '& > div': {
      padding: '0 5px',
    },
  },
});
export default function ListProductCart() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.logo}>
        <img
          srcSet={process.env.PUBLIC_URL + 'pizzaLogo.png 2x'}
          alt=""
          style={{ marginLeft: 'auto', display: 'block' }}
        />
      </Box>
      <Box className={classes.product}>
        <Box className={classes.text}>
          <span style={{ fontSize: '18px', fontWeight: 700 }}>Giỏ hàng</span>
          <span style={{ fontSize: '12px', fontWeight: 500, color: '#FF8000' }}>
            Xem thêm
          </span>
        </Box>
        <Box className={classes.productList}>
          {items.map((item) => (
            <Box key={item.id} className={classes.productItem}>
              <img srcSet={process.env.PUBLIC_URL + 'pizza.png 2x'} alt="" />
              <Box className={classes.itemInfo}>
                <p>{item.name}</p>
                <Box className={classes.quantity}>
                  <Box>
                    <RemoveIcon sx={{ cursor: 'pointer' }} />
                  </Box>
                  <Divider orientation="vertical" variant="middle" flexItem />
                  <Box sx={{ margin: '0 10px' }}>{item.quantity}</Box>
                  <Divider orientation="vertical" variant="middle" flexItem />
                  <Box>
                    <AddIcon sx={{ cursor: 'pointer' }} />
                  </Box>
                </Box>
                <span>{item.cost} đ</span>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Button name={'Mua hàng'} />
    </Box>
  );
}

const items = [
  {
    id: 1,
    urlImg: 'pizza.png 2x',
    name: 'Pizza Hải Sản Đào',
    quantity: 1,
    cost: 69000,
  },
  {
    id: 2,
    urlImg: 'pizza.png 2x',
    name: 'Pizza Hải Sản Đào',
    quantity: 1,
    cost: 69000,
  },
  {
    id: 3,
    urlImg: 'pizza.png 2x',
    name: 'Pizza Hải Sản Đào',
    quantity: 1,
    cost: 69000,
  },
  {
    id: 4,
    urlImg: 'pizza.png 2x',
    name: 'Pizza Hải Sản Đào',
    quantity: 1,
    cost: 69000,
  },
  {
    id: 5,
    urlImg: 'pizza.png 2x',
    name: 'Pizza Hải Sản Đào',
    quantity: 1,
    cost: 69000,
  },
  {
    id: 6,
    urlImg: 'pizza.png 2x',
    name: 'Pizza Hải Sản Đào',
    quantity: 1,
    cost: 69000,
  },
];
