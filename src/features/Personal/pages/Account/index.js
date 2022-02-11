import React, { useState } from 'react';
import './styleAccount.css';

export default function Account({ data }) {
  const [changePass, setChangePass] = useState(false);
  const togglePassword = () =>{
    setChangePass(e=>!e)
  }
  return (
    <div className="account-info">
      <h2 className="address-info">Thông tin tài khoản</h2>
      {data && (
        <div>
          <span className="account-info__label">
            <div className="account-info__item">Họ Tên</div>
            <div className="account-info__item">Email</div>
            <div className="account-info__item">Số điện thoại</div>
            {/* <div className="account-info__item">Mật khẩu</div>
            <div className="account-info__item">Mật khẩu mới</div> */}
          </span>
          <span className="account-info__value">
            <div className="account-info__item">{data.name}</div>
            <div className="account-info__item">{data.email}</div>
            <div className="account-info__item">{data.number_phone}</div>
            {/* <div className="account-info__item">
              <input
                className="account-info__password"
                type="password"
                disabled={!changePass}
                value="123456"
              />
              <div className="account-info__item--text" onClick={togglePassword}>Đổi mật khẩu</div>
            </div>
            <div className="account-info__item">
              <input
                className="account-info__password"
                type="password"
                disabled={!changePass}
                value="123456"
              />
              <button className="account-info__item--text">Đồng ý đổi mật khẩu</button>
            </div> */}
          </span>
        </div>
      )}
    </div>
  );
}

// const account = {
//   user: '',
//   fullName: '',
//   email: '',
//   phone: '',
//   password: '',
// };
