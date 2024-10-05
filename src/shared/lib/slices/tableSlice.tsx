import { createSlice } from '@reduxjs/toolkit';

const tableSlice = createSlice({
  name: 'tabsTitle',
  initialState: {
    selectedUserId: 0,
  },
  reducers: {
    handleRowClick(state, { payload }) {
      const { id } = payload;

      state.selectedUserId = id;
    },
    handleClearSelectedUserId(state) {
      state.selectedUserId = 0;
    },
  },
});

export const { handleRowClick, handleClearSelectedUserId } = tableSlice.actions;
export default tableSlice.reducer;
