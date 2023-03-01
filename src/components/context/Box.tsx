import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Box = () => {
  const theme = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: theme.primary.main }}>Theme Context</div>
  );
};

export default Box;
