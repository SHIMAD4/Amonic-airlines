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
import { getAgeFromBirthDate } from '@/shared/lib/utils';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import { handleRowClick } from '@/shared/lib/slices/tableSlice.tsx';
import { handleFilterUsersById } from '@/shared/lib/slices/userSlice.tsx';
import { useEffect } from 'react';

// TODO: Добавить цвет для строк по активный/неактивный
// TODO: Нужно добавить вывод роли (Жду от бэка)
export const DashboardTable = () => {
  const dispatch = useAppDispatch();
  const { selectedUserId } = useAppSelector((state) => state.tableSlice);
  const { users, filteredUsers } = useAppSelector((state) => state.userSlice);

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
            {filteredUsers.map((row) => (
              <TableRow
                key={row.id}
                className={selectedUserId === row.id ? styles.selectedRow : null}
                onClick={() => {
                  dispatch(handleRowClick({ id: row.id }));
                  dispatch(handleFilterUsersById({ users: users, selectedId: row.id }));
                }}
              >
                <TableCell>{row.first_name}</TableCell>
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
