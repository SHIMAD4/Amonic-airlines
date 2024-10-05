import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { Input } from '@/shared/ui/molecules';
import styles from './styles.module.scss';
import { API } from '@/shared/api';
import { handleClearSelectedUser } from '@/shared/lib/slices/userSlice.tsx';
import { handleClearSelectedUserId } from '@/shared/lib/slices/tableSlice.tsx';

// TODO: Добавить роли
function EditUserPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [selectedOffice, setSelectedOffice] = useState('');
  const { selectedUser } = useAppSelector((state) => state.userSlice);
  const [formState, setFormState] = useState({
    first_name: selectedUser.first_name,
    last_name: selectedUser.last_name,
    email: selectedUser.email,
    office: selectedUser.office_id || '',
    role: selectedUser.role_id === 1 ? 'Administrator' : 'User',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSelectedOffice(value);
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

    dispatch(handleClearSelectedUser());
    dispatch(handleClearSelectedUserId());

    setTimeout(() => {
      navigate('/home', { replace: true });
    }, 200);
  };

  useEffect(() => {
    setSelectedOffice(selectedUser.role_id === 1 ? 'Administrator' : 'User');
  }, []);

  return (
    <div className={styles.formWrapper}>
      <h1 className={styles.heading}>Edit user</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          variant="RadioInput"
          wrapperClassName={styles.labelWrapper}
          fieldLabelText="Role"
          labelClassName={styles.label}
          radioGroupClassName={styles.radioGroup}
          name="role"
          value={selectedOffice}
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
