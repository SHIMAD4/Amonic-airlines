import { useForm } from '@/shared/lib/hook';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { useState } from 'react';
import { Input } from '@/shared/ui/molecules';
import styles from './styles.module.scss';

function EditUserPage() {
  const [selectValue, setSelectValue] = useState(10);
  const [selectRadio, setRadioValue] = useState(10);
  const { formValues, formErrors, handleChange } = useForm({
    email: '',
    firstname: '',
    lastname: '',
    office: '',
    role: '',
  });

  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || '/';

  const handleChangeSelect = (event) => {
    setSelectValue(event.target.value);
    handleChange({ target: { name: 'office', value: +event.target.value } });
  };

  const handleChangeRadio = (event) => {
    setRadioValue(event.target.value);
    handleChange({ target: { name: 'role', value: +event.target.value } });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      email: formValues.email,
      firstname: formValues.firstname,
      lastname: formValues.lastname,
      office: formValues.office,
      role: formValues.role,
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
          value={selectValue}
          onChange={handleChangeSelect}
          arrOfItems={[
            { id: 1, count: 10, text: 'All offices' },
            { id: 2, count: 20, text: 'Cell' },
            { id: 3, count: 30, text: 'Alabama' },
          ]}
        />
        <Input
          variant="RadioInput"
          wrapperClassName={styles.labelWrapper}
          fieldLabelText="Role"
          labelClassName={styles.label}
          radioGroupClassName={styles.radioGroup}
          name="role"
          value={selectRadio}
          onChange={handleChangeRadio}
          arrOfItems={[
            { id: 1, value: 10, label: 'User' },
            { id: 2, value: 20, label: 'Administrator' },
          ]}
        />
        <div className={styles.buttonWrapper}>
          <Button
            className={styles.buttonApply}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
          >
            Apply
          </Button>
          <Button
            className={styles.buttonCancel}
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

export default EditUserPage;
