import React, { useEffect, useState } from 'react';
import { Box, Divider } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useStyles } from './styles';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AddBtnClick, DelBtnClick, SubBtnClick } from 'features/Slice/index.js';
import { useNavigate } from 'react-router-dom';

export default function PayCard() {
  const classes = useStyles();
  const cart = useSelector((state) => state.cart.listProduct);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let newTotal = 0;
    cart.map(function calcTotal(item) {
      newTotal = newTotal + item.cost;
    });
    setTotal(newTotal);
  }, []);

  const onSubBtnClick = (id) => {
    const idx = cart.findIndex((item) => item.id === id);
    dispatch(SubBtnClick(idx));
    const newTotal = total - cart[idx].unitCost;
    setTotal(newTotal);
  };

  const onAddBtnClick = (id) => {
    const idx = cart.findIndex((item) => item.id === id);
    dispatch(AddBtnClick(idx));
    const newTotal = total + cart[idx].unitCost;
    setTotal(newTotal);
  };

  const onDelBtnClick = (id) => {
    const idx = cart.findIndex((item) => item.id === id);
    const newTotal = total - cart[idx].cost;
    setTotal(newTotal);
    dispatch(DelBtnClick(idx));
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <Box className={classes.cart}>
          <span>Giỏ hàng</span>
          <Box className={classes.productList}>
            {cart.map((item) => (
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
                    <Divider orientation="vertical" flexItem />
                    <Box>
                      <span>{item.quantity}</span>
                    </Box>
                    <Divider orientation="vertical" flexItem />
                    <Box onClick={() => onAddBtnClick(item.id)}>
                      <AddIcon sx={{ cursor: 'pointer' }} />
                    </Box>
                  </Box>
                  <p style={{ fontSize: '10px', lineHeight: 6 / 5 }}>
                    {item.size}, {item.sole}, {item.topping}
                  </p>
                </Box>
                <Box className={classes.price}>
                  <HighlightOffIcon
                    onClick={() => onDelBtnClick(item.id)}
                    sx={{ float: 'right', mb: 2, cursor: 'pointer' }}
                  />
                  <p>
                    {item.cost}
                    <span style={{ color: '#ff8000' }}>đ</span>
                  </p>
                </Box>
              </Box>
            ))}
          </Box>

          {/* Tổng tiền */}
          <Box className={classes.total}>
            <p style={{ float: 'right' }}>
              Tổng{' '}
              <span style={{ marginLeft: '52px' }}>
                {total}
                <span style={{ color: '#ff8000' }}>đ</span>
              </span>
            </p>
            <span onClick={() => navigate(-1)}>Tiếp tục mua hàng</span>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

// const items = [
//   {
//     id: 1,
//     srcImg: 'pizza.png 2x',
//     name: 'Pizza Hải Sản Đào',
//     quantity: 1,
//     price: 69000,
//     desc: 'Đế Mỏng, Viền Phô Mai, Không topping',
//   },
//   {
//     id: 2,
//     srcImg: 'pizza1.png',
//     name: 'Pizza Hải Sản Pesto Xanh',
//     quantity: 2,
//     price: 99000,
//     desc: 'Tôm, cua, mực và bông cải xanh tươi ngon trên nền sốt Pesto Xanh',
//   },
//   {
//     id: 3,
//     srcImg: 'pizza2.png',
//     name: 'Pizza Hải Sản Cao Cấp',
//     quantity: 1,
//     price: 179000,
//     desc: 'Tôm, cua, mực và nghêu với sốt Marinara',
//   },
//   {
//     id: 4,
//     srcImg: 'pizza3.png',
//     name: 'Pizza Thịt Nguội Kiểu Canada',
//     quantity: 3,
//     price: 149000,
//     desc: 'Sự kết hợp giữa thịt nguội và bắp ngọt',
//   },
//   {
//     id: 5,
//     srcImg: 'pizza4.png',
//     name: 'Pizza Thịt Xông Khói',
//     quantity: 4,
//     price: 169000,
//     desc: 'Thịt giăm bông, thịt xông khói và hai loại rau của ớt xanh, cà chua',
//   },
//   {
//     id: 6,
//     srcImg: 'chicken.png',
//     name: 'Đùi Gà Tẩm Bột Chiên Giòn (6pcs)',
//     quantity: 5,
//     price: 279000,
//     desc: 'Đùi Gà phủ một lớp bột chiên giòn rụm',
//   },
//   {
//     id: 7,
//     srcImg: 'pasta.png',
//     name: 'Mì Ý Tôm Sốt Kem Cà Chua',
//     quantity: 10,
//     price: 279000,
//     desc: 'Sự tươi ngon của tôm kết hợp với sốt kem cà chua',
//   },
// ];
