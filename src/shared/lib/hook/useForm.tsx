import { useState } from 'react';
import { validateEmail, validatePassword } from '../utils';

export const useForm = (initialValues) => {
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState<{ email: string; password: string }>({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    let error = '';

    if (name === 'email') {
      error = validateEmail(value);
    } else if (name === 'password') {
      error = validatePassword(value);
    }

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const validate = () => {
    const emailError = validateEmail(formValues.email);
    const passwordError = validatePassword(formValues.password);

    setFormErrors({
      email: emailError,
      password: passwordError,
    });

    return !emailError && !passwordError;
  };

  return {
    formValues,
    formErrors,
    handleChange,
    validate,
  };
};
