import AddIcon from '@mui/icons-material/Add';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box, Divider, Collapse } from '@mui/material';
import Button from 'components/Button';
import { AddBtnClick, DelBtnClick, SubBtnClick } from 'features/Slice/index.js';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useStyles } from './styles.js';
import { TransitionGroup } from 'react-transition-group';

export default function ListProductCart({ cart }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const onSubBtnClick = (id) => {
    const idx = cart.findIndex((item) => item.id === id);
    dispatch(SubBtnClick(idx));
  };

  const onAddBtnClick = (id) => {
    const idx = cart.findIndex((item) => item.id === id);
    dispatch(AddBtnClick(idx));
  };

  const onDelBtnClick = (id) => {
    const idx = cart.findIndex((item) => item.id === id);
    dispatch(DelBtnClick(idx));
  };

  function renderItem({ item }) {
    return (
      <Box className={classes.productItem}>
        <img
          src={process.env.PUBLIC_URL + `${item.srcImg}`}
          srcSet={process.env.PUBLIC_URL + `${item.srcImg} 2x`}
          alt=""
        />
        <Box className={classes.itemInfo}>
          <p>{item.name}</p>
          <Box className={classes.quantity}>
            <Box onClick={() => onSubBtnClick(item.id)}>
              <RemoveIcon sx={{ cursor: 'pointer' }} />
            </Box>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Box sx={{ margin: '0 10px' }}>{item.quantity}</Box>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Box onClick={() => onAddBtnClick(item.id)}>
              <AddIcon sx={{ cursor: 'pointer' }} />
            </Box>
          </Box>
        </Box>
        <Box className={classes.cost}>
          <HighlightOffIcon
            sx={{ cursor: 'pointer' }}
            onClick={() => onDelBtnClick(item.id)}
          />
          <span>{item.cost * item.quantity} đ</span>
        </Box>
      </Box>
    );
  }

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
          <TransitionGroup>
            {cart.map((item) => (
              <Collapse key={item.id}>{renderItem({ item })}</Collapse>
            ))}
          </TransitionGroup>
          {/* {cart.map((item) => (
            <Box key={item.id} className={classes.productItem}>
              <img
                src={process.env.PUBLIC_URL + `${item.srcImg}`}
                srcSet={process.env.PUBLIC_URL + `${item.srcImg} 2x`}
                alt=""
              />
              <Box className={classes.itemInfo}>
                <p>{item.name}</p>
                <Box className={classes.quantity}>
                  <Box onClick={() => onSubBtnClick(item.id)}>
                    <RemoveIcon sx={{ cursor: 'pointer' }} />
                  </Box>
                  <Divider orientation="vertical" variant="middle" flexItem />
                  <Box sx={{ margin: '0 10px' }}>{item.quantity}</Box>
                  <Divider orientation="vertical" variant="middle" flexItem />
                  <Box onClick={() => onAddBtnClick(item.id)}>
                    <AddIcon sx={{ cursor: 'pointer' }} />
                  </Box>
                </Box>
              </Box>
              <Box className={classes.cost}>
                <HighlightOffIcon
                  sx={{ cursor: 'pointer' }}
                  onClick={() => onDelBtnClick(item.id)}
                />
                <span>{item.cost * item.quantity} đ</span>
              </Box>
            </Box>
          ))} */}
        </Box>
      </Box>
      <Button name={'Mua hàng'} />
    </Box>
  );
}
