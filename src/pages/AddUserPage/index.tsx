import { useForm } from '@/shared/lib/hook';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import styles from './styles.module.scss';
import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { Input } from '@/shared/molecules';
import clsx from 'clsx';

function AddUserPage() {
  const [value, setValue] = useState(10);
  const [dateValue, setDateValue] = useState<Dayjs | null>(dayjs('2022-04-17'));
  const { formValues, formErrors, handleChange } = useForm({
    email: '',
    firstname: '',
    lastname: '',
    office: '',
    birthdate: '',
    password: '',
  });

  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || '/';

  const handleChangeSelect = (event) => {
    setValue(event.target.value);
    handleChange({ target: { name: 'office', value: event.target.value } });
  };

  const handleDateChange = (newValue) => {
    setDateValue(newValue);
    handleChange({ target: { name: 'birthdate', value: newValue?.toDate() } });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      email: formValues.email,
      firstname: formValues.firstname,
      lastname: formValues.lastname,
      office: formValues.office,
      birthdate: formValues.birthdate,
      password: formValues.password,
    };

    // TODO: Добавлять в таблицу данные
    console.log(data);

    navigate(fromPage, { replace: true });
  };

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
          arrOfItems={[
            { id: 1, count: 10, text: 'All offices' },
            { id: 2, count: 20, text: 'Cell' },
            { id: 3, count: 30, text: 'Alabama' },
          ]}
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
