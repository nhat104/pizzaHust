import React from 'react';
import './styleAccount.css';

export default function Account({ data }) {
  return (
    <div className="account-info">
      <h2 className="address-info">Thông tin tài khoản</h2>
      {data[0] && (
        <div>
          <span className="account-info__label">
            <div className="account-info__item">Họ Tên</div>
            <div className="account-info__item">Email</div>
            <div className="account-info__item">Số điện thoại</div>
            <div className="account-info__item">Mật khẩu</div>
          </span>
          <span className="account-info__value">
            <div className="account-info__item">{data[0].name}</div>
            <div className="account-info__item">{data[0].email}</div>
            <div className="account-info__item">{data[0].number_phone}</div>
            <div className="account-info__item">
              <input
                className="account-info__password"
                type="password"
                disabled
                value="123456"
              />
              <div className="account-info__item--text">Đổi mật khẩu</div>
            </div>
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
