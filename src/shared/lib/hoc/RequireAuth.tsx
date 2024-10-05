import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.tsx';

export function RequireAuth({ children }) {
  const location = useLocation();
  const { user } = useAuth();

  if (!localStorage.getItem('token') && !user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}
