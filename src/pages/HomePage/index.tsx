import AdminDashboard from '@/features/AdminDashboard';
import UserDashboard from '@/features/UserDashboard';
import { useAppSelector } from '@/shared/lib/hooks';
import { UsersRoles } from '@/shared/lib/types/user.tsx';

function HomePage() {
  const { userRole } = useAppSelector((state) => state.userSlice);

  return userRole === UsersRoles.ADMIN ? <AdminDashboard /> : <UserDashboard />;
}

export default HomePage;
