import { useEffect, useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import styles from './styles.module.scss';
import { API } from '@/shared/api';
import { OfficeType } from '@/shared/lib/types';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import { handleFilterUsersByOffice } from '@/shared/lib/slices/userSlice.tsx';

export const AttributeSelect = () => {
  const dispatch = useAppDispatch();
  const [offices, setOffices] = useState<OfficeType[]>([]);
  const [selectedOffice, setSelectedOffice] = useState('All');
  const { users } = useAppSelector((state) => state.userSlice);

  const handleChange = (event) => {
    setSelectedOffice(event.target.value);
    dispatch(handleFilterUsersByOffice({ users: users, selectedOffice: event.target.value }));
  };

  useEffect(() => {
    API.userBlock.getOffices().then(({ data }) => setOffices(data));
  }, []);

  return (
    <div className={styles.select}>
      <FormControl className={styles.selectFormControl} variant="outlined">
        <InputLabel id="select-label">Attribute</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={selectedOffice}
          label="Attribute"
          onChange={handleChange}
        >
          <MenuItem value="All">All offices</MenuItem>
          {offices.map((office) => (
            <MenuItem value={office.title}>{office.title}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
