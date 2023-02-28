import React from 'react';
import { HeadingProps } from './Basics.type';

const Heading = (props: HeadingProps) => {
  return <h1>{props.children}</h1>;
};

export default Heading;
