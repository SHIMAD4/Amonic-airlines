import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/shared/lib/hook/useAuth.tsx';
import styles from './styles.module.scss';
import { Button } from '@mui/material';
import { TextInput, PasswordInput } from '@/shared/atoms';
import { useForm } from '@/shared/lib/hook';

const LoginPage = () => {
  const { formValues, formErrors, handleChange, validate } = useForm({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = useAuth();
  const fromPage = location.state?.from?.pathname || '/';

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    const user = {
      email: formValues.email,
      password: formValues.password,
    };

    signIn(user, () => navigate(fromPage, { replace: true }));
  };

  return (
    <div className={styles.formWrapper}>
      <h1 className={styles.heading}>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <TextInput
          label="Email"
          name="email"
          value={formValues.email}
          error={formErrors.email}
          helperText={formErrors.email}
          onChange={handleChange}
        />
        <PasswordInput
          label="Password"
          name="password"
          value={formValues.password}
          error={formErrors.password}
          helperText={formErrors.password}
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
            Login
          </Button>
          <Button
            className={styles.buttonExit}
            variant="contained"
            color="error"
            size="large"
            onClick={() => navigate('/')}
          >
            Exit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
