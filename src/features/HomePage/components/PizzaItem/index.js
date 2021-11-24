import React from 'react';
import { makeStyles } from '@mui/styles';
import { Fab, Rating } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const useStyles = makeStyles({
  root: {
    padding: '0 15px',
    borderRadius: '20px',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    marginBottom: '70px',

    '& img': {
      alignSelf: 'center',
      marginTop: '-70px',
    },

    '& p': {
      margin: '10px 0',
      fontSize: '14px',
      fontWeight: 600,
    },
  },

  body: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export default function PizzaItem() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img srcSet={process.env.PUBLIC_URL + 'pizza.png 2x'} alt="" />
      <p>Pizza Hải Sản Đào</p>
      <div className={classes.body}>
        <div>
          <Rating defaultValue={5} size="small" />
          <p>69.000đ</p>
        </div>
        <Fab size="small">
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
}
