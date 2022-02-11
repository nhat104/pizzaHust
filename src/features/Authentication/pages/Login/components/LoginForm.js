import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@mui/material';
import AuthButton from 'components/AuthButton';
import InputField from 'components/FormFields/InputField';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup.object({
  username: yup.string().required('Please enter username.'),
  password: yup.string().required('Please enter password.'),
});

export default function LoginForm({ onSubmit }) {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = (values) => {
    onSubmit?.(values);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Box>Tên đăng nhập</Box>
        <InputField name="username" control={control} />
        <Box sx={{ mt: 3 }}>Mật khẩu</Box>
        <InputField name="password" type="password" control={control} />
        <AuthButton name="Đăng nhập" />
      </form>
    </Box>
  );
}
