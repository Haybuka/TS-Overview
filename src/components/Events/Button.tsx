import React from 'react';
import { ButtonProps } from './Form.types';

const Button = ({ handleClick }: ButtonProps) => {
  return <button onClick={(event) => handleClick(event, 1)}>Click</button>;
};

export default Button;
