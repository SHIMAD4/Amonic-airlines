import styles from './styles.module.scss';
import { Button } from '@mui/material';

export const DashboardFooter = () => {
  return (
    <footer className={styles.footer}>
      <Button className={styles.button} variant="outlined">
        Change Role
      </Button>
      <Button className={styles.button} variant="outlined">
        Enable/Disable login
      </Button>
    </footer>
  );
};
