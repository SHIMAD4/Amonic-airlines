export const validateEmail = (email) => {
  if (email.trim() === '') {
    return 'Email не может быть пустым';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return 'Некорректный формат email';
  } else {
    return '';
  }
};

export const validatePassword = (password) => {
  if (password.trim() === '') {
    return 'Пароль не может быть пустым';
  }
  // else if (password.length < 8) {
  //   return 'Пароль должен содержать не менее 8 символов';
  // }
  else {
    return '';
  }
};
