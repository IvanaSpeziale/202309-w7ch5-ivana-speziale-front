import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import usersReducer from '../slice/users.slice';
export const store = configureStore({
  reducer: {
    // Defino cada una de las ramas del estado
    usersState: usersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
