import { TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { useController } from 'react-hook-form';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    '& input::placeholder': {
      fontFamily: 'Montserrat',
      fontSize: '14px',
    },
    '& .MuiOutlinedInput-root': {
      // '&:hover fieldset': {
      //   borderColor: 'white',
      // },
      '&.Mui-focused fieldset': {
        borderColor: '#FF8000',
      },
    },
    '& .css-k4qjio-MuiFormHelperText-root.Mui-error': {
      position: 'absolute',
      color: '#FF8000',
      bottom: '-22px',
    },
  },
});

export default function InputField({
  name,
  control,
  placeholder,
  type,
  ...inputProps
}) {
  const classes = useStyles();

  const {
    field: { onChange, onBlur, ref },
    fieldState: { invalid, error },
  } = useController({ name, control });

  return (
    <TextField
      className={classes.root}
      variant="outlined"
      size="small"
      fullWidth
      margin="dense"
      type={type || 'text'}
      onChange={onChange}
      onBlur={onBlur}
      inputRef={ref}
      error={invalid}
      helperText={error?.message}
      placeholder={placeholder}
      inputProps={inputProps}
    />
  );
}
