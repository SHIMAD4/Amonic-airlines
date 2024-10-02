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

// TODO: MOCK DATA убрать
const rows = [
  {
    id: 1,
    avatar: 'avatar',
    name: 'Prabodhan',
    lastname: 'Fitzgerald',
    age: 33,
    role: 'Administator',
    email: 'name@email.com',
    office: 'Cell',
  },
  {
    id: 2,
    avatar: 'avatar',
    name: 'Jefferson',
    lastname: 'Lloyd',
    age: 44,
    role: 'Administator',
    email: 'name@email.com',
    office: 'Cell',
  },
  {
    id: 3,
    avatar: 'avatar',
    name: 'Mayo',
    lastname: 'Ceiran',
    age: 29,
    role: 'office user',
    email: 'name@email.com',
    office: 'Cell',
  },
  {
    id: 4,
    avatar: 'avatar',
    name: 'James',
    lastname: 'Thumbiko',
    age: 55,
    role: 'office user',
    email: 'name@email.com',
    office: 'Cell',
  },
];

// TODO: Добавить цвет для строк по опциям
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
              <TableRow key={row.id} onClick={() => console.log(row.id)}>
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
