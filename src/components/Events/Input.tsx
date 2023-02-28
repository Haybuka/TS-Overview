import React from 'react';
import { InputProps } from './Form.types';

const Input = ({ type, handleChange, value }: InputProps) => {
  return <input type={type} onChange={handleChange} value={value} />;
};

export default Input;
