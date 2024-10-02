import axios from 'axios';

export const ApiInstance = axios.create({
  baseURL: 'http://194.67.84.116:3000',
});

const authBlock = {
  getLoginId: (email, password) =>
    ApiInstance.post('/login', {
      email: email,
      password: password,
    }),
};

const tableBlock = {
  getUsers: () => ApiInstance.get('/user'),
};

export const API = {
  authBlock,
  tableBlock,
};
