import styles from './styles.module.scss';
import { Button } from '@mui/material';

export const DashboardHeader = () => {
  return (
    <header className={styles.header}>
      <h5 className={styles.heading}>AMONIC AIRLINES</h5>
      <div className={styles.buttonWrapper}>
        {/* TODO: Добавить логику кнопкам */}
        <Button variant="outlined">Add user</Button>
        <Button variant="outlined">EXIT</Button>
      </div>
    </header>
  );
};
