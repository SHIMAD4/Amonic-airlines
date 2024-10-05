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
  const { selectedUser } = useAppSelector((state) => state.userSlice);
  const [offices, setOffices] = useState<OfficeType[]>([]);
  const [formState, setFormState] = useState({
    first_name: selectedUser.first_name,
    last_name: selectedUser.last_name,
    email: selectedUser.email,
    office: selectedUser.office_id || '',
    role: selectedUser.role_id === 1 ? 'Administrator' : 'User',
  });
  const { formErrors } = useForm(formState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    API.userBlock.editUser({
      email: formState.email,
      first_name: formState.first_name,
      last_name: formState.last_name,
      office_id: formState.office,
      role: formState.role,
    });

    setTimeout(() => {
      navigate('/home', { replace: true });
    }, 200);
  };

  useEffect(() => {
    API.userBlock.getOffices().then(({ data }) => setOffices(data));
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
          value={formState.email}
          error={formErrors.email}
          helperText={formErrors.email}
          onChange={handleInputChange}
          required={true}
        />
        <Input
          variant="TextInput"
          wrapperClassName={styles.labelWrapper}
          fieldLabelText="First name"
          leftLabelText="First name"
          labelClassName={styles.label}
          name="first_name"
          value={formState.first_name}
          onChange={handleInputChange}
        />
        <Input
          variant="TextInput"
          wrapperClassName={styles.labelWrapper}
          fieldLabelText="Last name"
          leftLabelText="Last name"
          labelClassName={styles.label}
          name="last_name"
          value={formState.last_name}
          onChange={handleInputChange}
        />
        <Input
          variant="SelectInput"
          wrapperClassName={styles.labelWrapper}
          className={styles.select}
          fieldLabelText="Office"
          leftLabelText="Office"
          labelClassName={styles.label}
          name="office"
          value={formState.office}
          onChange={handleInputChange}
          arrOfItems={offices}
        />
        <Input
          variant="RadioInput"
          wrapperClassName={styles.labelWrapper}
          fieldLabelText="Role"
          labelClassName={styles.label}
          radioGroupClassName={styles.radioGroup}
          name="role"
          value={formState.role}
          onChange={handleInputChange}
          arrOfItems={[
            { id: 1, value: 'Administrator', label: 'Administrator' },
            { id: 2, value: 'User', label: 'User' },
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
