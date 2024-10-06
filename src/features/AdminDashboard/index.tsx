import styles from './styles.module.scss';
import { DashboardHeader, DashboardFooter } from '@/shared/ui/atoms';
import { AdminDashboardBody } from '@/shared/ui/molecules';
import { useAppDispatch } from '@/shared/lib/hooks';
import { API } from '@/shared/api';
import { handleSaveUsers } from '@/shared/lib/slices/userSlice.tsx';
import { useEffect } from 'react';

function AdminDashboard() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    API.userBlock.getUsers().then(({ data }) => {
      dispatch(handleSaveUsers({ users: data }));
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      <DashboardHeader />
      <AdminDashboardBody />
      <DashboardFooter />
    </div>
  );
}

export default AdminDashboard;
