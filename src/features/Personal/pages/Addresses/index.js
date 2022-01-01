import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import './styleAddAddress.css';
export default function Addresses({ data }) {
  const navigate = useNavigate();
  const [newData, setNewData] = useState({
    name: data[0].name,
    email: data[0].email,
    number_phone: data[0].number_phone,
    address: data[0].address,
  });

  const handleChangeData = (s) => {
    console.log(newData);
    var dataPost = {
      ...newData,
      pub_date: data[0].pub_date,
      user: data[0].user,
      image: null,
    };
    var url_post = data[0].url;
    fetch(url_post, {
      method: 'PUT', // thêm mới thì dùng post
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataPost), // chuyển dữ liệu object trên thành chuỗi json
    })
      .then((response) => response.json()) // chuyển kết quả trả về thành json object
      .then((data) => {
        // bạn có thể làm gì đó với kết quả cuối cùng này thì làm

        console.log('Success:', data); // ghi log kết quả hoàn thành
        alert('Thay doi thong tin thanh cong');
        setTimeout(() => {
          navigate('/home', { replace: true });
        }, 1000);
      })
      .catch((error) => {
        console.error('Error:', error); // ghi log nếu xảy ra lỗi
      });
  };

  return (
    <Grid container className="addresses">
      <Grid item xs={8}>
        <h2 className="add-address__text">Chỉnh sửa thông tin </h2>
        <div className="add-address">
          <p>Tên</p>
          <input
            className="add-address__input"
            type="text"
            placeholder={data[0].name}
            onChange={(e) => setNewData({ ...newData, name: e.target.value })}
          />
        </div>
        <div className="add-address">
          <p>Email</p>
          <input
            className="add-address__input"
            type="email"
            placeholder={data[0].email}
            onChange={(e) => setNewData({ ...newData, email: e.target.value })}
          />
        </div>
        <div className="add-address">
          <p>Số điện thoại</p>
          <input
            className="add-address__input"
            type="tel"
            placeholder={data[0].number_phone}
            onChange={(e) =>
              setNewData({ ...newData, number_phone: e.target.value })
            }
          />
        </div>
        <div className="add-address">
          <p>Địa chỉ</p>
          <input
            className="add-address__input"
            type="text"
            placeholder={data[0].address}
            onChange={(e) =>
              setNewData({ ...newData, address: e.target.value })
            }
          />
        </div>
        {/* <input className="add-address--checkbox" type="checkbox" /> */}
        {/* <span>Đặt làm địa chỉ mặc định</span> */}
        <button
          className="add-address--button"
          onClick={(e) => handleChangeData()}
        >
          Chỉnh sửa
        </button>
      </Grid>
    </Grid>
  );
}

// const addresses = [
//   {
//     id: 1,
//     name: '',
//     type: '',
//     phone: '',
//     address: '',
//     isDefault: true,
//   },
//   {
//     id: 2,
//     name: '',
//     type: '',
//     phone: '',
//     address: '',
//     isDefault: false,
//   },
// ];
