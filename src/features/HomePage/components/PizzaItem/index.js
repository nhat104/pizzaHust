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
    boxShadow:
      '4px 4px 4px rgba(255, 128, 1, 0.25), -2px -2px 4px rgba(208, 208, 208, 0.15)',
    transition: 'all 0.2s ease-in-out',

    '& img': {
      alignSelf: 'center',
      marginTop: '-70px',
    },

    '&:hover': {
      '& img': {
        transform: 'scale(1.2) rotate(20deg)',
        transition: '0.5s',
      },
      '& p': {
        color: '#ff8000',
      },
    },

    '& p': {
      margin: 0,
      fontSize: '16px',
      display: 'WebkitBox',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: '2',
      maxHeight: '4rem',
      minHeight: '2.4rem',
      fontWeight: 600,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      textAlign: 'left',
    },
    '& Fab': {
      backgroundColor: '#ff8000',
    },
  },

  body: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  text: {},
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
        // src={process.env.PUBLIC_URL + `${item.srcImg}`}
        srcSet={process.env.PUBLIC_URL + `${item.srcImg} 2x`}
        alt=""
      />
      <p>{item.name}</p>
      <div className={classes.body}>
        <div>
          <Rating readOnly defaultValue={item.rating} size="small" />
          <p>{item.cost}đ</p>
        </div>
        <Fab
          size="small"
          onClick={handleAddClick}
          style={{ backgroundColor: '#ff8000' }}
        >
          <AddIcon style={{ fill: '#fff' }} />
        </Fab>
      </div>
    </div>
  );
}
