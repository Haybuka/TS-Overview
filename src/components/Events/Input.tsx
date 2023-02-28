import React from 'react';

type InputProps = {
  type: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};
const Input = ({ type, handleChange, value }: InputProps) => {
  return <input type={type} onChange={handleChange} value={value} />;
};

export default Input;
