import styles from './styles.module.scss';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/shared/lib/hook';

export const DashboardHeader = () => {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  return (
    <header className={styles.header}>
      <h5 className={styles.heading}>AMONIC AIRLINES</h5>
      <div className={styles.buttonWrapper}>
        <Button variant="outlined" onClick={() => navigate('/home/addUser')}>
          Add user
        </Button>
        <Button variant="outlined" onClick={() => signOut(() => navigate('/login'))}>
          EXIT
        </Button>
      </div>
    </header>
  );
};
