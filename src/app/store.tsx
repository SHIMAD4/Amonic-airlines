import { configureStore } from '@reduxjs/toolkit';
import TableReducer from '@/shared/lib/slices/tableSlice.tsx';
import UserReducer from '@/shared/lib/slices/userSlice.tsx';

const store = configureStore({
  reducer: {
    tableSlice: TableReducer,
    userSlice: UserReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
