import styles from './styles.module.scss';
import { DashboardHeader, DashboardFooter } from '@/shared/atoms';
import { DashboardBody } from '@/shared/molecules';

function AdminDashboard() {
  return (
    <div className={styles.wrapper}>
      <DashboardHeader />
      <DashboardBody />
      <DashboardFooter />
    </div>
  );
}

export default AdminDashboard;
