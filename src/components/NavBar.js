import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import * as React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: '0 30px 0 0',
    backgroundColor: '#fff',
    position: 'fixed !important',
    width: '8.3333%',
    // height: '100vh',

    '& li': {
      justifyContent: 'center',
      margin: '12px 0',
      height: '46px',
      width: '46px',
      cursor: 'pointer',
      borderRadius: '12px',
      boxShadow:
        '4px 4px 4px rgba(156, 156, 156, 0.1), -2px -2px 4px rgba(208, 208, 208, 0.15)',
    },
  },

  icon: {
    opacity: 0.4,
  },
});

export default function NavBar() {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root}>
      <ListItem>
        <HomeOutlinedIcon sx={{ fontSize: 30 }} />
      </ListItem>
      <ListItem>
        <HomeOutlinedIcon sx={{ fontSize: 30 }} />
      </ListItem>
      <ListItem>
        <HomeOutlinedIcon sx={{ fontSize: 30 }} />
      </ListItem>
      <ListItem>
        <HomeOutlinedIcon sx={{ fontSize: 30 }} />
      </ListItem>
      <Divider variant="middle" flexItem />
      <ListItem>
        <PersonOutlinedIcon sx={{ fontSize: 30 }} />
      </ListItem>
      <ListItem>
        <LogoutOutlinedIcon sx={{ fontSize: 30 }} />
      </ListItem>
    </List>
  );
}
