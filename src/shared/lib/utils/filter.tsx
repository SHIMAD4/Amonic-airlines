export const filterUsersById = (users, id) => {
  return users.filter((user) => user.id === id)[0];
};

export const filterUsersByOffice = (users, office) => {
  if (office === 'All') {
    return users;
  }

  return users.filter((user) => user.office_id === office);
};
