import React from 'react';
type ButtonProps = {
  //for function that do not have a return, and takes
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
const Button = (props: ButtonProps) => {
  return <div>Button</div>;
};

export default Button;
