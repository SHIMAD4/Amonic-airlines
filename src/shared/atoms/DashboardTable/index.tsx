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

function createData(
  id: number,
  avatar: string,
  name: string,
  lastname: string,
  age: number,
  role: string,
  email: string,
  office: string,
) {
  return { id, avatar, name, lastname, age, role, email, office };
}

// TODO: MOCK DATA убрать
const rows = [
  createData(1, 'avatar', 'Prabodhan', 'Fitzgerald', 33, 'Administator', 'name@email.com', 'Cell'),
  createData(2, 'avatar', 'Jefferson', 'Lloyd', 44, 'Administator', 'name@email.com', 'Cell'),
  createData(3, 'avatar', 'Mayo', 'Ceiran', 29, 'office user', 'name@email.com', 'Cell'),
  createData(4, 'avatar', 'James', 'Thumbiko', 55, 'office user', 'name@email.com', 'Cell'),
];

export const DashboardTable = () => {
  return (
    <div className={styles.tableWrapper}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Lastname</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>User role</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Office</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* TODO: Добавить подсветку строк */}
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <p>{row.avatar}</p>
                  {row.name}
                </TableCell>
                <TableCell>{row.lastname}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.office}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
