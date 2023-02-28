import React from 'react';
type StatusProps = {
  status: 'loading' | 'error' | 'success';
};
const Status = ({ status }: StatusProps) => {
  let message: string;

  switch (status) {
    case 'loading':
      message = 'Loading';
      break;
    case 'success':
      message = 'Data fetched successfully';
      break;
    case 'error':
      message = 'Error Fetching Data';
      break;
    default:
      message = 'Not Found';
      break;
  }
  return (
    <div>
      <h4>Status : {message}</h4>
    </div>
  );
};

export default Status;
