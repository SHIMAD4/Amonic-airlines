import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/shared/lib/hook/useAuth.tsx';

function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = useAuth();
  const fromPage = location.state?.from?.pathname || '/';

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const user = form.username.value;

    signIn(user, () => navigate(fromPage, { replace: true }));
  };

  return (
    <>
      <h1>Login page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name: <input name="username" />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default LoginPage;
