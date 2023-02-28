import React from 'react';

export type HeadingProps = {
  children: React.ReactNode;
};

export type StatusProps = {
  status: 'loading' | 'error' | 'success';
};

export type Persons = {
  profile: {
    first: string;
    last: string;
  };
  profileList: Persons['profile'][];
};
