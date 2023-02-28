import React, { useState } from 'react';

type AuthUser = {
  name: string;
  email: string;
};
const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({
      name: 'Paschal',
      email: 'P@p.com',
    });
  };
  const handleLogout = () => {
    setUser({ name: '', email: '' });
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>Username is {user.name} </div>
      <div>Email is {user.email} </div>
    </div>
  );
};

export default User;
