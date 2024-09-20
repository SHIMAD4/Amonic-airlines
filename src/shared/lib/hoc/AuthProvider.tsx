import { createContext, useState } from 'react';

export const AuthContext = createContext({});

// TODO: Исправить поведение входа и выхода пользователя
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const signIn = (newUser, cb) => {
    setUser(newUser);
    cb();
  };

  const signOut = (cb) => {
    setUser(null);
    cb();
  };

  const value = { user, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
