import { createSlice } from '@reduxjs/toolkit';
import { filterUsersById, filterUsersByOffice } from '@/shared/lib/utils';
import { UsersRoles } from '@/shared/lib/types/user.tsx';

const userSlice = createSlice({
  name: 'userTitle',
  initialState: {
    users: [],
    filteredUsers: [],
    selectedUser: {},
    // TODO: Изменить в соответствии возвращаемой роли при логине
    userRole: UsersRoles.ADMIN,
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
    handleClearSelectedUser(state) {
      state.selectedUser = {};
    },
    handleFilterUsersByOffice(state, { payload }) {
      const { users, selectedOffice } = payload;
      state.filteredUsers = filterUsersByOffice(users, selectedOffice);
    },
  },
});

export const {
  handleSaveUsers,
  handleFilterUsersById,
  handleClearSelectedUser,
  handleFilterUsersByOffice,
} = userSlice.actions;
export default userSlice.reducer;
