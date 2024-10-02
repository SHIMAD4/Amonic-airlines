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
import { useEffect, useState } from 'react';
import { API } from '@/shared/api';
import { getAgeFromBirthDate } from '@/shared/lib/utils';
import { UserType } from '@/shared/types';

// TODO: Добавить цвет для строк по опциям
// TODO: Нужно добавить вывод роли (Жду от бэка)
// TODO: Нужно добавить вывод аватара (Жду от бэка)
// TODO: Нужно добавить выбор пользователя для редактирования
export const DashboardTable = () => {
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    API.tableBlock.getUsers().then(({ data }) => setUsers(data));
  }, []);

  return (
    <div className={styles.tableWrapper}>
      <TableContainer sx={{ maxHeight: 315 }} component={Paper}>
        <Table stickyHeader sx={{ minWidth: 650 }} aria-label="table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Lastname</TableCell>
              <TableCell>Age</TableCell>
              {/*<TableCell>User role</TableCell>*/}
              <TableCell>Email</TableCell>
              <TableCell>Office</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row) => (
              <TableRow key={row.id} onClick={() => console.log(row.id)}>
                <TableCell>
                  {/*<p>{row.avatar}</p>*/}
                  {row.first_name}
                </TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell>{getAgeFromBirthDate(row.birthdate)}</TableCell>
                {/*<TableCell>{row.role}</TableCell>*/}
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.office_id}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
