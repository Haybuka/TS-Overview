import React from 'react';
import Button from './Button';

const Events = () => {
  return (
    <div>
      <Button handleClick={() => console.log('clicked')} />
    </div>
  );
};

export default Events;
