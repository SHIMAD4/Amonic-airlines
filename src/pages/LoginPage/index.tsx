import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/shared/lib/hook/useAuth.tsx';
import styles from './styles.module.scss';
import { Button, TextField } from '@mui/material';

function Index() {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = useAuth();
  const fromPage = location.state?.from?.pathname || '/';

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    // TODO: Добавить логику проверки формы
    const user = {
      email: form.email.value,
      password: form.password.value,
    };

    signIn(user, () => navigate(fromPage, { replace: true }));
  };

  return (
    <div className={styles.formWrapper}>
      <h1 className={styles.heading}>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <TextField
          className={styles.textFieldEmail}
          label="Email address"
          variant="outlined"
          size="medium"
          id="email"
        />
        <TextField
          className={styles.textFieldPass}
          label="Password"
          variant="outlined"
          size="medium"
          type="password"
          id="password"
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
          {/* TODO: Добавить логику выхода из формы */}
          <Button className={styles.buttonExit} variant="contained" color="error" size="large">
            Exit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Index;
