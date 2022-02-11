import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, Box, Snackbar, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/styles';
import Button from 'components/Button';
import InputField from 'components/FormFields/InputField';
import { buyAllRequest } from 'features/Slice';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useStyles } from './styles';

const regex = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
const schema = yup.object({
  name: yup.string().required('Please enter your full name.'),
  number_phone: yup
    .string()
    .required('Please enter your phone number')
    .matches(regex, 'Invalid phone number'),
  email: yup.string().email('Invalid email.').required('Please enter email.'),
  address: yup.string().required('Please enter your address.'),
});

export default function UserForm({ data }) {
  console.log(data);
  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.up('tablet'));
  const classes = useStyles({ tablet });
  const [buySuccess, setBuySuccess] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.listProduct);
  const user = useSelector((state) => state.auth.username);

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      ...data,
      // phonenumber: data.number_phone
    },
  });

  // API
  const [dataCart, setDataCart] = useState([]);
  const apiCart = `http://127.0.0.1:8000/cart/?user__username=${user}`;
  useEffect(() => {
    async function getData() {
      const response = await fetch(apiCart);
      const responseJSON = await response.json();
      console.log(responseJSON);
      if (responseJSON.length === 1) {
        setDataCart(responseJSON);
      }
    }
    getData();
  }, [apiCart, user]);

  async function handleBuyBtn(values) {
    const dataToOrder = values;
    console.log('data to order', dataToOrder);
    const orderside = cart.filter((item) => item.type);
    const ordercombo = cart.filter((item) => item.numberperson);
    const orderpizza = cart.filter((item) => item.costl);
    console.log(orderside);
    console.log(ordercombo);
    console.log(orderpizza);
    let orderpizza1 = [];
    for (let item of orderpizza) {
      orderpizza1.push({
        order: 41, //
        size: item.size,
        soles: item.sole,
        topping: item.topping ? item.topping : null,
        pizaa: item.pk,
        pizzaa: item,
        comboorder: null,
        amount: item.quantity,
        // cost: item.cost,
        pecent: 0,
      });
    }
    // console.log(orderpizza1)

    let orderside1 = [];
    for (let item of orderside) {
      orderside1.push({
        order: 41, //
        sidess: item.pk,
        sidedis: item,
        amount: item.quantity,
        cost: item.cost,
        comboorder: null,
        pecent: 0,
      });
    }
    // console.log(orderside1)
    for (let item of ordercombo) {
      var percent = item.percent;
      for (let i of item.subProduct.filter((ite) => ite.costl)) {
        orderpizza1.push({
          order: 41, //
          size: 'M',
          soles: 'Mem xop',
          comboorder: item.pk,
          topping: null,
          pizaa: i.pk,
          pizzaa: i,
          amount: item.quantity,
          // "cost": i.cost,
          pecent: percent,
        });
      }
      for (let i of item.subProduct.filter((ite) => ite.type)) {
        orderside1.push({
          order: 41, //
          sidess: i.pk,
          comboorder: item.pk,
          sidedis: i,
          amount: item.quantity,
          cost: i.cost,
          pecent: percent,
        });
      }
    }
    console.log(orderpizza1);
    console.log(orderside1);

    var dataPost = {
      cart: dataCart.length === 1 ? dataCart[0].pk : null, //neu co tk mk thi them th nay vao
      name: dataToOrder.name,
      phonenumber: dataToOrder.number_phone,
      email: dataToOrder.email,
      address: dataToOrder.address,
      orderpizza: orderpizza1,
      orderside: orderside1,
      delive: 'Dang xac nhan',
      cost_fields: 20000,
    };
    var url_post = 'http://127.0.0.1:8000/order/';
    await fetch(url_post, {
      method: 'POST', // thêm mới thì dùng post
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataPost), // chuyển dữ liệu object trên thành chuỗi json
    })
      .then((response) => response.json()) // chuyển kết quả trả về thành json object
      .then((data) => {
        // bạn có thể làm gì đó với kết quả cuối cùng này thì làm

        dispatch(buyAllRequest());
        setBuySuccess(true);
        console.log('Success:', data); // ghi log kết quả hoàn thành
        setTimeout(() => {
          navigate('/success', { replace: true });
        }, 1000);
      })
      .catch((error) => {
        console.error('Error:', error); // ghi log nếu xảy ra lỗi
      });
  }

  function handleClose() {
    setBuySuccess(false);
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.logo}>
        <img srcSet={process.env.PUBLIC_URL + 'pizzaLogo.png 2x'} alt="" />
      </Box>
      <span>Thông tin thanh toán</span>
      <form className={classes.userForm} onSubmit={handleSubmit(handleBuyBtn)}>
        <Box className={classes.userForm}>
          <Box sx={{ mt: 2, mb: 2 }}>
            <InputField
              name="name"
              size="large"
              placeholder="Họ và tên"
              control={control}
            />
          </Box>
          <Box sx={{ mt: 2, mb: 2 }}>
            <InputField
              name="number_phone"
              size="large"
              placeholder="Số điện thoại"
              control={control}
            />
          </Box>
          <Box sx={{ mt: 2, mb: 2 }}>
            <InputField
              name="email"
              size="large"
              placeholder="Email"
              control={control}
            />
          </Box>
          <Box sx={{ mt: 2, mb: 2 }}>
            <InputField
              name="address"
              size="large"
              placeholder="Địa chỉ"
              control={control}
            />
          </Box>
        </Box>
        <Button type="submit" name="Mua hàng" />
      </form>

      <Snackbar
        open={buySuccess}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Buy Successfully! Thank you!
        </Alert>
      </Snackbar>
    </Box>
  );
}
