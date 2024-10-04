import { useContext } from 'react';
import { AuthContext } from '../hoc/AuthProvider.tsx';

export function useAuth() {
  return useContext(AuthContext);
}
