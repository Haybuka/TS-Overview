import React from 'react';

export type ButtonProps = {
  //for function that do not have a return, and sends up a value
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

export type InputProps = {
  type: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};
