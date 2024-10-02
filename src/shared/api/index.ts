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
  addUser: ({ email, first_name, last_name, office_id, birthdate, password, active }) =>
    ApiInstance.post('/user/add', {
      email: email,
      first_name: first_name,
      last_name: last_name,
      office: office_id.toString(),
      birthdate: birthdate,
      password: password,
      active: active,
    }),
};

export const API = {
  authBlock,
  tableBlock,
};
