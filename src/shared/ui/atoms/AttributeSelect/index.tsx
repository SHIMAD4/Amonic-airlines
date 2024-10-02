import { useEffect, useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import styles from './styles.module.scss';
import { API } from '@/shared/api';
import { OfficeType } from '@/shared/types';

export const AttributeSelect = () => {
  const [offices, setOffices] = useState<OfficeType[]>([]);
  const [value, setValue] = useState('All');

  // TODO: Добавить логику сортировки таблицы
  const handleChange = (event) => {
    setValue(event.target.value);
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
          value={value}
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
