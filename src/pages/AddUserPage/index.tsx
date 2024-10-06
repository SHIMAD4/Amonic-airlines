import { useForm } from '@/shared/lib/hooks';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import styles from './styles.module.scss';
import { useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { Input } from '@/shared/ui/molecules';
import clsx from 'clsx';
import { API } from '@/shared/api';
import { getFormattedISODate } from '@/shared/lib/utils';
import { OfficeType } from '@/shared/lib/types/user.tsx';

function AddUserPage() {
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const [offices, setOffices] = useState<OfficeType[]>([]);
  const [dateValue, setDateValue] = useState<Dayjs | null>(dayjs(getFormattedISODate(new Date())));
  const { formValues, formErrors, handleChange } = useForm({
    email: '',
    first_name: '',
    last_name: '',
    office_id: '',
    birthdate: '',
    password: '',
  });

  const handleChangeSelect = (event) => {
    setValue(event.target.value);
    handleChange({ target: { name: 'office', value: event.target.value } });
  };
  const handleDateChange = (newValue) => {
    setDateValue(newValue);
    handleChange({ target: { name: 'birthdate', value: getFormattedISODate(newValue) } });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    API.userBlock.addUser({
      email: formValues.email,
      first_name: formValues.firstname,
      last_name: formValues.lastname,
      office_id: formValues.office ?? value,
      birthdate: formValues.birthdate,
      password: formValues.password,
      active: true,
    });

    setTimeout(() => {
      navigate('/home');
    }, 250);
  };

  useEffect(() => {
    API.userBlock.getOffices().then(({ data }) => setOffices(data));
  }, []);

  return (
    <div className={styles.formWrapper}>
      <h1 className={styles.heading}>Add user</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          variant="TextInput"
          wrapperClassName={styles.labelWrapper}
          fieldLabelText="Email address"
          leftLabelText="Email address"
          labelClassName={styles.label}
          name="email"
          value={formValues.email}
          error={formErrors.email}
          helperText={formErrors.email}
          onChange={handleChange}
          required={true}
        />
        <Input
          variant="TextInput"
          wrapperClassName={styles.labelWrapper}
          fieldLabelText="First name"
          leftLabelText="First name"
          labelClassName={styles.label}
          name="firstname"
          value={formValues.firstname}
          onChange={handleChange}
          required={true}
        />
        <Input
          variant="TextInput"
          wrapperClassName={styles.labelWrapper}
          fieldLabelText="Last name"
          leftLabelText="Last name"
          labelClassName={styles.label}
          name="lastname"
          value={formValues.lastname}
          onChange={handleChange}
          required={true}
        />
        <Input
          variant="SelectInput"
          wrapperClassName={styles.labelWrapper}
          className={styles.select}
          fieldLabelText="Office"
          leftLabelText="Office"
          labelClassName={styles.label}
          name="office"
          value={value}
          onChange={handleChangeSelect}
          required={true}
          arrOfItems={offices}
        />
        <Input
          variant="DateInput"
          wrapperClassName={styles.labelWrapper}
          fieldLabelText="Select date"
          leftLabelText="Birthdate"
          labelClassName={styles.label}
          className={styles.date}
          name="birthdate"
          value={dateValue}
          onChange={handleDateChange}
          required={true}
        />
        <Input
          variant="PasswordInput"
          wrapperClassName={clsx(styles.labelWrapper, styles.labelWrapperPassword)}
          fieldLabelText="Password"
          leftLabelText="Password"
          labelClassName={styles.label}
          name="password"
          value={formValues.password}
          onChange={handleChange}
          required={true}
        />
        <div className={styles.buttonWrapper}>
          <Button
            className={styles.buttonLogin}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
          >
            Save
          </Button>
          <Button
            className={styles.buttonExit}
            variant="contained"
            color="error"
            size="large"
            onClick={() => navigate('/')}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddUserPage;
