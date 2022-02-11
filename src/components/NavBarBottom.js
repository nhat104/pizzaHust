import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { Box, Drawer } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Cart from 'features/HomePage/pages/Cart';
import { BackBtnClick } from 'features/Slice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#FF8000',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '54px',
    width: '100%',
    position: 'fixed',
    zIndex: 2,
    bottom: 0,
  },

  icon: {
    padding: '10px 20px',
    cursor: 'pointer',
  },
});

export default function NavBarBottom() {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openCart, setOpenCart] = useState(false);
  const loadingChoose = useSelector((state) => state.cart.loadingChoose);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setOpenCart(open);
    if (!open) {
      dispatch(BackBtnClick());
    }
  };

  useEffect(() => {
    if (loadingChoose === true) {
      setOpenCart(true);
    }
  }, [loadingChoose]);

  return (
    <Box className={classes.root}>
      <Box
        className={classes.icon}
        onClick={() => navigate('/personal', { replace: true })}
      >
        <PersonOutlinedIcon sx={{ fontSize: '30px', color: '#fff' }} />
      </Box>
      <Box className={classes.icon} onClick={toggleDrawer(true)}>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_750_6523)">
            <path
              d="M11.25 27.5C11.9404 27.5 12.5 26.9404 12.5 26.25C12.5 25.5596 11.9404 25 11.25 25C10.5596 25 10 25.5596 10 26.25C10 26.9404 10.5596 27.5 11.25 27.5Z"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M25 27.5C25.6904 27.5 26.25 26.9404 26.25 26.25C26.25 25.5596 25.6904 25 25 25C24.3096 25 23.75 25.5596 23.75 26.25C23.75 26.9404 24.3096 27.5 25 27.5Z"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.25 1.25H6.25L9.6 17.9875C9.71431 18.563 10.0274 19.0799 10.4844 19.4479C10.9415 19.8158 11.5134 20.0112 12.1 20H24.25C24.8366 20.0112 25.4085 19.8158 25.8656 19.4479C26.3226 19.0799 26.6357 18.563 26.75 17.9875L28.75 7.5H7.5"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_750_6523">
              <rect width="30" height="30" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Box>
      <Drawer anchor="right" open={openCart} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: '90vw', maxWidth: '500px' }}
          role="presentation"
          onKeyDown={toggleDrawer(false)}
        >
          <Cart />
        </Box>
      </Drawer>
    </Box>
  );
}
