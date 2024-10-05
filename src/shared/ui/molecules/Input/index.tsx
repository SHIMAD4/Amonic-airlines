import {
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from '@mui/material';
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
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export const Input = ({ variant = 'TextInput', ...rest }) => {
  switch (variant) {
    case 'PasswordInput':
      return <PasswordInput {...rest} />;
    case 'DateInput':
      return <DateInput {...rest} />;
    case 'SelectInput':
      return <SelectInput {...rest} />;
    case 'RadioInput':
      return <RadioInput {...rest} />;
    default:
      return <TextInput {...rest} />;
  }
};

const InputWrapper = ({ leftLabelText, labelClassName, wrapperClassName, children }) => (
  <div className={wrapperClassName}>
    {leftLabelText && <FormLabel className={labelClassName}>{leftLabelText}</FormLabel>}
    {children}
  </div>
);

const TextInput = ({
  name,
  value,
  error,
  helperText,
  onChange,
  fieldLabelText,
  className,
  ...rest
}) => (
  <InputWrapper {...rest}>
    <TextField
      label={fieldLabelText}
      variant="outlined"
      size="medium"
      name={name}
      value={value ?? ''}
      error={Boolean(error)}
      helperText={helperText}
      onChange={onChange}
      className={className}
      fullWidth
    />
  </InputWrapper>
);

const PasswordInput = ({
  name,
  value,
  error,
  helperText,
  fieldLabelText,
  onChange,
  className,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <InputWrapper {...rest}>
      <FormControl variant="outlined" error={Boolean(error)} fullWidth className={className}>
        <InputLabel htmlFor={name}>{fieldLabelText}</InputLabel>
        <OutlinedInput
          id={name}
          name={name}
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          label={fieldLabelText}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label={`Toggle ${fieldLabelText}`}
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </InputWrapper>
  );
};

const DateInput = ({ name, value, fieldLabelText, onChange, className, ...rest }) => (
  <InputWrapper {...rest}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        name={name}
        label={fieldLabelText}
        value={value}
        onChange={onChange}
        className={className}
      />
    </LocalizationProvider>
  </InputWrapper>
);

const SelectInput = ({ name, value, fieldLabelText, onChange, arrOfItems, ...rest }) => (
  <InputWrapper {...rest}>
    <FormControl variant="outlined" fullWidth>
      <InputLabel id={name}>{fieldLabelText}</InputLabel>
      <Select labelId={name} name={name} value={value} onChange={onChange} label={fieldLabelText}>
        {arrOfItems.map((item) => (
          <MenuItem key={item.id} value={item.title}>
            {item.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </InputWrapper>
);

const RadioInput = ({
  name,
  value,
  fieldLabelText,
  labelClassName,
  radioGroupClassName,
  onChange,
  arrOfItems,
  ...rest
}) => (
  <InputWrapper {...rest}>
    <InputLabel className={labelClassName} id={name}>
      {fieldLabelText}
    </InputLabel>
    <RadioGroup
      className={radioGroupClassName}
      aria-labelledby={name}
      name={name}
      onChange={onChange}
    >
      {arrOfItems.map((item) => (
        <FormControlLabel
          key={item.id}
          value={item.value}
          label={item.label}
          checked={item.value === value}
          control={<Radio />}
        />
      ))}
    </RadioGroup>
  </InputWrapper>
);
