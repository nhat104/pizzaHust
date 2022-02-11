import BuyHistory from './BuyHistory';
import Buying from './Buying';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { turnOffBuySuccess } from 'features/Slice';

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

export default function Order({ user }) {
  const buySuccess = useSelector((state) => state.cart.buySuccess);
  const [activeId, setActiveId] = useState(buySuccess ? 2 : 1);
  const [cartHistory, setCartHistory] = useState([]);
  const [cartContinue, setCartContinue] = useState([]);
  const dispatch = useDispatch();

  const api = `http://127.0.0.1:8000/cart/?user__username=${user}`;
  useEffect(() => {
    async function getData() {
      const response = await fetch(api);
      const responseJSON = await response.json();
      const resCartHistory = await responseJSON[0].cart.filter(
        (cart) => cart.delive === 'Hoan thanh'
      );
      const resCartContinue = await responseJSON[0].cart.filter(
        (cart) => cart.delive !== 'Hoan thanh' && cart.delive !== 'Huy'
      );
      setCartHistory(resCartHistory);
      setCartContinue(resCartContinue);
    }
    getData();
  }, [api]);

  useEffect(() => {
    dispatch(turnOffBuySuccess());
  }, [dispatch]);

  const onTabClick = (id) => {
    setActiveId(id);
  };

  const tabBuys = [
    {
      id: 1,
      name: 'Lịch sử mua hàng',
      component: <BuyHistory cartHistory={cartHistory} />,
    },
    {
      id: 2,
      name: 'Đang giao',
      component: <Buying cartContinue={cartContinue} />,
    },
  ];

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
        {tabBuys.map((tab) => (
          <div key={tab.id}>{tab.id === activeId ? tab.component : null}</div>
        ))}
      </div>
    </div>
  );
}
