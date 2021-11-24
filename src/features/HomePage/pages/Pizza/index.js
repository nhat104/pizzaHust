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
      <PizzaItem />
      <PizzaItem />
      <PizzaItem />
      <PizzaItem />
    </div>
  );
}
