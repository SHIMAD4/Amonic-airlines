import { createContext, useState } from 'react';
import { API } from '@/shared/api';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const signIn = (newUser, cb) => {
    const { email, password } = newUser;
    API.userBlock.userLogin(email, password).then(({ data }) => {
      localStorage.setItem('token', data);

      if (localStorage.getItem('token')) {
        cb();
      }
    });

    setUser(newUser);
  };

  // TODO: Сделать выход с отправкой id на endpoint: /logout
  const signOut = (cb) => {
    localStorage.removeItem('token');

    setUser(null);
    cb();
  };

  const value = { user, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
