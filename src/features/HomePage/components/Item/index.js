import AddIcon from '@mui/icons-material/Add';
import { Fab, Rating, Tooltip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ChooseProduct } from 'features/Slice';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
// import ListItem from '../ListItem';

const useStyles = makeStyles({
  root: {
    padding: '0 15px',
    borderRadius: '20px',
    backgroundColor: '#fff',
    display: 'flex',
    maxWidth: '282px',
    flexDirection: 'column',
    boxSizing: 'border-box',
    marginBottom: '70px',
    boxShadow:
      '4px 4px 4px rgba(255, 128, 1, 0.25), -2px -2px 4px rgba(208, 208, 208, 0.15)',
    transition: 'all 0.2s ease-in-out',

    '&:hover': {
      '& img': {
        transform: 'rotate(20deg)',
        transition: '0.5s',
      },
      '& p': {
        color: '#ff8000',
      },
    },

    '& p': {
      margin: 0,
      fontSize: '16px',
      display: '-webkit-box',
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

  image: {
    minHeight: '128px',
    marginTop: '-70px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& img': {
      width: '80%',
      transition: '.3s all ease-in-out!important',
    },
  },

  body: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export default function Item({ item }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [newItem, setNewItem] = useState({});
  const cost = useRef(0);

  useEffect(() => {
    // Nếu sản phẩm là Combo
    if (item.hasOwnProperty('numberperson')) {
      // Lấy sub product trong combo, tính giá của combo
      const subProduct = [];
      item.pizzaincombo.map(function (pizza) {
        const newItem = {
          ...pizza.pizza,
          id: v4(),
          itemsToChange: item.pizzas,
        };
        cost.current = cost.current + newItem.costm;
        subProduct.push(newItem);
        return 0;
      });
      item.sideincombo.map(function (side) {
        const newItem = {
          ...side.sidedishes,
          id: v4(),
          itemsToChange: side.sides,
        };
        cost.current = cost.current + newItem.cost;
        subProduct.push(newItem);
        return 0;
      });

      // console.log(item)
      cost.current = (cost.current * (100 - item.percent)) / 100;

      setNewItem({
        ...item,
        id: v4(),
        quantity: 1,
        cost: cost.current,
        subProduct,
      });
    } else {
      setNewItem({ ...item, id: v4() });
    }
  }, [item]);

  function handleAddClick() {
    if (item.hasOwnProperty('numberperson')) {
      dispatch(ChooseProduct(newItem));
    } else {
      dispatch(ChooseProduct(newItem));
    }
  }

  return (
    <div className={classes.root}>
      <div className={classes.image}>
        <img src={item.image} alt="" />
      </div>
      <p>{item.name}</p>
      <div className={classes.body}>
        <div>
          <Rating readOnly defaultValue={item.score_fields} size="small" />
          <p>
            {item.hasOwnProperty('numberperson') ? cost.current : item.cost}
            <span style={{ color: '#ff8000' }}> đ</span>
          </p>
        </div>
        <Tooltip title="Thêm vào giỏ">
          <Fab
            size="small"
            onClick={handleAddClick}
            style={{ backgroundColor: '#ff8000' }}
          >
            <AddIcon style={{ fill: '#fff' }} />
          </Fab>
        </Tooltip>
      </div>
    </div>
  );
}
