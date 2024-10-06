import styles from './styles.module.scss';
import { DashboardHeader } from '@/shared/ui/atoms';
import { UserDashboardBody } from '@/shared/ui/molecules';
// import { useAppDispatch } from '@/shared/lib/hooks';
// import { API } from '@/shared/api';
// import { handleSaveUsers } from '@/shared/lib/slices/userSlice.tsx';
import { useEffect } from 'react';

function UserDashboard() {
  // const dispatch = useAppDispatch();

  useEffect(() => {
    // TODO: Исправить на получение данных сессий (Жду от бэка)
    // API.userBlock.getUsers().then(({ data }) => {
    //   dispatch(handleSaveUsers({ users: data }));
    // });
  }, []);

  return (
    <div className={styles.wrapper}>
      <DashboardHeader />
      <UserDashboardBody />
    </div>
  );
}

export default UserDashboard;
