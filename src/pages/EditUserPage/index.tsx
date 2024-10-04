import { useAppSelector, useForm } from '@/shared/lib/hooks';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { Input } from '@/shared/ui/molecules';
import styles from './styles.module.scss';
import { OfficeType } from '@/shared/lib/types';
import { API } from '@/shared/api';

// TODO: Добавить роли
function EditUserPage() {
  const navigate = useNavigate();
  const [selectValue, setSelectValue] = useState('');
  // const [selectRadio, setRadioValue] = useState('');
  const { selectedUser } = useAppSelector((state) => state.userSlice);
  const [offices, setOffices] = useState<OfficeType[]>([]);
  const { formValues, formErrors, handleChange } = useForm({ ...selectedUser });

  const handleChangeSelect = (event) => {
    setSelectValue(event.target.value);
    handleChange({ target: { name: 'office', value: +event.target.value } });
  };

  // const handleChangeRadio = (event) => {
  //   setRadioValue(event.target.value);
  //   handleChange({ target: { name: 'role', value: +event.target.value } });
  // };

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

    navigate('/home', { replace: true });
  };

  useEffect(() => {
    API.userBlock.getOffices().then(({ data }) => setOffices(data));
    setSelectValue(selectedUser.office_id);
  }, []);

  return (
    <div className={styles.formWrapper}>
      <h1 className={styles.heading}>Edit user</h1>
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
          value={formValues.first_name}
          onChange={handleChange}
        />
        <Input
          variant="TextInput"
          wrapperClassName={styles.labelWrapper}
          fieldLabelText="Last name"
          leftLabelText="Last name"
          labelClassName={styles.label}
          name="lastname"
          value={formValues.last_name}
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
          arrOfItems={offices}
        />
        {/*<Input*/}
        {/*  variant="RadioInput"*/}
        {/*  wrapperClassName={styles.labelWrapper}*/}
        {/*  fieldLabelText="Role"*/}
        {/*  labelClassName={styles.label}*/}
        {/*  radioGroupClassName={styles.radioGroup}*/}
        {/*  name="role"*/}
        {/*  value={selectRadio}*/}
        {/*  onChange={handleChangeRadio}*/}
        {/*  arrOfItems={[*/}
        {/*    { id: 1, value: 10, label: 'User' },*/}
        {/*    { id: 2, value: 20, label: 'Administrator' },*/}
        {/*  ]}*/}
        {/*/>*/}
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
