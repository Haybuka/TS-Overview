import React from 'react';
import Heading from './Heading';
import Person from './Person';
import Status from './Status';
const Basics = () => {
  const profileList = [
    { first: 'Bruce', last: 'wayne' },
    { first: 'Clark', last: 'Kent' },
  ];
  return (
    <div>
      <Heading>This are the Basic Types</Heading>
      <Heading>
        <p>This here use type guards :</p>
        <Status status="success" />
      </Heading>
      <Heading>
        <p>This uses array,object and string types</p>
        <Person profileList={profileList} profile={profileList[0]} />
      </Heading>
    </div>
  );
};

export default Basics;
