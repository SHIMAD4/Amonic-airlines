import { TextField } from '@mui/material';

export const TextInput = ({ label, name, value, error, helperText, onChange }) => (
  <TextField
    label={label}
    variant="outlined"
    size="medium"
    name={name}
    value={value}
    error={Boolean(error)}
    helperText={helperText}
    onChange={onChange}
    fullWidth
    style={{
      width: '100%',
      marginBottom: '16px',
    }}
  />
);
