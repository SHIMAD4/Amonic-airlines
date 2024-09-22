import { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import styles from './styles.module.scss';

export const AttributeSelect = () => {
  const [value, setValue] = useState(10);

  // TODO: Добавить логику сортировки таблицы
  const handleChange = (event) => {
    setValue(event.target.value);
  };

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
          <MenuItem value={10}>All offices</MenuItem>
          <MenuItem value={20}>Cell</MenuItem>
          <MenuItem value={30}>Alabama</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
