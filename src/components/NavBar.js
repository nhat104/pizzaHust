import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import NavIcon from './NavIcon';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  navList: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: '0 30px 0 0',
    backgroundColor: '#fff',
    position: 'fixed !important',
    width: '8.3333%',
    height: '100vh',
    '& li': {
      justifyContent: 'center',
      margin: '12px 0',
      height: '46px',
      width: '46px',
    },
  },
  navIcon: {
    cursor: 'pointer',
    borderRadius: '12px',
    background: 'rgba(255, 255, 255, 0.5)',
    boxShadow:
      '4px 4px 4px rgba(156, 156, 156, 0.1), -2px -2px 4px rgba(208, 208, 208, 0.15)',
    transition: 'transform 0.5s',

    '& svg': {
      fill: '#D2D2D2',
    },
    '&:hover': {
      backgroundColor: '#fff',
      cursor: 'pointer',
      transform: 'scale(1.2)',
      boxShadow:
        '4px 4px 4px rgba(255, 128, 1, 0.25), -2px -2px 4px rgba(208, 208, 208, 0.15)',
      '& svg': {
        fill: '#ff8001',
      },
    },
  },
  active: {
    borderRadius: '45px',
    backgroundColor: '#ff8001 !important',
    transform: 'scale(1.2)',
    '& svg': {
      fill: '#fff',
    },
    '&:hover': {
      backgroundColor: '#fff',
      cursor: 'pointer',
      transform: 'scale(1.2)',
      boxShadow:
        '4px 4px 4px rgba(255, 128, 1, 0.25), -2px -2px 4px rgba(208, 208, 208, 0.15)',
      '& svg': {
        fill: '#fff',
      },
    },
  },
});

export default function NavBar() {
  const classes = useStyles();
  const [isActive, setIsActive] = useState(1);

  return (
    <List component="nav" className={classes.navList}>
      {/* <ListItem index={1} className={`${classes.navIcon} ${Number(this.index)===currentIndex ? classes.active : ''}`}
        currentIndex={currentIndex}
      >
        
        <NavIcon sx={{ fontSize: 30 }} />
      </ListItem> */}

      {nav.map((item) => (
        <ListItem
          className={`${classes.navIcon}  ${
            isActive === item.id ? classes.active : ''
          } `}
          onClick={() => setIsActive(item.id)}
        >
          <NavIcon sx={{ fontSize: 30 }} />
        </ListItem>
      ))}

      <Divider
        variant="middle"
        flexItem
        style={{ marginTop: '10px', marginBottom: '10px' }}
      />

      <ListItem className={classes.navIcon}>
        <PersonOutlinedIcon sx={{ fontSize: 30 }} />
      </ListItem>

      <ListItem className={classes.navIcon}>
        <LogoutOutlinedIcon sx={{ fontSize: 30 }} />
      </ListItem>
    </List>
  );
}

const nav = [
  {
    id: 1,
    name: 'HomePage',
    link: 'pizza3',
  },
  {
    id: 2,
    name: 'Category',
    link: 'pizza',
  },
  {
    id: 3,
    name: 'Menu',
    link: 'pizza1',
  },
  {
    id: 4,
    name: 'Sale',
    link: 'pizza2',
  },
];
