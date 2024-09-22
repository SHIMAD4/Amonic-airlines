import styles from './styles.module.scss';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const DashboardFooter = () => {
  const navigate = useNavigate();

  return (
    <footer className={styles.footer}>
      <Button
        className={styles.button}
        variant="outlined"
        onClick={() => navigate('/home/editUser')}
      >
        Change Role
      </Button>
      <Button className={styles.button} variant="outlined">
        Enable/Disable login
      </Button>
    </footer>
  );
};
