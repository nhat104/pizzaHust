import { Alert, Box, Snackbar } from '@mui/material';
import AuthButton from 'components/AuthButton';
import InputField from 'components/FormFields/InputField';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  fullname: yup
    .string()
    .required('Please enter your full name.')
    .test('two-words', 'Enter at least 2 words.', (value) => {
      if (!value) return true;
      const parts = value?.split(' ') || [];
      return parts.filter((x) => !!x).length >= 2;
    }),
  phone: yup
    .number()
    .positive('Invalid phone number.')
    .required('Please enter your phone.')
    .typeError('Invalid phone number.'),
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
        <Box sx={{ mt: 1 }}>Số điện thoại</Box>
        <InputField name="phone" control={control} />
        <Box sx={{ mt: 1 }}>Địa chỉ</Box>
        <InputField name="address" control={control} />
        <Box sx={{ mt: 1 }}>Ngày sinh</Box>
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
