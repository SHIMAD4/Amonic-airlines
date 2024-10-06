import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import styles from './styles.module.scss';

// TODO: Убрать моковые данные
const UserSessions = [
  {
    id: 1,
    date: '02/13/2024',
    loginTime: '17:15',
    logoutTime: '18:20',
    timeSpent: '1:05',
    logoutReason: null,
  },
  {
    id: 2,
    date: '03/13/2024',
    loginTime: '17:15',
    logoutTime: '18:20',
    timeSpent: '1:05',
    logoutReason: 'Power outage',
  },
  {
    id: 3,
    date: '04/13/2024',
    loginTime: '17:15',
    logoutTime: '18:20',
    timeSpent: '1:05',
    logoutReason: null,
  },
  {
    id: 4,
    date: '07/13/2024',
    loginTime: '17:15',
    logoutTime: '18:20',
    timeSpent: '1:05',
    logoutReason: null,
  },
  {
    id: 5,
    date: '01/13/2024',
    loginTime: '17:15',
    logoutTime: '18:20',
    timeSpent: '1:05',
    logoutReason: null,
  },
  {
    id: 6,
    date: '06/13/2024',
    loginTime: '17:15',
    logoutTime: '18:20',
    timeSpent: '1:05',
    logoutReason: null,
  },
];

export const UserDashboardTable = () => {
  return (
    <div className={styles.tableWrapper}>
      <TableContainer sx={{ maxHeight: 315 }} component={Paper}>
        <Table stickyHeader sx={{ minWidth: 650 }} aria-label="table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Login time</TableCell>
              <TableCell>Logout time</TableCell>
              <TableCell>Time spent on system</TableCell>
              <TableCell>Unsuccessful logout reason</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {UserSessions.map((row) => (
              <TableRow key={row.id} className={row.logoutReason ? styles.selectedRow : ''}>
                <TableCell sx={{ paddingInlineEnd: 15 }}>{row.date}</TableCell>
                <TableCell sx={{ paddingInlineEnd: 15 }}>{row.loginTime}</TableCell>
                <TableCell sx={{ paddingInlineEnd: 15 }}>{row.logoutTime}</TableCell>
                <TableCell sx={{ paddingInlineEnd: 15 }}>{row.timeSpent}</TableCell>
                <TableCell sx={{ paddingInlineEnd: 15 }}>{row.logoutReason}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
