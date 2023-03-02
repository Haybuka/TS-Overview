import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const User = () => {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    userContext.setUser({
      name: 'Paschal',
      email: 'mails',
    });
  };
  const handleLogout = () => {
    userContext.setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <p>username is {userContext.user?.name}</p>
      <p>email is</p>
    </div>
  );
};

export default User;
