import { Autocomplete, Box, TextField } from '@mui/material';
import Button from 'components/Button';
import React, { useState } from 'react';
import { useStyles } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { AddBtnClick, addOldProduct, addProduct } from 'features/Slice';

export default function AnProductCart({ chooseProduct }) {
  const classes = useStyles();
  const [size, setSize] = useState('');
  const [sole, setSole] = useState('');
  const [topping, setTopping] = useState('');
  const [note, setNote] = useState('Không hành');
  const cart = useSelector((state) => state.cart.listProduct);
  const dispatch = useDispatch();

  const product = {
    ...chooseProduct,
    size,
    sole,
    topping,
    note,
  };

  function handleToCartBtn() {
    const idx = cart.findIndex((item) => item.id === product.id);
    if (idx !== -1) {
      console.log('can find');
      if (
        cart[idx].size === product.size &&
        cart[idx].sole === product.sole &&
        cart[idx].topping === product.topping
      ) {
        dispatch(AddBtnClick(idx));
      } else {
        dispatch(addOldProduct(product));
      }
    } else {
      dispatch(addProduct(product));
    }
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.logo}>
        <img
          srcSet={process.env.PUBLIC_URL + `${chooseProduct.imgUrl}`}
          alt=""
          style={{ marginLeft: 'auto', display: 'block' }}
        />
      </Box>

      <Box className={classes.product}>
        <img srcSet={process.env.PUBLIC_URL + 'pizza.png 2x'} alt="" />
        <Box>
          <p style={{ marginTop: '30px' }}>{chooseProduct.name}</p>
          <p>
            {chooseProduct.cost}
            <span style={{ color: '#FF8000' }}>đ</span>
          </p>
        </Box>
      </Box>
      <Box
        component="form"
        className={classes.choose}
        onSubmit={handleToCartBtn}
      >
        <Box sx={{ flex: 1 }}>
          <Autocomplete
            disablePortal
            id="size"
            value={size}
            onChange={(event, newValue) => {
              setSize(newValue);
            }}
            isOptionEqualToValue={(option, value) =>
              option.value === value.value
            }
            options={['size S', 'size M', 'size L']}
            sx={{ mt: 1, mb: 1, width: '100%' }}
            renderInput={(params) => (
              <TextField
                name="size"
                required
                {...params}
                label="Chọn kích thước"
              />
            )}
          />
          <Autocomplete
            disablePortal
            id="sole"
            value={sole}
            onChange={(event, newValue) => {
              setSole(newValue);
            }}
            isOptionEqualToValue={(option, value) =>
              option.value === value.value
            }
            options={['đế giòn', 'đế mềm xốp']}
            sx={{ mt: 1, mb: 1, width: '100%' }}
            renderInput={(params) => (
              <TextField
                name="sole"
                required
                {...params}
                label="Chọn loại đế"
              />
            )}
          />
          <Autocomplete
            disablePortal
            id="topping"
            value={topping}
            onChange={(event, newValue) => {
              setTopping(newValue);
            }}
            isOptionEqualToValue={(option, value) =>
              option.value === value.value
            }
            options={['thêm phô mai phủ', 'thêm phô mai viền', 'double sốt']}
            sx={{ mt: 1, mb: 1, width: '100%' }}
            renderInput={(params) => (
              <TextField name="sole" {...params} label="Chọn Topping" />
            )}
          />

          <Box className={classes.note}>
            <TextField
              id="outlined-multiline-static"
              label="Ghi chú"
              multiline
              rows={4}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              sx={{ width: '100%', mt: '20px' }}
            />
          </Box>
        </Box>

        <Button type="submit" name={'Thêm vào giỏ'} />
      </Box>
    </Box>
  );
}
