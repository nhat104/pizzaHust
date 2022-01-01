import BuyHistory from './BuyHistory';
import Buying from './Buying';
import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  tabs: {
    display: 'inline-block',
    margin: '20px 50px 40px 0',
    fontWeight: 500,
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      width: (p) => (p.active === 'active' ? '70%' : '0'),
      height: '1px',
      top: '27px',
      left: '4px',
      backgroundColor: '#000',
    },
    '&:hover': {
      cursor: 'pointer',
      color: '#ff3300',
    },
  },
});

function MyTab(props) {
  const { active, ...other } = props;
  const classes = useStyles(props);
  return <div className={classes.tabs} {...other} />;
}

export default function Order() {
  const [activeId, setActiveId] = useState(1);

  const onTabClick = (id) => {
    setActiveId(id);
  };

  return (
    <div>
      {tabBuys.map((tab) => (
        <MyTab
          key={tab.id}
          active={tab.id === activeId ? 'active' : ''}
          onClick={() => onTabClick(tab.id)}
        >
          {tab.name}
        </MyTab>
      ))}
      <div>
        {tabBuys.map((tab) => (tab.id === activeId ? tab.component : null))}
      </div>
    </div>
  );
}

const tabBuys = [
  {
    id: 1,
    name: 'Lịch sử mua hàng',
    component: <BuyHistory />,
  },
  {
    id: 2,
    name: 'Đang giao',
    component: <Buying />,
  },
];
