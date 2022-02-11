import { FormControl, FormHelperText, MenuItem, Select } from '@mui/material';
import React from 'react';
import { useController } from 'react-hook-form';
import useStyles from './styles';

export default function SelectField({ name, control, label, options }) {
  const classes = useStyles();

  const {
    field: { value, onChange, onBlur },
    fieldState: { invalid, error },
  } = useController({ name, control });

  // console.log(value)

  return (
    <FormControl
      className={classes.root}
      fullWidth
      value={value}
      label={label}
      variant="outlined"
      margin="dense"
      size="small"
      error={invalid}
    >
      <Select onChange={onChange} onBlur={onBlur}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
        <FormHelperText>{error?.message}</FormHelperText>
      </Select>
    </FormControl>
  );
}
