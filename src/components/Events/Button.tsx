import React from 'react';
type ButtonProps = {
  //for function that do not have a return, and sends up a value
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};
const Button = ({ handleClick }: ButtonProps) => {
  return <button onClick={(event) => handleClick(event, 1)}>Click</button>;
};

export default Button;
