import { Navigate, Route, Routes } from 'react-router-dom';
import Index from '@/pages/LoginPage';
import { MainLayout } from '@/widgets/layouts';
import HomePage from '@/pages/HomePage.tsx';
import { RequireAuth } from '@/shared/lib/hoc/RequireAuth.tsx';
import { AuthProvider } from '@/shared/lib/hoc/AuthProvider.tsx';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="/login" element={<Index />} />
          <Route
            path="/home"
            element={
              <RequireAuth>
                <HomePage />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
