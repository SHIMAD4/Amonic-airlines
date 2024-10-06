import styles from './styles.module.scss';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAuth } from '@/shared/lib/hooks';
import { UsersRoles } from '@/shared/lib/types/user.tsx';

export const DashboardHeader = () => {
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const { userRole } = useAppSelector((state) => state.userSlice);

  return (
    <header className={styles.header}>
      <h5 className={styles.heading}>AMONIC AIRLINES</h5>
      <div className={styles.buttonWrapper}>
        {userRole === UsersRoles.ADMIN && (
          <Button variant="outlined" onClick={() => navigate('/home/addUser')}>
            Add user
          </Button>
        )}
        <Button variant="outlined" onClick={() => signOut(() => navigate('/login'))}>
          EXIT
        </Button>
      </div>
      {userRole === UsersRoles.USER && (
        <div className={styles.greeting}>
          <p>Hi, welcome</p>
          <p>Time spent on system</p>
          <p>Numbers of crash</p>
        </div>
      )}
    </header>
  );
};
