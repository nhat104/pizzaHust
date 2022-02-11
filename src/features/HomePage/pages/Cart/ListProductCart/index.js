import React, { useState, useEffect } from 'react';
import { Box, Divider, Popover } from '@mui/material';
import { Tooltip, Typography, useMediaQuery } from '@mui/material';
import Button from 'components/Button';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useStyles } from './styles.js';
import { useDispatch } from 'react-redux';
import { AddBtnClick, DelBtnClick, SubBtnClick } from 'features/Slice/index.js';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useTheme } from '@mui/styles';

export default function ListProductCart({ cart }) {
  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.up('tablet'));
  const laptop = useMediaQuery(theme.breakpoints.up('laptop'));
  const classes = useStyles({ tablet, laptop });
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);

  // Hiện thông tin chi tiết sản phẩm khi hover
  const [openId, setOpenId] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (id, event) => {
    setOpenId(id);
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setOpenId(0);
    setAnchorEl(null);
  };

  // Tính tổng giá
  useEffect(() => {
    let newTotal = 0;
    cart.map(function calcTotal(item) {
      newTotal = newTotal + item.cost * item.quantity;
      return newTotal;
    });
    setTotal(newTotal);
  }, [cart]);

  // Thay đổi sản phẩm
  const onSubBtnClick = (id) => {
    const idx = cart.findIndex((item) => item.id === id);
    dispatch(SubBtnClick(idx));
    const newTotal = total - cart[idx].cost;
    setTotal(newTotal);
  };

  const onAddBtnClick = (id) => {
    const idx = cart.findIndex((item) => item.id === id);
    dispatch(AddBtnClick(idx));
    const newTotal = total + cart[idx].cost;
    setTotal(newTotal);
  };

  const onDelBtnClick = (id) => {
    const idx = cart.findIndex((item) => item.id === id);
    dispatch(DelBtnClick(idx));
    const newTotal = total - cart[idx].cost * cart[idx].quantity;
    setTotal(newTotal);
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.logo}>
        <img srcSet={process.env.PUBLIC_URL + 'pizzaLogo.png 2x'} alt="" />
      </Box>
      <Box className={classes.product}>
        <Box className={classes.text}>
          <span>Giỏ hàng</span>
          <span>
            {total}
            <span style={{ color: '#ff8000' }}> đ</span>
          </span>
        </Box>
        <Box className={classes.productList}>
          {cart.map((item) => (
            <Box key={item.id} className={classes.productItem}>
              <Box
                className={classes.image}
                onMouseEnter={(event) => handlePopoverOpen(item.id, event)}
                onMouseLeave={handlePopoverClose}
              >
                <img src={item.image} alt="" />
              </Box>
              <Box className={classes.itemInfo}>
                <p>{item.name}</p>
                {item.hasOwnProperty('size') && (
                  <Popover
                    sx={{
                      pointerEvents: 'none',
                    }}
                    open={item.id === openId}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                  >
                    <Typography sx={{ p: 1 }}>
                      Size {item.size}, {item.sole},{' '}
                      {item.topping ? item.topping : 'Không topping'}
                    </Typography>
                  </Popover>
                )}

                {item.hasOwnProperty('numberperson') && (
                  <Popover
                    sx={{
                      pointerEvents: 'none',
                    }}
                    open={item.id === openId}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'center',
                      horizontal: 'left',
                    }}
                    transformOrigin={{
                      vertical: 'center',
                      horizontal: 'right',
                    }}
                  >
                    {item.subProduct.map((subItem) => (
                      <Box
                        key={subItem.id}
                        className={classes.productItem}
                        sx={{ bgcolor: '#fff', m: '30px 20px' }}
                      >
                        <Box className={classes.image}>
                          <img src={subItem.image} alt="" />
                        </Box>
                        <Box className={classes.itemInfo}>
                          <p>{subItem.name}</p>
                        </Box>
                      </Box>
                    ))}
                  </Popover>
                )}

                <Box className={classes.quantity}>
                  <Box onClick={() => onSubBtnClick(item.id)}>
                    <RemoveIcon sx={{ cursor: 'pointer' }} />
                  </Box>
                  <Divider orientation="vertical" variant="middle" flexItem />
                  <Box sx={{ margin: '0 10px', color: '#ff8000' }}>
                    {item.quantity}
                  </Box>
                  <Divider orientation="vertical" variant="middle" flexItem />
                  <Box onClick={() => onAddBtnClick(item.id)}>
                    <AddIcon sx={{ cursor: 'pointer' }} />
                  </Box>
                </Box>
              </Box>
              <Box className={classes.cost}>
                <Tooltip title="Delete">
                  <HighlightOffIcon
                    sx={{ cursor: 'pointer' }}
                    onClick={() => onDelBtnClick(item.id)}
                  />
                </Tooltip>
                <span>
                  {item.cost * item.quantity}
                  <span style={{ color: '#ff8000' }}> đ</span>
                </span>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Button name={'Mua hàng'} />
    </Box>
  );
}
