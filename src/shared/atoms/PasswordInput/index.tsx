import { useState } from 'react';
import {
  IconButton,
  InputAdornment,
  OutlinedInput,
  InputLabel,
  FormControl,
  FormHelperText,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export const PasswordInput = ({ label, name, value, error, helperText, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <FormControl
      variant="outlined"
      error={Boolean(error)}
      fullWidth
      style={{
        width: '100%',
        marginBottom: '32px',
      }}
    >
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <OutlinedInput
        id={name}
        name={name}
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label={`Toggle ${label}`} onClick={handleClickShowPassword} edge="end">
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label={label}
      />
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};
