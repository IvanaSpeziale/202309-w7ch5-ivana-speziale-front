import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import usersReducer from '../redux/userSlice';

export const networkStore = configureStore({
  reducer: {
    networkUsers: usersReducer,
  },
});

export type NetworkDispatch = typeof networkStore.dispatch;
export type RootState = ReturnType<typeof networkStore.getState>;

export type NetworkThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
