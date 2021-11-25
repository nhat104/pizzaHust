import AddIcon from '@mui/icons-material/Add';
import { Fab, Rating } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { chooseProduct } from 'features/Slice';
import React from 'react';
import { useDispatch } from 'react-redux';

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

export default function PizzaItem({ item }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  function handleAddClick() {
    dispatch(chooseProduct(item));
  }

  return (
    <div className={classes.root}>
      <img
        src={process.env.PUBLIC_URL + `${item.srcImg}`}
        srcSet={process.env.PUBLIC_URL + `${item.srcImg} 2x`}
        alt=""
      />
      <p>{item.name}</p>
      <div className={classes.body}>
        <div>
          <Rating defaultValue={item.rating} size="small" />
          <p>{item.cost}đ</p>
        </div>
        <Fab size="small" onClick={handleAddClick}>
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
}
