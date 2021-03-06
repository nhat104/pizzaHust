import React, { useState } from 'react';
import ProductItem from '../ProductItem';
import { Box, Rating, Button, Snackbar, Alert } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#fff',
    boxSizing: 'border-box',
    padding: '20px 10px',
    borderRadius: '40px',
  },

  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
  },

  fee: {
    textAlign: 'end',
    marginTop: '20px',
    '& > span:first-child': {
      fontSize: '18px',
      paddingRight: '60px',
      fontWeight: 700,
    },
    '& > span:last-child': {
      fontSize: '16px',
      fontWeight: 700,
      '& span': {
        color: '#ff8000',
        margin: '0 28px 0 4px',
      },
    },
  },

  rate: {
    display: 'flex',
    alignItems: 'center',
    margin: '10px 0 10px 20px',
    '& > span': {
      fontWeight: 600,
      marginRight: '10px',
    },
    '& button, & button:hover': {
      backgroundColor: '#ff8000',
    },
  },
});

export default function ProductList({
  orderpizza,
  orderside,
  cost_fields,
  isHistory,
  list,
}) {
  const classes = useStyles();
  const [isReadOnly, setIsReadOnly] = useState(false);
  const [rateValue, setRateValue] = useState(0);
  const [openNoti, setOpenNoti] = useState(false);
  // const [total, setTotal] = useState(0);
  const ratingPizza = 'http://127.0.0.1:8000/scorepiza/';
  const ratingSide = 'http://127.0.0.1:8000/scoreside/';

  // console.log(orderpizza);
  // console.log(orderside);
  // console.log(list);

  const handleRateClick = () => {
    // console.log(rateValue);
    orderpizza.map((item) => {
      const api = ratingPizza;
      var e = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pizza: item.pizaa,
          score: rateValue,
        }),
      };
      fetch(api, e)
        .then((res) => {
          console.log(123);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    });
    orderside.map((item) => {
      const api = ratingSide;
      var e = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          side: item.sidess,
          score: rateValue,
        }),
      };
      fetch(api, e)
        .then((res) => {
          console.log(345);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    });
    var dataPost = {
      ...list,
      rating: rateValue,
    };
    var url_post = 'http://127.0.0.1:8000/order/' + list.pk + '/';
    fetch(url_post, {
      method: 'PUT', // th??m m???i th?? d??ng post
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataPost), // chuy???n d??? li???u object tr??n th??nh chu???i json
    })
      .then((response) => response.json()) // chuy???n k???t qu??? tr??? v??? th??nh json object
      .then((data) => {
        // b???n c?? th??? l??m g?? ???? v???i k???t qu??? cu???i c??ng n??y th?? l??m
      })
      .catch((error) => {
        console.error('Error:', error); // ghi log n???u x???y ra l???i
      });
    setOpenNoti(true);
    setIsReadOnly(true);
    // isHistory = true;
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenNoti(false);
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.list}>
        {orderpizza.map((item) => (
          <ProductItem key={item.pk} item={item} />
        ))}
        {orderside.map((item) => (
          <ProductItem key={item.pk} item={item} />
        ))}
      </Box>
      <Box className={classes.fee}>
        <span>T???ng thanh to??n</span>
        <span>
          {cost_fields + 22000}
          <span>??</span>
        </span>
      </Box>
      <Box
        className={classes.rate}
        sx={{ display: isHistory ? 'flex' : 'none' }}
      >
        <span>????nh gi??: </span>
        <Rating
          readOnly={
            isHistory
              ? isReadOnly
                ? true
                : list.rating
              : true /* || n???u ???? ????nh gi?? */
          }
          value={rateValue === 0 ? list.rating : rateValue}
          onChange={(event, newValue) => {
            setRateValue(newValue);
          }}
        />
        {(isHistory
          ? isReadOnly
            ? false
            : !list.rating
          : false) /* && n???u ch??a ????nh gi?? */ && (
          <Button variant="contained" size="small" onClick={handleRateClick}>
            G???i ????nh Gi??
          </Button>
        )}
      </Box>
      <Box
        className={classes.rate}
        sx={{ display: isHistory ? 'none' : 'flex' }}
      >
        <span>Tr???ng th??i: {list.delive}</span>
      </Box>
      <Snackbar
        open={openNoti}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Alert onClose={handleClose} severity="success">
          C???m ??n ph???n h???i c???a b???n
        </Alert>
      </Snackbar>
    </Box>
  );
}
