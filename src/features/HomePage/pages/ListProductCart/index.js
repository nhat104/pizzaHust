import React from 'react';
import { Box, Divider } from '@mui/material';
import Button from 'components/Button';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useStyles } from './styles.js';

export default function ListProductCart({ cart }) {
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
          {cart.map((item) => (
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
