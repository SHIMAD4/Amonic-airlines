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
  },
});

export const { handleRowClick } = tableSlice.actions;
export default tableSlice.reducer;
