import React from 'react';

type Persons = {
  profile: {
    first: string;
    last: string;
  };
  profileList: Persons['profile'][];
};
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
