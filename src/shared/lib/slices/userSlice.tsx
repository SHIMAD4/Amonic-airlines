import { createSlice } from '@reduxjs/toolkit';
import { filterUsersById, filterUsersByOffice } from '@/shared/lib/utils';

const userSlice = createSlice({
  name: 'userTitle',
  initialState: {
    users: [],
    filteredUsers: [],
    selectedUser: {},
  },
  reducers: {
    handleSaveUsers(state, { payload }) {
      const { users } = payload;
      state.users = users;
      state.filteredUsers = users;
    },
    handleFilterUsersById(state, { payload }) {
      const { users, selectedId } = payload;
      state.selectedUser = filterUsersById(users, selectedId);
    },
    handleFilterUsersByOffice(state, { payload }) {
      const { users, selectedOffice } = payload;
      state.filteredUsers = filterUsersByOffice(users, selectedOffice);
    },
  },
});

export const { handleSaveUsers, handleFilterUsersById, handleFilterUsersByOffice } =
  userSlice.actions;
export default userSlice.reducer;
