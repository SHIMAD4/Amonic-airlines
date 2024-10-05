import axios from 'axios';

export const ApiInstance = axios.create({
  baseURL: 'http://194.67.84.116:3000',
});

const userBlock = {
  getToken: (email, password) =>
    ApiInstance.post('/login', {
      email: email,
      password: password,
    }),
  getUsers: () => ApiInstance.get('/user'),
  addUser: ({ email, first_name, last_name, office_id, birthdate, password, active }) =>
    ApiInstance.post('/user/add', {
      email: email,
      first_name: first_name,
      last_name: last_name,
      office: office_id,
      birthdate: birthdate,
      password: password,
      active: active,
    }),
  getOffices: () => ApiInstance.get('/offices'),
};

export const API = {
  userBlock,
};
