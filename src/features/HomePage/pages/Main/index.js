import { Box } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useStyles } from './styles';

export default function MainPage() {
  const classes = useStyles();

  const [isActive, setIsActive] = useState(0);

  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <img
          srcSet={process.env.PUBLIC_URL + 'pizzaLogo.png 2x'}
          alt=""
          style={{ margin: 'auto 0' }}
        />

        <img src={process.env.PUBLIC_URL + 'banner.png'} alt="" />
      </Box>
      <Box className={classes.body}>
        <span>Thực đơn</span>
        <Box className={classes.category}>
          {category.map((item) => (
            <div key={item.id}>
              <NavLink to={item.link} className={classes.item}>
                <div className={classes.circle}></div>
                <span>{item.name}</span>
                <div className={classes.arrow}>
                  {/* {!isActive && (
                    <img
                      srcSet={process.env.PUBLIC_URL + 'arrowRight.png 2x'}
                      alt=""
                    />
                  )} */}
                  {!isActive && (
                    <img
                      srcSet={process.env.PUBLIC_URL + 'arrowBottom.png 2x'}
                      alt=""
                    />
                  )}
                </div>
              </NavLink>
            </div>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

const category = [
  {
    id: 1,
    name: 'Pizza',
    link: 'pizza',
  },
  {
    id: 2,
    name: 'Pizza',
    link: 'pizza1',
  },
  {
    id: 3,
    name: 'Pizza',
    link: 'pizza2',
  },
  {
    id: 4,
    name: 'Pizza',
    link: 'pizza3',
  },
  {
    id: 5,
    name: 'Pizza',
    link: 'pizza4',
  },
  {
    id: 6,
    name: 'Pizza',
    link: 'pizza5',
  },
];
