import PizzaItem from 'features/HomePage/components/PizzaItem';
import React from 'react';
import { makeStyles } from '@mui/styles';

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
    id: 1,
    urlImg: 'pizza.png 2x',
    name: 'Pizza Hải Sản Đào',
    quantity: 1,
    rating: 5,
    cost: 69000,
    desc: '',
  },
  {
    id: 2,
    urlImg: 'pizza.png 2x',
    name: 'Pizza Hải Sản Đào 2',
    quantity: 1,
    rating: 5,
    cost: 69000,
    desc: '',
  },
  {
    id: 3,
    urlImg: 'pizza.png 2x',
    name: 'Pizza Hải Sản Đào 3',
    quantity: 1,
    rating: 5,
    cost: 69000,
    desc: '',
  },
  {
    id: 4,
    urlImg: 'pizza.png 2x',
    name: 'Pizza Hải Sản Đào',
    quantity: 1,
    rating: 5,
    cost: 69000,
    desc: '',
  },
];
