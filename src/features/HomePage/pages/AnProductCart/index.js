import React from 'react';
import { Box, Autocomplete, TextField } from '@mui/material';
import Button from 'components/Button';
import { useStyles } from './styles';

export default function AnProductCart() {
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
        <img srcSet={process.env.PUBLIC_URL + 'pizza.png 2x'} alt="" />
        <Box>
          <p style={{ marginTop: '30px' }}>Pizza Hải Sản Đào</p>
          <p>
            69.000<span style={{ color: '#FF8000' }}>đ</span>
          </p>
        </Box>
      </Box>
      <Box className={classes.choose}>
        <Box component="form" className={classes.choose_1}>
          <Autocomplete
            disablePortal
            id="size"
            options={['size S', 'size M', 'size L']}
            sx={{ mt: 1, mb: 1, width: '100%' }}
            renderInput={(params) => (
              <TextField name="size" {...params} label="Chọn kích thước" />
            )}
          />
        </Box>
        <Box component="form" className={classes.choose_1}>
          <Autocomplete
            disablePortal
            id="sole"
            options={['đế giòn', 'đế mềm xốp']}
            sx={{ mt: 1, mb: 1, width: '100%' }}
            renderInput={(params) => (
              <TextField name="sole" {...params} label="Chọn loại đế" />
            )}
          />
        </Box>
        <Box className={classes.chooseTopping}>
          <p>Topping</p>
          <Box className={classes.toppingItem}>
            <img srcSet={process.env.PUBLIC_URL + 'tomato.png 2x'} alt="" />
            <span>Cà chua</span>
            <span>+65.000đ</span>
            <svg
              width="12"
              height="15"
              viewBox="0 0 12 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="5.62992"
                cy="8.71428"
                rx="5.62992"
                ry="5.71428"
                fill="#BFBFBF"
              />
              <path
                d="M6.6084 7.66113H9.38379V8.85742H6.6084V12.002H5.33692V8.85742H2.56153V7.66113H5.33692V4.75586H6.6084V7.66113Z"
                fill="white"
              />
            </svg>
          </Box>
          <Box className={classes.toppingItem}>
            <img srcSet={process.env.PUBLIC_URL + 'tomato.png 2x'} alt="" />
            <span>Cà chua</span>
            <span>+65.000đ</span>
            <svg
              width="12"
              height="15"
              viewBox="0 0 12 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="5.62992"
                cy="8.71428"
                rx="5.62992"
                ry="5.71428"
                fill="#BFBFBF"
              />
              <path
                d="M6.6084 7.66113H9.38379V8.85742H6.6084V12.002H5.33692V8.85742H2.56153V7.66113H5.33692V4.75586H6.6084V7.66113Z"
                fill="white"
              />
            </svg>
          </Box>
        </Box>
        <Box className={classes.note}>
          <TextField
            id="outlined-multiline-static"
            label="Ghi chú"
            multiline
            rows={3}
            defaultValue="Default Value"
            sx={{ width: '100%', mt: '20px' }}
          />
        </Box>
      </Box>
      <Button name={'Thêm vào giỏ'} />
    </Box>
  );
}
