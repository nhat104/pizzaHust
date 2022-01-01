import { makeStyles } from '@mui/styles';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '55px',
    fontSize: '18px',
    lineHeight: 22 / 18,
    fontWeight: 600,
    borderRadius: '46.5px',
    color: '#fff',
    border: 'none',
    backgroundColor: (props) => (props.disable ? '#bdbdbd' : '#FF8000'),
    cursor: (props) => (props.disable ? 'default' : 'pointer'),
  },
});

export default function Button({ name, disable }) {
  const classes = useStyles({ name, disable });
  const cart = useSelector((state) => state.cart.listProduct);
  const choose = useSelector((state) => state.cart.chooseProduct);
  const navigate = useNavigate();

  function handleClick() {
    if (Object.values(choose).length !== 0) {
    } else {
      if (cart.length === 0) {
      } else {
        navigate('/pay', { replace: true });
      }
    }
  }

  return (
    <button className={classes.root} onClick={handleClick}>
      {name}
    </button>
  );
}
