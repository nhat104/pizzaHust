import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Autocomplete, Box, TextField } from '@mui/material';
import Button from 'components/Button';
import {
  AddBtnClick,
  addOldProduct,
  addProduct,
  BackBtnClick,
} from 'features/Slice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from './styles';

export default function AnProductCart({ chooseProduct }) {
  const classes = useStyles();
  const [size, setSize] = useState('');
  const [sole, setSole] = useState('');
  const [topping, setTopping] = useState('');
  const cart = useSelector((state) => state.cart.listProduct);
  const dispatch = useDispatch();

  function handleBackBtn() {
    dispatch(BackBtnClick());
  }

  function handleToCartBtn(event) {
    event.preventDefault();
    // change cost when choose size, topping
    const newSize = sizes.find((x) => x.size === size);
    let toppingCost = 0;
    if (topping !== '') {
      toppingCost = toppings.find((x) => x.topping === topping).cost;
    }

    const product = {
      ...chooseProduct,
      cost: newSize.cost + toppingCost,
      size,
      sole,
      topping,
    };
    console.log('product', product);

    const idx = cart.findIndex((item) => item.id === product.id);
    if (idx !== -1) {
      // Nếu sản phẩm mới trùng sản phẩm đã chọn, quantity + 1
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
        <ArrowBackIosIcon onClick={handleBackBtn} sx={{ cursor: 'pointer' }} />
        <img
          srcSet={process.env.PUBLIC_URL + 'pizzaLogo.png 2x'}
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
            className={classes.select}
            disablePortal
            id="size"
            inputValue={size}
            options={sizes}
            onInputChange={(event, newValue) => {
              setSize(newValue);
            }}
            isOptionEqualToValue={(option, value) =>
              option.value === value.value
            }
            getOptionLabel={(option) => option.size}
            sx={{ mt: 1, mb: 1, width: '100%' }}
            renderOption={(props, option) => (
              <Box component="li" {...props}>
                {option.size} ({option.cost}đ)
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                name="size"
                // autoFocus
                required
                {...params}
                label="Chọn size"
              />
            )}
          />

          <Autocomplete
            className={classes.select}
            disablePortal
            id="sole"
            inputValue={sole}
            options={soles}
            onInputChange={(event, newValue) => {
              setSole(newValue);
            }}
            isOptionEqualToValue={(option, value) =>
              option.value === value.value
            }
            getOptionLabel={(option) => option.sole}
            sx={{ mt: 1, mb: 1, width: '100%' }}
            renderOption={(props, option) => (
              <Box component="li" {...props}>
                {option.sole} ({option.cost})
              </Box>
            )}
            renderInput={(params) => (
              <TextField name="sole" required {...params} label="Chọn đế" />
            )}
          />

          {/* <span>Chọn topping</span> */}
          <Autocomplete
            className={classes.select}
            disablePortal
            id="topping"
            inputValue={topping}
            options={toppings}
            onInputChange={(event, newValue) => {
              setTopping(newValue);
            }}
            isOptionEqualToValue={(option, value) =>
              option.value === value.value
            }
            getOptionLabel={(option) => option.topping}
            sx={{ mt: 1, mb: 1, width: '100%' }}
            renderOption={(props, option) => (
              <Box component="li" {...props}>
                {option.topping} ({option.cost}đ)
              </Box>
            )}
            renderInput={(params) => (
              <TextField name="topping" {...params} label="Chọn topping" />
            )}
          />
        </Box>

        <Button type="submit" name={'Thêm vào giỏ'} />
      </Box>
    </Box>
  );
}

const sizes = [
  {
    size: 'size S',
    cost: 40000,
  },
  {
    size: 'size M',
    cost: 69000,
  },
  {
    size: 'size L',
    cost: 99000,
  },
];

const soles = [
  {
    sole: 'đế giòn',
    cost: 'miễn phí',
  },
  {
    sole: 'đế mềm xốp',
    cost: 'miễn phí',
  },
];

const toppings = [
  {
    topping: 'thêm phô mai phủ',
    cost: 10000,
  },
  {
    topping: 'thêm phô mai viền',
    cost: 10000,
  },
  {
    topping: 'double sốt',
    cost: 10000,
  },
];
