import React from 'react';
import { Box } from '@mui/material';
import { useStyles } from './styles';

export default function TaskBarItem({ item, onTabClick, activeId }) {
  const isActive = item.id === activeId;
  const classes = useStyles({ isActive });

  return (
    <Box className={classes.item} onClick={() => onTabClick(item.id)}>
      <div className={classes.circle}>
        {item.img}
      </div>
      <p>{item.name}</p>
      <span className={classes.arrow}>
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="8.5" cy="8.5" r="8.5" fill="#FF8001" />
          <path d="M7 5L11 8.5L7 12" stroke="white" strokeLinecap="round" />
        </svg>
      </span>
    </Box>
  );
}
