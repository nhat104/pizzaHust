import { Grid } from '@mui/material';
import NavBar from 'components/NavBar';
import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import Account from './pages/Account';
import Addresses from './pages/Addresses';
import Order from './pages/Order';
import './styles.css';

export default function Personal() {
  const [activeId, setActiveId] = useState(1);

  const onTabClick = (id) => {
    setActiveId(id);
  };

  const user = useSelector((state) => state.login.username);
  console.log(user);
  // API
  const [data, setData] = useState([]);
  const api = `http://127.0.0.1:8000/profile/?user__username=${user}`;
  useEffect(() => {
    async function getData() {
      const response = await fetch(api);
      const responseJSON = await response.json();
      setData(responseJSON);
    }
    getData();
  }, [api]);

  const tabs = [
    {
      id: 1,
      component: <Account data={data}/>,
    },
    {
      id: 2,
      component: <Order data={data}/>,
    },
    {
      id: 3,
      component: <Addresses data={data}/>,
    },
  ];
  

  return (
    <Grid container className="content">
      <Grid item xs={1}>
        <NavBar />
      </Grid>
      <Grid item className="user-tabs" xs={3}>
        <img
          className="user-tabs__img"
          srcSet={process.env.PUBLIC_URL + 'user.png'}
          alt=""
        />
        {/* <div>
          Hi, <span className="user-tabs__userName">{data[0].name}</span>
        </div> */}
        
          <div
            className="user-tabs__text"
            onClick={() => onTabClick(1)}
          >
            Thông tin tài khoản
          </div>

          <div
            className="user-tabs__text"
            onClick={() => onTabClick(2)}
          >
            Đơn hàng
          </div>

          <div
            className="user-tabs__text"
            onClick={() => onTabClick(3)}
          >
            Địa chỉ
          </div>
      </Grid>
      <Grid item xs={8}>
        <img
          className="header__img"
          srcSet={process.env.PUBLIC_URL + 'img/logo.png'}
          alt=""
        />
        <div className="user-main">
          {tabs.map((tab) => (tab.id === activeId ? tab.component : null))}
        </div>
      </Grid>
    </Grid>
  );
}

