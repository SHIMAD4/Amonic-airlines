import styles from './styles.module.scss';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '@/shared/lib/hooks';

export const DashboardFooter = () => {
  const navigate = useNavigate();
  const { selectedUserId } = useAppSelector((state) => state.tableSlice);

  return (
    <footer className={styles.footer}>
      <Button
        className={styles.button}
        variant="outlined"
        onClick={() => navigate('/home/editUser')}
        disabled={selectedUserId === 0}
      >
        Change Role
      </Button>
      <Button className={styles.button} variant="outlined">
        Enable/Disable login
      </Button>
    </footer>
  );
};
