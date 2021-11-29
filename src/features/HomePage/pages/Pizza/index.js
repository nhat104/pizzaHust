import PizzaItem from 'features/HomePage/components/PizzaItem';
import React from 'react';
import { makeStyles } from '@mui/styles';
import { v4 } from 'uuid';

const useStyles = makeStyles({
  root: {
    marginTop: '100px',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gridGap: '20px',
  },
});

export default function Pizza() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {pizzaList.map((item) => (
        <PizzaItem key={item.id} item={item} />
      ))}
      <PizzaItem item={pizzaList[2]} />
    </div>
  );
}

const pizzaList = [
  {
    id: v4(),
    srcImg: 'pizza.png',
    name: 'Pizza Hải Sản Đào',
    quantity: 1,
    rating: 5,
    cost: 69000,
    desc: '',
  },
  {
    id: v4(),
    srcImg: 'pizza.png',
    name: 'Pizza Hải Sản Đào 2',
    quantity: 1,
    rating: 5,
    cost: 69000,
    desc: '',
  },
  {
    id: v4(),
    srcImg: 'pizza.png',
    name: 'Pizza Hải Sản Đào 3',
    quantity: 1,
    rating: 5,
    cost: 69000,
    desc: '',
  },
  {
    id: v4(),
    srcImg: 'pizza.png',
    name: 'Pizza Hải Sản Đào',
    quantity: 1,
    rating: 5,
    cost: 69000,
    desc: '',
  },
];
