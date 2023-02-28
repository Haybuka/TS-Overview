import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';

const Events = () => {
  const [change, setChange] = useState('');
  //type the function for button click
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ): void => {
    console.log(event, id);
  };

  //Type the onChange function
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setChange(event.target.value);
  };
  return (
    <div>
      <Button handleClick={handleClick} />
      {change}
      <Input type="text" handleChange={handleInputChange} value={change} />
    </div>
  );
};

export default Events;
