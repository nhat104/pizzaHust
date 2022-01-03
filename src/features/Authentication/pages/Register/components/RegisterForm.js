import { Alert, Box, Snackbar } from '@mui/material';
import AuthButton from 'components/AuthButton';
import InputField from 'components/FormFields/InputField';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  username: yup.string().required('Please enter username.'),
  email: yup.string().email('Invalid email.').required('Please enter email.'),
  password: yup
    .string()
    .min(6, 'Least 6 characters')
    .required('Please enter password.'),
  rePassword: yup
    .string()
    .oneOf([yup.ref('password')], "Password doesn't match.")
    .required('Please confirm password.'),
});

export default function RegisterForm({ onSubmit }) {
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
        <Box>Tên đăng nhập</Box>
        <InputField name="username" control={control} />
        <Box sx={{ mt: 2 }}>Email</Box>
        <InputField name="email" control={control} />
        <Box sx={{ mt: 2 }}>Mật khẩu</Box>
        <InputField
          name="password"
          type="password"
          placeholder="6+ characters"
          control={control}
        />
        <Box sx={{ mt: 2 }}>Xác nhận mật khẩu</Box>
        <InputField name="rePassword" type="password" control={control} />
        <AuthButton name="Đăng ký" />
      </form>
      <Snackbar
        open={error ? true : false}
        autoHideDuration={3000}
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
