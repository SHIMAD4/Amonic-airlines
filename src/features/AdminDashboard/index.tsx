import styles from './styles.module.scss';
import { DashboardHeader, DashboardFooter } from '@/shared/ui/atoms';
import { DashboardBody } from '@/shared/ui/molecules';

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
