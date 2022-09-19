import React from 'react';
import { TextField, OutlinedTextFieldProps } from '@mui/material';

export type InputFieldProps = OutlinedTextFieldProps;

export const InputField: React.FC<InputFieldProps> = (props) => {
  return <TextField {...props} variant="outlined" />;
};

export default InputField;
