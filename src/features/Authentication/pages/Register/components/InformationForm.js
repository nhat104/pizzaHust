import { Alert, Box, Snackbar } from '@mui/material';
import AuthButton from 'components/AuthButton';
import InputField from 'components/FormFields/InputField';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const regex = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
const schema = yup.object({
  fullname: yup.string().required('Please enter your full name.'),
  phone: yup
    .string()
    .required('Please enter your phone number')
    .matches(regex, 'Invalid phone number'),
  address: yup.string().required('Please enter your address.'),
  dateOfBirth: yup.string().required('Please enter your date of birth.'),
});

export default function InformationForm({ onSubmit }) {
  const [error, setError] = useState('');

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = (values) => {
    try {
      onSubmit?.(values);
    } catch (error) {
      setError(error.message);
    }
  };

  function handleClose() {
    setError('');
  }
  return (
    <Box>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Box>Họ và tên</Box>
        <InputField name="fullname" control={control} />
        <Box sx={{ mt: 2 }}>Số điện thoại</Box>
        <InputField name="phone" control={control} />
        <Box sx={{ mt: 2 }}>Địa chỉ</Box>
        <InputField name="address" control={control} />
        <Box sx={{ mt: 2 }}>Ngày sinh</Box>
        <InputField name="dateOfBirth" type="date" control={control} />
        <AuthButton name="Chấp nhận" />
      </form>
      <Snackbar
        open={error ? true : false}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Alert onClose={handleClose} severity="error">
          {error}
        </Alert>
      </Snackbar>
    </Box>
  );
}
