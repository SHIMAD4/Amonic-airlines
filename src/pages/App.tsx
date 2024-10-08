import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from '@/pages/LoginPage';
import HomePage from '@/pages/HomePage';
import AddUserPage from '@/pages/AddUserPage';
import { MainLayout } from '@/widgets/layouts';
import { RequireAuth } from '@/shared/lib/hoc/RequireAuth.tsx';
import { AuthProvider } from '@/shared/lib/hoc/AuthProvider.tsx';
import EditUserPage from '@/pages/EditUserPage';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/home"
            element={
              <RequireAuth>
                <HomePage />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/home/addUser"
            element={
              <RequireAuth>
                <AddUserPage />
              </RequireAuth>
            }
          />
          <Route
            path="/home/editUser"
            element={
              <RequireAuth>
                <EditUserPage />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
