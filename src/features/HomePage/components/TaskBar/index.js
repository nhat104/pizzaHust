import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import TaskBarItem from '../TaskBarItem';

const useStyles = makeStyles({
  root: {},
  body: {
    marginTop: '20px',
    '& > span': {
      fontSize: '18px',
      fontWeight: 700,
      lineHeight: '22px',
    },
  },

  category: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '22px',
  },
});

export default function TaskBar({ categories, onTabClick, activeId, title }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.body}>
        <span id="category">{title}</span>
        <Box className={classes.category}>
          {categories.map((item) => (
            <TaskBarItem
              key={item.id}
              item={item}
              activeId={activeId}
              onTabClick={onTabClick}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
