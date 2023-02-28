import React from 'react';
import { Persons } from './Basics.type';

function Person({ profileList }: Persons) {
  return (
    <div>
      {profileList.map((list) => (
        <p>
          {list.first} - {list.last}
        </p>
      ))}
    </div>
  );
}

export default Person;
